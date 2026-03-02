// src/lib/generateContent.ts
// Generador de contenido contextualizado para las 546 landing pages de ventapvc.com.
// Cada funcion produce texto unico basado en ubicacion, clima, zona y variante.

import type { Location } from '@/types/location';
import { ClimateType, LocationRegion } from '@/types/location';

// ---------------------------------------------------------------------------
// Tipos auxiliares internos
// ---------------------------------------------------------------------------

type ZoneKind = 'bcnCity' | 'bcnMetro' | 'catalonia' | 'peninsula' | 'islands' | 'ceutaMelilla';

interface ClimateRecommendation {
  recommended: string;
  reason: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Determina la zona logistica de una ubicacion.
 */
function getZone(location: Location): ZoneKind {
  if (location.isBcnCity) return 'bcnCity';
  if (location.isBcnMetro) return 'bcnMetro';
  if (location.isCatalonia) return 'catalonia';
  if (
    location.region === LocationRegion.CANARIAS ||
    location.region === LocationRegion.BALEARES
  ) {
    return 'islands';
  }
  if (location.region === LocationRegion.CEUTA_MELILLA) return 'ceutaMelilla';
  return 'peninsula';
}

/**
 * Devuelve un adjetivo climatico descriptivo para usar en textos.
 */
function climateAdjective(climate: ClimateType): string {
  const map: Record<ClimateType, string> = {
    [ClimateType.MEDITERRANEAN]: 'mediterráneo',
    [ClimateType.CONTINENTAL]: 'continental',
    [ClimateType.OCEANIC]: 'oceánico',
    [ClimateType.SUBTROPICAL]: 'subtropical',
    [ClimateType.MOUNTAIN]: 'de montaña',
    [ClimateType.SEMIARID]: 'semiárido',
  };
  return map[climate];
}

/**
 * Texto breve describiendo las condiciones climaticas habituales.
 */
function climateConditionsSummary(climate: ClimateType): string {
  switch (climate) {
    case ClimateType.MEDITERRANEAN:
      return 'veranos cálidos e inviernos suaves, con humedad moderada y lluvias estacionales';
    case ClimateType.CONTINENTAL:
      return 'inviernos fríos con heladas, veranos calurosos y fuertes contrastes térmicos entre estaciones';
    case ClimateType.OCEANIC:
      return 'lluvias frecuentes durante todo el año, alta humedad ambiental e inviernos suaves';
    case ClimateType.SUBTROPICAL:
      return 'temperaturas agradables todo el año, alta luminosidad y brisa marina constante';
    case ClimateType.MOUNTAIN:
      return 'inviernos largos con nieve y heladas, veranos frescos y grandes oscilaciones térmicas diarias';
    case ClimateType.SEMIARID:
      return 'veranos muy calurosos y secos, inviernos templados, escasas precipitaciones y mucho polvo ambiental';
  }
}

/**
 * Nombre corto del producto recomendado segun clima.
 */
function recommendedProductShort(climate: ClimateType): string {
  switch (climate) {
    case ClimateType.MEDITERRANEAN:
      return 'SPC o vinílico click';
    case ClimateType.CONTINENTAL:
      return 'SPC de 5,5-7 mm';
    case ClimateType.OCEANIC:
      return 'SPC con barrera antihumedad';
    case ClimateType.SUBTROPICAL:
      return 'SPC con protección UV reforzada';
    case ClimateType.MOUNTAIN:
      return 'SPC de 6-8 mm con base aislante';
    case ClimateType.SEMIARID:
      return 'SPC con capa de uso de 0,55 mm';
  }
}

/**
 * Formatea la poblacion como texto amigable.
 */
function populationLabel(population: number): string {
  if (population >= 1_000_000) return 'más de un millón de habitantes';
  if (population >= 500_000) return 'más de medio millón de habitantes';
  if (population >= 100_000) return `más de ${Math.floor(population / 1000) * 1000} habitantes`;
  if (population >= 10_000) return `cerca de ${Math.floor(population / 1000) * 1000} habitantes`;
  if (population >= 1_000) return `unos ${Math.floor(population / 100) * 100} habitantes`;
  return `${population} habitantes`;
}

/**
 * Selecciona una variante de 1-5 usando introVariant como semilla.
 */
function pickVariant<T>(variants: T[], introVariant: number): T {
  const idx = ((introVariant - 1) % variants.length + variants.length) % variants.length;
  return variants[idx];
}

/**
 * Selecciona variante usando introVariant como semilla con offset adicional para
 * que distintas secciones no coincidan en el mismo indice.
 */
function pickVariantOffset<T>(variants: T[], introVariant: number, offset: number): T {
  const idx = ((introVariant - 1 + offset) % variants.length + variants.length) % variants.length;
  return variants[idx];
}

// ---------------------------------------------------------------------------
// 1. generateIntro
// ---------------------------------------------------------------------------

/**
 * Genera la introduccion de la landing page.
 * 5 variantes rotadas por `location.introVariant`, cada una de 3-4 parrafos
 * adaptados a zona (BCN/metro/catalonia/nacional), clima y tipo de vivienda.
 */
export function generateIntro(location: Location): string {
  const zone = getZone(location);
  const adj = climateAdjective(location.climate);
  const conditions = climateConditionsSummary(location.climate);
  const product = recommendedProductShort(location.climate);
  const pop = populationLabel(location.population);
  const nearby = location.nearbyCities.slice(0, 3);

  // Bloque contextual de zona (se inyecta en cada variante)
  let zoneBlock: string;
  switch (zone) {
    case 'bcnCity':
      zoneBlock =
        `Al encontrarte en ${location.name}, dentro de Barcelona ciudad, tienes la ventaja de poder visitar nuestro showroom y recibir el material en solo 24-48 horas desde nuestro almacén local. Nuestro equipo de instaladores propios trabaja a diario en tu barrio, por lo que conocen a la perfección las características constructivas de la zona.`;
      break;
    case 'bcnMetro':
      zoneBlock =
        `${location.name} se encuentra dentro del área metropolitana de Barcelona, lo que te permite disfrutar de nuestro servicio de entrega rápida en 24-48 horas y de la cercanía de nuestro showroom. Nuestros equipos de instalación trabajan habitualmente en la comarca y conocen las viviendas de la zona.`;
      break;
    case 'catalonia':
      zoneBlock =
        `Desde nuestro almacén en Barcelona enviamos directamente a ${location.name} en un plazo de 48-72 horas. La proximidad logística nos permite ofrecerte precios competitivos sin recargos y un servicio de atención cercano respaldado por nuestra red de instaladores certificados en ${location.province}.`;
      break;
    default:
      zoneBlock =
        `Enviamos a ${location.name} desde nuestro almacén central de Barcelona en un plazo de ${location.deliveryTime}. Contamos con instaladores profesionales certificados en la provincia de ${location.province} que conocen las particularidades constructivas de las viviendas de tu zona.`;
      break;
  }

  // Bloque de clima
  const climateBlock =
    `${location.name} tiene un clima ${adj}, con ${conditions}. Este tipo de entorno exige un pavimento que se adapte sin problemas a las condiciones locales, y el suelo de PVC es una de las mejores opciones disponibles. Te recomendamos especialmente el ${product}, diseñado para ofrecer el máximo rendimiento en las condiciones climáticas de tu zona.`;

  // Bloque de vivienda
  const housingBlock =
    `La tipología de vivienda predominante en ${location.name} son ${location.housingType.toLowerCase()}. Nuestros suelos PVC se adaptan perfectamente a este tipo de inmuebles: la instalación flotante no requiere obras, se puede colocar sobre el suelo existente y el resultado es un acabado moderno, resistente y fácil de mantener. Tanto si buscas renovar un salón como equipar una cocina o un baño, tenemos la solución que encaja con tu vivienda y tu presupuesto.`;

  const variant = location.introVariant;

  // --- VARIANTE 1: Abre con pregunta directa ---
  if (variant === 1) {
    return [
      `<p>¿Estás buscando suelos de PVC en ${location.name}? Has llegado al lugar adecuado. En VentaPVC.com somos especialistas en pavimentos vinílicos de alta calidad con precios desde 6,99 €/m², y ponemos a tu disposición un catálogo de más de 200 modelos con entrega directa en ${location.name}. Ya sea para una reforma integral o para renovar una sola estancia, te ayudamos a encontrar el suelo perfecto para tu hogar.</p>`,
      `<p>${zoneBlock}</p>`,
      `<p>${climateBlock}</p>`,
      `<p>${housingBlock}</p>`,
    ].join('\n');
  }

  // --- VARIANTE 2: Abre con "En [ciudad]..." ---
  if (variant === 2) {
    return [
      `<p>En ${location.name}, con ${pop}, cada vez más familias eligen suelos de PVC para sus viviendas. Y no es de extrañar: combinan una estética moderna con una resistencia excepcional, se instalan en tiempo récord y su mantenimiento es prácticamente nulo. En VentaPVC.com te ofrecemos la mayor selección de pavimentos vinílicos con envío directo a ${location.name} y precios imbatibles desde 6,99 €/m².</p>`,
      `<p>${climateBlock}</p>`,
      `<p>${zoneBlock}</p>`,
      `<p>${housingBlock}</p>`,
    ].join('\n');
  }

  // --- VARIANTE 3: Abre con dato + propuesta de valor ---
  if (variant === 3) {
    return [
      `<p>Renovar los suelos de tu vivienda en ${location.name} ya no tiene por qué ser una obra larga y costosa. Con los suelos de PVC de VentaPVC.com puedes transformar cualquier estancia en uno o dos días, sin polvo, sin escombros y sin desalojar tu casa. Disponemos de pavimentos vinílicos click, SPC, en rollo, losetas y autoadhesivos con envío a ${location.name} y precios que empiezan en tan solo 6,99 €/m².</p>`,
      `<p>${housingBlock}</p>`,
      `<p>${climateBlock}</p>`,
      `<p>${zoneBlock}</p>`,
    ].join('\n');
  }

  // --- VARIANTE 4: Abre con beneficio clave ---
  if (variant === 4) {
    return [
      `<p>Resistencia, diseño y un precio justo: eso es lo que encontrarás en los suelos de PVC que enviamos a ${location.name}. En VentaPVC.com llevamos años equipando viviendas, locales y oficinas en toda España con pavimentos vinílicos de primera calidad. Si vives en ${location.name}, tienes a tu alcance más de 200 modelos con acabados que imitan madera, piedra, cemento y baldosa hidráulica, todos desde 6,99 €/m².</p>`,
      `<p>${zoneBlock}</p>`,
      `<p>${housingBlock}</p>`,
      `<p>${climateBlock}</p>`,
    ].join('\n');
  }

  // --- VARIANTE 5: Abre con contexto local + vecinos ---
  const nearbyText = nearby.length > 0
    ? ` y las localidades cercanas como ${nearby.join(', ')}`
    : '';
  return [
    `<p>Si vives en ${location.name}${nearbyText}, te damos la bienvenida a VentaPVC.com, tu tienda online de referencia en suelos de PVC. Ofrecemos la gama más completa del mercado — vinílico click, SPC, rollo, losetas y autoadhesivo — con envío directo a ${location.name} y un equipo de profesionales listos para asesorarte y, si lo necesitas, encargarse de la instalación.</p>`,
    `<p>${climateBlock}</p>`,
    `<p>${housingBlock}</p>`,
    `<p>${zoneBlock}</p>`,
  ].join('\n');
}

// ---------------------------------------------------------------------------
// 2. generateWhyPvc
// ---------------------------------------------------------------------------

/**
 * Genera la seccion "Por que elegir suelo PVC en [ciudad]" adaptada al clima.
 * Retorna HTML listo para renderizar con listas de beneficios.
 * 5 variantes de estructura rotadas por introVariant.
 */
export function generateWhyPvc(location: Location): string {
  const { name, climate, introVariant, housingType } = location;
  const adj = climateAdjective(climate);

  // Beneficios especificos por clima
  interface ClimateBenefit {
    title: string;
    items: string[];
    summary: string;
  }

  const benefitsByClimate: Record<ClimateType, ClimateBenefit> = {
    [ClimateType.MEDITERRANEAN]: {
      title: `Ventajas del suelo PVC para el clima mediterráneo de ${name}`,
      items: [
        'Resistencia total a la humedad ambiental, que puede superar el 70 % en verano en la costa.',
        'No se dilata ni deforma con los cambios de temperatura típicos entre estaciones.',
        'Superficie fresca al tacto en verano, más confortable que la cerámica.',
        'Protección UV de serie que evita la decoloración por la intensa luz solar.',
        'Resistente al salitre y la brisa marina en viviendas cercanas a la costa.',
        'Compatible con aire acondicionado sin riesgo de condensación ni juntas abiertas.',
        '100 % impermeable: perfecto para las lluvias torrenciales de otoño.',
      ],
      summary: `El clima mediterráneo de ${name}, con sus veranos cálidos y húmedos, pone a prueba los suelos tradicionales. El PVC resiste donde otros materiales fallan: no absorbe humedad, no se hincha con el calor y mantiene su acabado impecable durante décadas.`,
    },
    [ClimateType.CONTINENTAL]: {
      title: `Ventajas del suelo PVC para el clima continental de ${name}`,
      items: [
        'Excelente aislamiento térmico que reduce la sensación de frío en invierno.',
        'Estabilidad dimensional ante los fuertes contrastes térmicos entre verano e invierno.',
        'Compatible con suelo radiante y calefacción intensiva (hasta 35 °C en superficie).',
        'Pisada cálida y confortable incluso sin calefacción, a diferencia de la cerámica.',
        'No se agrieta ni se seca como la madera natural con la calefacción.',
        'Resistente a los ciclos de frío-calor repetidos sin perder estabilidad.',
        'Contribuye a la eficiencia energética del hogar al reducir la pérdida de calor por el suelo.',
      ],
      summary: `Los inviernos fríos y los veranos calurosos de ${name} exigen un suelo estable y aislante. El PVC, especialmente en su variante SPC, ofrece una barrera térmica natural que mejora el confort del hogar y reduce el consumo de calefacción.`,
    },
    [ClimateType.OCEANIC]: {
      title: `Ventajas del suelo PVC para el clima oceánico de ${name}`,
      items: [
        '100 % impermeable: resistente a la lluvia constante, las botas mojadas y la humedad permanente.',
        'No desarrolla moho, hongos ni bacterias, un problema habitual en zonas húmedas.',
        'Superficie antideslizante disponible (R10-R11) para entradas y zonas de paso con agua.',
        'No se hincha ni deforma con la humedad ambiental superior al 75 %.',
        'Aislamiento térmico que compensa la falta de sol con una pisada más cálida.',
        'Los colores no se degradan con la menor exposición UV del norte.',
        'Instalación posible en cualquier época del año, incluso en temporada de lluvias.',
      ],
      summary: `Con la lluvia frecuente y la alta humedad de ${name}, muchos suelos tradicionales sufren deformaciones y moho. El suelo PVC es completamente impermeable y antibacteriano, convirtiéndose en la opción más práctica y duradera para las viviendas del norte.`,
    },
    [ClimateType.SUBTROPICAL]: {
      title: `Ventajas del suelo PVC para el clima subtropical de ${name}`,
      items: [
        'No acumula calor excesivo: mantiene una temperatura de superficie agradable todo el año.',
        'Resistente al salitre, la arena y la brisa marina propias del entorno insular.',
        'Protección UV reforzada contra la alta radiación solar de las islas.',
        'Limpieza ultrarrápida de la arena que inevitablemente entra en las viviendas costeras.',
        'Ideal para segundas residencias: no necesita mantenimiento durante los períodos sin uso.',
        'No se decolora ni degrada con las más de 2.800 horas de sol anuales.',
        'Material ligero que facilita el transporte marítimo y reduce costes de envío.',
      ],
      summary: `El clima subtropical de ${name}, con sus temperaturas estables y su alta luminosidad, es en realidad muy favorable para los suelos PVC. La ausencia de cambios bruscos de temperatura asegura una estabilidad dimensional perfecta, y la resistencia a la arena y el salitre lo convierte en la opción estrella para viviendas insulares.`,
    },
    [ClimateType.MOUNTAIN]: {
      title: `Ventajas del suelo PVC para el clima de montaña de ${name}`,
      items: [
        'Máximo aislamiento térmico con grosores de 6-8 mm y base aislante adicional.',
        'Resistente al frío extremo: no se agrieta ni deforma bajo cero.',
        'Soporta sin problemas el agua de la nieve fundida y las botas mojadas.',
        'Compatible con calefacción intensiva: suelo radiante, estufas de pellets y chimeneas.',
        'Ideal para segundas residencias de montaña que pasan semanas cerradas en invierno.',
        'No se contrae con el frío ni se expande con la calefacción como la madera.',
        'Aislamiento acústico de hasta 22 dB que refuerza la tranquilidad del entorno.',
      ],
      summary: `Las condiciones extremas del clima de montaña de ${name} — nieve, heladas, grandes oscilaciones térmicas — son un reto para cualquier pavimento. El suelo PVC SPC de alto grosor ofrece la mejor combinación de aislamiento, estabilidad y resistencia para viviendas de montaña, tanto de uso permanente como estacional.`,
    },
    [ClimateType.SEMIARID]: {
      title: `Ventajas del suelo PVC para el clima semiárido de ${name}`,
      items: [
        'Mantenimiento mínimo: la superficie no porosa no retiene polvo ni arena.',
        'Resistente al polvo y la tierra del ambiente seco sin rayarse ni deteriorarse.',
        'Estabilidad dimensional incluso con temperaturas exteriores superiores a 40 °C.',
        'La baja humedad ambiental es óptima para el PVC: cero riesgo de problemas por humedad.',
        'Protección UV que evita la decoloración por la intensa radiación solar.',
        'Pisada más fresca que el parquet y más cálida que la cerámica: equilibrio perfecto.',
        'No se reseca, agrieta ni pierde acabado como la madera natural en entornos secos.',
      ],
      summary: `El clima semiárido de ${name}, con sus veranos tórridos, su escasa humedad y su abundante polvo ambiental, es sorprendentemente favorable para los suelos PVC. El material no se reseca como la madera, resiste el calor intenso y su superficie lisa se limpia de arena y polvo en segundos.`,
    },
  };

  const benefit = benefitsByClimate[climate];

  // 5 variantes de estructura HTML
  const variants: string[] = [
    // V1: Resumen + lista numerada
    [
      `<h2>${benefit.title}</h2>`,
      `<p>${benefit.summary}</p>`,
      `<p>Estas son las razones principales por las que el suelo PVC es la mejor elección para viviendas como ${housingType.toLowerCase()} en ${name}:</p>`,
      '<ol>',
      ...benefit.items.map((item) => `  <li>${item}</li>`),
      '</ol>',
      `<p>En VentaPVC.com encontrarás el suelo PVC perfecto para las condiciones de ${name}. Solicita tu presupuesto gratuito y te asesoramos sobre el modelo que mejor se adapta a tu vivienda.</p>`,
    ].join('\n'),

    // V2: Pregunta + lista con viñetas + CTA
    [
      `<h2>¿Por qué elegir suelos de PVC en ${name}?</h2>`,
      `<p>Con un clima ${adj} como el de ${name}, la elección del pavimento adecuado marca la diferencia en el confort y la durabilidad de tu hogar. ${benefit.summary}</p>`,
      '<ul>',
      ...benefit.items.map((item) => `  <li><strong>${item.split(':')[0]}${item.includes(':') ? ':</strong>' + item.split(':').slice(1).join(':') : '</strong>'}`),
      '</ul>',
      `<p>Cada una de estas ventajas se traduce en ahorro, comodidad y tranquilidad para tu día a día en ${name}. Descubre nuestro catálogo completo y elige el suelo PVC que transformará tu hogar.</p>`,
    ].join('\n'),

    // V3: Contexto local + lista
    [
      `<h2>Suelos PVC en ${name}: la solución perfecta para tu clima</h2>`,
      `<p>Las viviendas de ${name} — mayoritariamente ${housingType.toLowerCase()} — necesitan un pavimento que resista las condiciones específicas de un entorno ${adj}. El suelo de PVC cumple con todas las exigencias:</p>`,
      '<ul>',
      ...benefit.items.map((item) => `  <li>${item}</li>`),
      '</ul>',
      `<p>${benefit.summary}</p>`,
      `<p>No importa si buscas la opción más económica (PVC en rollo desde 6,99 €/m²) o la gama premium (SPC desde 22,99 €/m²): en VentaPVC.com tenemos la solución ideal para ${name}.</p>`,
    ].join('\n'),

    // V4: Comparativa implicita + lista
    [
      `<h2>Beneficios del suelo PVC frente a otros pavimentos en ${name}</h2>`,
      `<p>Frente al parquet, la cerámica o el laminado, el suelo de PVC ofrece ventajas decisivas para el clima ${adj} de ${name}. Mientras la madera se deteriora y la cerámica resulta fría e incómoda, el PVC combina lo mejor de ambos mundos:</p>`,
      '<ul>',
      ...benefit.items.map((item) => `  <li>${item}</li>`),
      '</ul>',
      `<p>${benefit.summary} Todo ello con precios desde 6,99 €/m² y la posibilidad de instalación profesional en ${name}.</p>`,
    ].join('\n'),

    // V5: Datos + lista + cierre emocional
    [
      `<h2>¿Es el suelo PVC adecuado para ${name}?</h2>`,
      `<p>Rotundamente sí. ${name}, con ${populationLabel(location.population)} y un clima ${adj}, reúne todas las condiciones para que el suelo de PVC sea una inversión inteligente para tu vivienda. Estos son los motivos:</p>`,
      '<ol>',
      ...benefit.items.map((item) => `  <li>${item}</li>`),
      '</ol>',
      `<p>${benefit.summary}</p>`,
      `<p>Imagina llegar a casa y pisar un suelo bonito, cálido y que prácticamente se cuida solo. Eso es lo que te ofrece el PVC en ${name}. Pide tu presupuesto sin compromiso y compruébalo.</p>`,
    ].join('\n'),
  ];

  return pickVariant(variants, introVariant);
}

// ---------------------------------------------------------------------------
// 3. generateClimateRecommendation
// ---------------------------------------------------------------------------

/**
 * Devuelve el tipo de suelo recomendado y la razon segun el clima.
 */
export function generateClimateRecommendation(climate: ClimateType): ClimateRecommendation {
  switch (climate) {
    case ClimateType.MEDITERRANEAN:
      return {
        recommended: 'Suelo SPC o Vinílico Click',
        reason:
          'Ambos son 100 % resistentes a la humedad y a los cambios de temperatura propios del Mediterráneo. El SPC es la mejor opción si tu vivienda recibe mucha luz solar directa, ya que su núcleo rígido no se deforma con el calor. El vinílico click ofrece una excelente relación calidad-precio para el resto de estancias.',
      };
    case ClimateType.CONTINENTAL:
      return {
        recommended: 'Suelo SPC de 5,5 a 7 mm',
        reason:
          'El SPC es el pavimento vinílico más estable dimensionalmente del mercado, ideal para soportar los fuertes contrastes térmicos del clima continental. Su núcleo rígido de piedra y polímero no se dilata ni contrae, y su grosor generoso proporciona un excelente aislamiento térmico que reduce la pérdida de calor en invierno. Es totalmente compatible con suelo radiante hasta 35 °C.',
      };
    case ClimateType.OCEANIC:
      return {
        recommended: 'Suelo SPC con barrera antihumedad',
        reason:
          'La lluvia constante y la humedad superior al 75 % del clima oceánico exigen un suelo completamente impermeable y resistente al moho. El SPC con lámina antihumedad es la combinación perfecta: su núcleo rígido no absorbe agua, su superficie es antibacteriana y su instalación incluye protección contra la humedad ascendente del subsuelo.',
      };
    case ClimateType.SUBTROPICAL:
      return {
        recommended: 'Suelo SPC con protección UV reforzada',
        reason:
          'Las más de 2.800 horas de sol anuales del clima subtropical requieren un suelo con máxima protección contra la radiación ultravioleta. El SPC con capa de uso de 0,55 mm o superior y tratamiento UV reforzado mantiene sus colores intactos durante décadas. Además, su resistencia al salitre y la arena lo convierte en el pavimento perfecto para viviendas insulares y costeras.',
      };
    case ClimateType.MOUNTAIN:
      return {
        recommended: 'Suelo SPC de 6 a 8 mm con base aislante IXPE',
        reason:
          'El frío extremo, la nieve y las grandes oscilaciones térmicas de la montaña necesitan el suelo más aislante y estable del mercado. El SPC de alto grosor con base IXPE integrada proporciona la mejor barrera térmica entre el subsuelo frío y la superficie, reduciendo la pérdida de calor y mejorando la eficiencia de la calefacción. Resiste los ciclos de frío-calor sin deformarse.',
      };
    case ClimateType.SEMIARID:
      return {
        recommended: 'Suelo SPC con capa de uso de 0,55 mm',
        reason:
          'El clima semiárido, con veranos por encima de 40 °C y abundante polvo ambiental, necesita un suelo estable al calor extremo y fácil de limpiar. El SPC con capa de uso reforzada soporta temperaturas de superficie elevadas sin deformarse y su acabado liso no retiene arena ni polvo. La protección UV evita la decoloración por la intensa radiación solar.',
      };
  }
}

// ---------------------------------------------------------------------------
// 4. generateDeliveryInfo
// ---------------------------------------------------------------------------

/**
 * Genera texto personalizado sobre la entrega en la ubicacion concreta.
 */
export function generateDeliveryInfo(location: Location): string {
  const zone = getZone(location);

  switch (zone) {
    case 'bcnCity':
      return [
        `<h3>Entrega en 24-48h desde nuestro almacén de Barcelona</h3>`,
        `<p>Al estar en ${location.name}, dentro de Barcelona ciudad, dispones de nuestro servicio de entrega exprés. Tu pedido sale directamente de nuestro almacén local y llega a tu portal en un plazo de 24 a 48 horas desde la confirmación. Los productos más vendidos están siempre en stock, por lo que la mayoría de pedidos los entregamos al día siguiente.</p>`,
        `<p>Nuestro equipo de reparto conoce ${location.name} al detalle y te avisa por teléfono 30 minutos antes de llegar. La entrega estándar es a pie de calle; si necesitas subida a planta, consúltanos y te organizamos el servicio. Para pedidos superiores a 300 €, la entrega dentro de Barcelona ciudad es completamente gratuita.</p>`,
        `<p>Si necesitas un modelo específico que no tenemos en stock o un acabado bajo pedido, el plazo es de 5 a 7 días laborables. En cualquier caso, te informamos del estado de tu pedido en cada paso y te facilitamos un número de seguimiento.</p>`,
      ].join('\n');

    case 'bcnMetro':
      return [
        `<h3>Entrega en 24-48h en toda el área metropolitana</h3>`,
        `<p>${location.name} se encuentra dentro de nuestra zona de reparto prioritaria del área metropolitana de Barcelona. Todos los pedidos de productos en stock se entregan en un plazo de 24 a 48 horas. Nuestras furgonetas de reparto cubren ${location.name} y toda la comarca varias veces por semana, lo que nos permite ser ágiles y puntuales.</p>`,
        `<p>El coste de envío a ${location.name} es gratuito para pedidos superiores a 400 €. Para pedidos menores, el transporte tiene un coste fijo de 19,90 €. La entrega se realiza a pie de calle en horario de lunes a viernes de 9:00 a 18:00. Te llamamos el mismo día de la entrega para coordinar una franja horaria de 2 horas.</p>`,
        `<p>Para modelos bajo pedido o acabados especiales, el plazo se amplía a 5-7 días laborables. Te enviamos el número de seguimiento por SMS y email para que puedas rastrear tu envío en todo momento.</p>`,
      ].join('\n');

    case 'catalonia':
      return [
        `<h3>Envío en 48-72h desde Barcelona</h3>`,
        `<p>Desde nuestro almacén de Barcelona enviamos directamente a ${location.name} con transporte dedicado. El plazo estándar para la provincia de ${location.province} es de 48 a 72 horas para productos en stock. Los envíos salen de Barcelona de lunes a jueves y se entregan al día siguiente o en un máximo de dos días laborables.</p>`,
        `<p>El envío a ${location.name} es gratuito para pedidos superiores a 500 €. Para pedidos de menor importe, el coste de transporte oscila entre 29 € y 49 € dependiendo del volumen y el peso. La entrega se realiza a pie de calle o en planta baja, con opción de subida a planta con suplemento.</p>`,
        `<p>Para modelos especiales o bajo pedido, el plazo total es de 7 a 10 días laborables. Te proporcionamos un número de seguimiento para que puedas rastrear tu pedido en tiempo real desde la salida de nuestro almacén.</p>`,
      ].join('\n');

    case 'islands':
      return [
        `<h3>Envío especial a islas en 5-10 días</h3>`,
        `<p>Realizamos envíos regulares a ${location.name} mediante transporte marítimo especializado en pavimentos. El plazo de entrega estándar es de 5 a 10 días laborables desde la confirmación del pedido, dependiendo de la frecuencia de salidas y las condiciones de navegación.</p>`,
        `<p>Los portes a ${location.name} tienen un coste adicional respecto a la península, que varía entre 50 € y 150 € según el volumen, el peso y la isla de destino. Este coste se incluye de forma transparente y desglosada en tu presupuesto. Para pedidos de gran volumen (superiores a 100 m²), negociamos tarifas especiales de transporte que pueden reducir significativamente el coste por metro cuadrado.</p>`,
        `<p>Coordinamos la logística de principio a fin: salida del almacén de Barcelona, tránsito marítimo, despacho en destino y entrega en ${location.name}. Te proporcionamos seguimiento completo en cada etapa del envío.</p>`,
      ].join('\n');

    case 'ceutaMelilla':
      return [
        `<h3>Envío a ${location.name} — Consultar plazos</h3>`,
        `<p>Realizamos envíos a ${location.name} con plazos y condiciones especiales que dependen de las rutas marítimas disponibles y la tramitación aduanera. Te recomendamos contactarnos directamente para obtener un presupuesto de transporte detallado y un plazo de entrega ajustado a tu pedido concreto.</p>`,
        `<p>Nuestro departamento de logística tiene experiencia en envíos a ${location.name} y se encarga de toda la gestión documental y aduanera necesaria. El coste de transporte se calcula de forma individual para cada pedido y se te comunica antes de confirmar la compra, sin sorpresas.</p>`,
        `<p>Si necesitas asesoramiento sobre qué tipo de suelo PVC es más adecuado para tu vivienda en ${location.name}, nuestros asesores están disponibles por teléfono, email y videollamada para ayudarte a elegir la mejor opción.</p>`,
      ].join('\n');

    default: // peninsula
      return [
        `<h3>Envío en ${location.deliveryTime} a ${location.name}</h3>`,
        `<p>Enviamos tu pedido de suelos PVC a ${location.name} desde nuestro almacén central de Barcelona mediante transporte especializado en pavimentos. El plazo de entrega estándar para la provincia de ${location.province} es de ${location.deliveryTime} desde la confirmación del pedido para los productos en stock.</p>`,
        `<p>El envío es gratuito para pedidos superiores a 500 €, lo que incluye la gran mayoría de proyectos de suelo para una vivienda completa. Para pedidos de menor importe, el coste de transporte a ${location.name} oscila entre 39 € y 69 € según el volumen. La entrega se realiza a pie de calle en horario comercial de lunes a viernes.</p>`,
        `<p>Para modelos especiales o bajo pedido, el plazo total se amplía a 7-10 días laborables. Te enviamos el número de seguimiento por SMS y email en cuanto tu pedido sale de nuestro almacén, para que puedas rastrearlo hasta la entrega en ${location.name}.</p>`,
      ].join('\n');
  }
}

// ---------------------------------------------------------------------------
// 5. generateInstallationInfo
// ---------------------------------------------------------------------------

/**
 * Genera informacion sobre el servicio de instalacion en la ubicacion.
 * 3 variantes de estructura para cada zona.
 */
export function generateInstallationInfo(location: Location): string {
  const zone = getZone(location);
  const variant = location.introVariant;

  // --- BCN CITY / METRO ---
  if (zone === 'bcnCity' || zone === 'bcnMetro') {
    const variants: string[] = [
      // V1
      [
        `<p>En ${location.name} contamos con nuestro propio equipo de instaladores profesionales con sede en Barcelona. Son especialistas en pavimentos vinílicos con más de 10 años de experiencia y trabajan exclusivamente para VentaPVC.com, lo que garantiza la máxima calidad y compromiso en cada proyecto.</p>`,
        `<p>El proceso es sencillo: después de elegir tu suelo, coordinamos una visita técnica gratuita a tu vivienda en ${location.name} donde evaluamos el estado del subsuelo, tomamos medidas precisas y te asesoramos in situ sobre la mejor opción. A continuación, recibes un presupuesto cerrado que incluye material, instalación y recogida de residuos. El día acordado, nuestro equipo se presenta con todo lo necesario y deja tu suelo listo en uno o dos días.</p>`,
        `<p>Puedes visitar nuestro showroom en Barcelona para ver más de 200 modelos en persona y resolver cualquier duda con nuestros asesores.</p>`,
      ].join('\n'),

      // V2
      [
        `<p>Nuestros instaladores propios trabajan a diario en ${location.name} y en toda ${zone === 'bcnCity' ? 'Barcelona ciudad' : 'el área metropolitana'}. Conocen perfectamente las particularidades constructivas de las viviendas de la zona — ${location.housingType.toLowerCase()} — y se adaptan a las necesidades de cada proyecto.</p>`,
        `<p>Ofrecemos medición y asesoramiento gratuito a domicilio en ${location.name}. Nuestro técnico inspecciona el subsuelo, toma medidas y te recomienda el tipo de suelo PVC ideal para tu caso. En 24 horas recibes un presupuesto detallado sin compromiso. La instalación se programa según tu disponibilidad, normalmente en un plazo de 3 a 7 días desde la aceptación.</p>`,
        `<p>Además, si prefieres ver y tocar los materiales antes de decidir, nuestro showroom de Barcelona está a pocos minutos de ${location.name}.</p>`,
      ].join('\n'),

      // V3
      [
        `<p>¿Necesitas instalación profesional de suelo PVC en ${location.name}? Nuestro equipo propio de Barcelona se encarga de todo. Desde la visita técnica gratuita hasta la limpieza final, gestionamos cada detalle para que tú solo tengas que disfrutar del resultado. Trabajamos de lunes a sábado con total flexibilidad de horarios.</p>`,
        `<p>Cada instalación incluye: inspección del subsuelo, nivelación si es necesaria, colocación del pavimento, recorte de juntas, instalación de rodapiés (opcional) y limpieza integral de la obra. Garantizamos 2 años de mano de obra además de la garantía del fabricante. Y recuerda: en nuestro showroom de Barcelona tienes a tu disposición toda la gama para verla en persona.</p>`,
      ].join('\n'),
    ];
    return pickVariantOffset(variants, variant, 0);
  }

  // --- CATALONIA ---
  if (zone === 'catalonia') {
    const variants: string[] = [
      // V1
      [
        `<p>Para la instalación de suelos PVC en ${location.name} contamos con una red de instaladores profesionales certificados que cubren toda la provincia de ${location.province}. Nuestros instaladores están formados directamente por los fabricantes y acreditan un mínimo de 5 años de experiencia en pavimentos vinílicos.</p>`,
        `<p>Coordinamos todo el proceso desde Barcelona: te asignamos un instalador en la zona de ${location.name}, programamos la visita técnica, entregamos el material y supervisamos el resultado. Si surge cualquier incidencia, nuestro equipo de Barcelona interviene de forma presencial en un máximo de 48 horas.</p>`,
        `<p>La instalación incluye inspección previa del subsuelo, colocación del pavimento, acabado de juntas y limpieza final. Garantía de 2 años sobre la mano de obra.</p>`,
      ].join('\n'),

      // V2
      [
        `<p>En ${location.name} y en toda la provincia de ${location.province}, trabajamos con instaladores profesionales certificados que forman parte de nuestra red de confianza en Cataluña. Cada instalador ha sido seleccionado, formado y evaluado por nuestro equipo técnico de Barcelona para garantizar la máxima calidad en cada proyecto.</p>`,
        `<p>El proceso de instalación es idéntico al que ofrecemos en Barcelona: visita técnica gratuita, presupuesto cerrado en 24-48 horas, entrega del material coordinada con la fecha de instalación y seguimiento postventa. Si necesitas ver muestras antes de decidir, te las enviamos gratuitamente o puedes visitarnos en nuestro showroom de Barcelona.</p>`,
      ].join('\n'),

      // V3
      [
        `<p>¿Buscas un instalador de suelo PVC de confianza en ${location.name}? Nuestra red de profesionales certificados en ${location.province} te lo pone fácil. Solo tienes que elegir tu suelo y nosotros nos encargamos de coordinar la entrega del material y la instalación con un equipo especializado en tu zona.</p>`,
        `<p>Todos nuestros instaladores en ${location.province} trabajan bajo los protocolos de calidad de VentaPVC.com y cuentan con el respaldo técnico de nuestro equipo en Barcelona. El resultado es una instalación profesional con la misma garantía y nivel de acabado que si vivieras en Barcelona capital.</p>`,
      ].join('\n'),
    ];
    return pickVariantOffset(variants, variant, 1);
  }

  // --- RESTO DE ESPANA (peninsula, islas, ceuta/melilla) ---
  const variants: string[] = [
    // V1
    [
      `<p>Para la instalación de suelos PVC en ${location.name} contamos con una red nacional de instaladores profesionales certificados. Nuestros colaboradores en la provincia de ${location.province} son especialistas en pavimentos vinílicos con amplia experiencia acreditada y formación continua por parte de los principales fabricantes europeos.</p>`,
      `<p>El proceso es transparente y coordinado: tras elegir tu suelo, te asignamos un instalador en la zona de ${location.name}, programamos una visita técnica para evaluar el subsuelo y te entregamos un presupuesto cerrado que incluye material, transporte e instalación. Sin sorpresas ni costes ocultos. La garantía sobre la mano de obra es de 2 años.</p>`,
    ].join('\n'),

    // V2
    [
      `<p>En ${location.name} trabajamos con instaladores profesionales que forman parte de nuestra red certificada a nivel nacional. Cada profesional ha pasado un proceso de selección, formación y evaluación por parte de nuestro departamento técnico, por lo que la calidad de la instalación está garantizada independientemente de dónde vivas en España.</p>`,
      `<p>Coordinamos todo desde Barcelona: entrega del material, fecha de instalación, supervisión y seguimiento postventa. Nuestro objetivo es que tu experiencia en ${location.name} sea exactamente igual de satisfactoria que la de un cliente de Barcelona. Solicita presupuesto sin compromiso y te lo enviamos en un máximo de 48 horas.</p>`,
    ].join('\n'),

    // V3
    [
      `<p>¿Necesitas instalar suelo PVC en ${location.name}? No te preocupes por buscar instaladores: nosotros nos encargamos. Disponemos de profesionales certificados en la provincia de ${location.province} que realizan instalaciones de pavimentos vinílicos siguiendo nuestros estándares de calidad. El presupuesto de instalación se incluye en el presupuesto general del proyecto, sin recargos ni intermediarios.</p>`,
      `<p>Si prefieres una instalación por tu cuenta (DIY), te asesoramos sobre el tipo de suelo más fácil de colocar — como el vinílico click o el autoadhesivo — y te proporcionamos guías de instalación paso a paso en vídeo y PDF.</p>`,
    ].join('\n'),
  ];
  return pickVariantOffset(variants, variant, 2);
}

// ---------------------------------------------------------------------------
// 6. generateFaqs
// ---------------------------------------------------------------------------

/**
 * Genera 6-8 FAQs contextualizadas con datos reales de la ubicacion.
 * Mezcla preguntas de precio, instalacion, envio, clima, mantenimiento y productos.
 */
export function generateFaqs(
  location: Location,
): Array<{ question: string; answer: string }> {
  const zone = getZone(location);
  const adj = climateAdjective(location.climate);
  const product = recommendedProductShort(location.climate);
  const { name, province, deliveryTime } = location;

  // Pool de FAQs — seleccionamos y contextualizamos
  const allFaqs: Array<{ question: string; answer: string }> = [];

  // --- PRICING ---
  const pricingVariants = [
    {
      question: `¿Cuánto cuesta instalar suelo de PVC en ${name}?`,
      answer: `El precio del suelo PVC en ${name} varía según el producto: PVC en rollo desde 6,99 €/m², vinílico click desde 15,99 €/m² y SPC premium desde 22,99 €/m². La instalación profesional en ${name} tiene un coste adicional de entre 6 y 14 €/m² dependiendo del tipo de suelo, la superficie y la zona. Para un piso de 70 m², el presupuesto completo (material + instalación) parte desde unos 1.400 € y puede llegar a 4.500 € en gama alta. Todos los presupuestos son gratuitos y sin compromiso.`,
    },
    {
      question: `¿Hay suelo PVC barato para ${name}?`,
      answer: `Sí, en VentaPVC.com tenemos opciones desde 6,99 €/m² con envío a ${name}. El PVC en rollo es la alternativa más económica del mercado y ofrece una excelente relación calidad-precio para reformas con presupuesto ajustado. El autoadhesivo (desde 9,99 €/m²) es otra opción muy asequible que además puedes instalar tú mismo sin contratar profesional. Solicita presupuesto y te asesoramos sobre la mejor opción para tu vivienda en ${name}.`,
    },
  ];
  allFaqs.push(pickVariant(pricingVariants, location.introVariant));

  // --- INSTALLATION TIME ---
  allFaqs.push({
    question: `¿Cuánto se tarda en instalar suelo PVC en una vivienda de ${name}?`,
    answer: `La instalación de suelo PVC en ${name} se completa en 1 a 3 días para una vivienda estándar de 60-90 m². Un equipo de dos instaladores puede cubrir entre 30 y 50 m² diarios dependiendo del tipo de suelo y el estado del subsuelo. Los suelos click y SPC son los más rápidos (sistema flotante sin adhesivos), mientras que el PVC en rollo requiere un poco más de tiempo. La instalación es limpia, sin escombros ni ruidos molestos, y puedes usar el suelo inmediatamente después de la colocación.`,
  });

  // --- DELIVERY ---
  let deliveryFaq: { question: string; answer: string };
  switch (zone) {
    case 'bcnCity':
      deliveryFaq = {
        question: `¿En cuánto tiempo recibo el suelo PVC en ${name}?`,
        answer: `Al estar ${name} dentro de Barcelona ciudad, dispones de nuestro servicio de entrega exprés en 24-48 horas. Tenemos almacén propio en Barcelona con stock permanente de los modelos más vendidos. Si necesitas un modelo bajo pedido, el plazo es de 5-7 días laborables. Entrega gratuita para pedidos superiores a 300 € dentro de Barcelona.`,
      };
      break;
    case 'bcnMetro':
      deliveryFaq = {
        question: `¿Cuándo me llega el suelo PVC a ${name}?`,
        answer: `Realizamos entregas en ${name} en 24-48 horas para productos en stock. Al pertenecer al área metropolitana de Barcelona, ${name} está dentro de nuestra zona de reparto prioritaria. Envío gratuito para pedidos superiores a 400 €. Te avisamos el mismo día de la entrega para coordinar la hora.`,
      };
      break;
    case 'catalonia':
      deliveryFaq = {
        question: `¿Cuánto tarda el envío de suelo PVC a ${name}?`,
        answer: `El plazo de entrega para ${name} es de 48-72 horas desde la confirmación del pedido. Tu pedido sale de nuestro almacén de Barcelona con transporte dedicado a la provincia de ${province}. Envío gratuito para pedidos superiores a 500 €. Te proporcionamos número de seguimiento por SMS para rastrear tu envío en todo momento.`,
      };
      break;
    case 'islands':
      deliveryFaq = {
        question: `¿Enviáis suelo PVC a ${name}?`,
        answer: `Sí, realizamos envíos regulares a ${name} por transporte marítimo especializado. El plazo estándar es de 5-10 días laborables. Los portes tienen un coste adicional de entre 50 y 150 € según volumen. Para pedidos grandes (más de 100 m²) negociamos tarifas especiales. Te proporcionamos seguimiento completo del envío.`,
      };
      break;
    default:
      deliveryFaq = {
        question: `¿Cuánto tarda el envío a ${name}?`,
        answer: `El plazo de entrega estándar para ${name} es de ${deliveryTime} desde la confirmación del pedido. Enviamos desde nuestro almacén de Barcelona con transporte especializado en pavimentos. Envío gratuito para pedidos superiores a 500 €. Te enviamos número de seguimiento para que puedas rastrear tu pedido hasta la entrega en ${name}.`,
      };
      break;
  }
  allFaqs.push(deliveryFaq);

  // --- CLIMATE SUITABILITY ---
  const climateRec = generateClimateRecommendation(location.climate);
  allFaqs.push({
    question: `¿Qué suelo PVC es mejor para el clima ${adj} de ${name}?`,
    answer: `Para el clima ${adj} de ${name} recomendamos especialmente el ${climateRec.recommended}. ${climateRec.reason} No dudes en contactarnos para recibir una recomendación personalizada basada en las características concretas de tu vivienda en ${name}.`,
  });

  // --- MAINTENANCE ---
  const maintenanceVariants = [
    {
      question: `¿Cómo se limpia el suelo PVC en ${name}?`,
      answer: `El mantenimiento del suelo PVC es extremadamente sencillo. Para la limpieza diaria basta con aspiradora o mopa. Una o dos veces por semana, fregona con agua tibia y jabón neutro. No necesitas ceras, pulidos ni productos especiales. Evita lejía concentrada y amoníaco puro. Si tienes mascotas en tu vivienda de ${name}, el PVC es ideal: no se raya con las uñas y los accidentes se limpian en segundos.`,
    },
    {
      question: `¿Necesita mucho mantenimiento el suelo PVC en ${name}?`,
      answer: `Prácticamente ninguno. El suelo PVC es uno de los pavimentos más fáciles de mantener del mercado. Aspiradora o mopa a diario y fregona húmeda semanal con jabón neutro: eso es todo. No requiere ceras, barnices ni tratamientos periódicos. Es resistente a las manchas, no absorbe líquidos y no desarrolla olores. Con estos cuidados mínimos, tu suelo PVC en ${name} te durará décadas impecable.`,
    },
  ];
  allFaqs.push(pickVariantOffset(maintenanceVariants, location.introVariant, 3));

  // --- PRODUCT RECOMMENDATION FOR HOUSING ---
  allFaqs.push({
    question: `¿Qué tipo de suelo PVC es mejor para ${location.housingType.toLowerCase()} en ${name}?`,
    answer: `Para ${location.housingType.toLowerCase()} en ${name}, te recomendamos el ${product}. Este tipo de vivienda se beneficia especialmente de las propiedades del suelo PVC: instalación flotante sin obras (ideal para no alterar el pavimento original), excelente aislamiento acústico entre plantas y una amplia gama de acabados que se adaptan a cualquier estilo decorativo. Si buscas la opción más económica, el PVC en rollo desde 6,99 €/m² ofrece un resultado excelente para reformas rápidas.`,
  });

  // --- COMPARISON ---
  const comparisonVariants = [
    {
      question: `¿Es mejor el suelo PVC que el parquet para un piso en ${name}?`,
      answer: `Para la mayoría de viviendas en ${name}, el PVC ofrece ventajas claras sobre el parquet: es 100 % impermeable (fundamental para cocinas y baños), cuesta un 30-50 % menos, se instala más rápido y no necesita mantenimiento periódico. Los acabados actuales del PVC son visualmente indistinguibles de la madera natural. El parquet solo gana en la sensación táctil de la madera auténtica, pero a cambio requiere barnizados, es sensible a la humedad y se raya con facilidad.`,
    },
    {
      question: `¿Merece la pena el suelo PVC frente al gres en ${name}?`,
      answer: `El suelo PVC tiene ventajas importantes frente al gres porcelánico para interiores de viviendas en ${name}. La instalación es un 70 % más rápida y limpia (sin albañil ni escombros), el precio total es un 40-60 % inferior, la pisada es más cálida y confortable, y puedes cambiarlo fácilmente si te cansas. El gres gana en zonas exteriores y en resistencia extrema al rayado, pero para interiores el PVC es la opción más práctica y económica.`,
    },
  ];
  allFaqs.push(pickVariantOffset(comparisonVariants, location.introVariant, 5));

  // --- EXTRA: Installation on existing floor ---
  allFaqs.push({
    question: `¿Puedo poner suelo PVC sobre el suelo existente en mi vivienda de ${name}?`,
    answer: `En la gran mayoría de viviendas de ${name} puedes instalar suelo PVC directamente sobre el pavimento existente (baldosa, terrazo, cemento, parquet viejo) sin necesidad de retirarlo. El sistema flotante click y SPC se coloca encima siempre que la superficie esté razonablemente nivelada (menos de 2 mm de desnivel por metro), seca y limpia. Solo es necesario retirar el suelo anterior si hay desniveles graves o humedad ascendente. Esto ahorra tiempo, dinero y la molestia de una obra de demolición.`,
  });

  return allFaqs;
}

// ---------------------------------------------------------------------------
// 7. generateMetaTitle
// ---------------------------------------------------------------------------

/**
 * Genera el meta title de la landing page.
 * 3 formatos rotados, maximo 60 caracteres.
 */
export function generateMetaTitle(location: Location): string {
  const { name, introVariant } = location;

  const formats = [
    `Suelos PVC en ${name} | Precios y Envío`,
    `Suelos de PVC ${name} - Desde 6,99€/m²`,
    `Comprar Suelos PVC en ${name} | VentaPVC`,
  ];

  let title = pickVariant(formats, introVariant);

  // Si excede 60 chars, intentar acortar
  if (title.length > 60) {
    const fallbacks = [
      `Suelos PVC en ${name} | VentaPVC`,
      `Suelos PVC ${name} - Desde 6,99€/m²`,
      `PVC en ${name} | Precios y Envío`,
    ];
    title = pickVariant(fallbacks, introVariant);
  }

  // Ultimo recurso: truncar
  if (title.length > 60) {
    title = title.substring(0, 57) + '...';
  }

  return title;
}

// ---------------------------------------------------------------------------
// 8. generateMetaDescription
// ---------------------------------------------------------------------------

/**
 * Genera la meta description de la landing page.
 * Maximo 155 caracteres, con ubicacion, propuesta de valor y CTA.
 */
export function generateMetaDescription(location: Location): string {
  const { name, introVariant, deliveryTime } = location;
  const zone = getZone(location);

  let deliveryShort: string;
  switch (zone) {
    case 'bcnCity':
    case 'bcnMetro':
      deliveryShort = 'entrega en 24-48h';
      break;
    case 'catalonia':
      deliveryShort = 'envío en 48-72h';
      break;
    case 'islands':
      deliveryShort = 'envío a islas';
      break;
    case 'ceutaMelilla':
      deliveryShort = 'envío especial';
      break;
    default:
      deliveryShort = `envío en ${deliveryTime}`;
      break;
  }

  const variants = [
    `Suelos de PVC en ${name} desde 6,99€/m². ${deliveryShort.charAt(0).toUpperCase() + deliveryShort.slice(1)} y instalación profesional. Pide presupuesto gratis.`,
    `Compra suelos PVC en ${name}: click, SPC, rollo y losetas. ${deliveryShort.charAt(0).toUpperCase() + deliveryShort.slice(1)}. Calidad premium desde 6,99€/m².`,
    `Suelos PVC en ${name} con ${deliveryShort}. Amplio catálogo, precios desde 6,99€/m². Solicita presupuesto sin compromiso.`,
    `Especialistas en suelos de PVC en ${name}. Desde 6,99€/m², ${deliveryShort} e instalación profesional. Pide tu presupuesto.`,
    `Suelos PVC para ${name}: más de 200 modelos con ${deliveryShort}. Desde 6,99€/m². Instalación y asesoramiento gratuito.`,
  ];

  let desc = pickVariant(variants, introVariant);

  // Si el metaDescription personalizado de la ubicacion cabe, usarlo si es la variante 1
  if (introVariant === 1 && location.metaDescription && location.metaDescription.length <= 155) {
    desc = location.metaDescription;
  }

  // Truncar si excede 155 chars
  if (desc.length > 155) {
    const truncated = desc.substring(0, 152);
    const lastSpace = truncated.lastIndexOf(' ');
    desc = (lastSpace > 120 ? truncated.substring(0, lastSpace) : truncated) + '...';
  }

  return desc;
}
