// src/data/faqs.ts
// Templates de FAQ por tipo de zona y clima para ventapvc.com
// Las plantillas usan marcadores {{variable}} para interpolación con datos de ubicación.

import type { ClimateType } from '@/types/location';

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

export interface FaqTemplate {
  question: string;
  answer: string;
  category: FaqCategory;
}

export type FaqCategory =
  | 'pricing'
  | 'installation'
  | 'delivery'
  | 'climate'
  | 'maintenance'
  | 'warranty'
  | 'product-types'
  | 'comparison';

export type ZoneType = 'bcnCity' | 'bcnMetro' | 'catalonia' | 'national';

export interface FaqSet {
  zone: ZoneType;
  templates: FaqTemplate[];
}

export interface ClimateFaqSet {
  climate: ClimateType;
  templates: FaqTemplate[];
}

// ---------------------------------------------------------------------------
// FAQ templates por zona
// ---------------------------------------------------------------------------

export const faqsByZone: FaqSet[] = [
  // =========================================================================
  // BARCELONA CIUDAD (barrios)
  // =========================================================================
  {
    zone: 'bcnCity',
    templates: [
      {
        question: '¿Cuánto cuesta instalar suelo de PVC en {{name}}, Barcelona?',
        answer:
          'El precio del suelo de PVC en {{name}} varía según el tipo de producto que elijas. El PVC en rollo parte desde 6,99 €/m², el vinílico click desde 15,99 €/m² y el SPC premium desde 22,99 €/m². La instalación profesional con nuestro equipo en Barcelona tiene un coste adicional de entre 6 y 10 €/m² dependiendo de la complejidad del trabajo. Al estar en {{name}}, puedes visitar nuestro showroom en Barcelona para ver y tocar todas las muestras antes de decidir. Te preparamos un presupuesto personalizado sin compromiso en menos de 24 horas.',
        category: 'pricing',
      },
      {
        question: '¿Cuánto se tarda en instalar suelo PVC en un piso de {{name}}?',
        answer:
          'La instalación de suelo PVC en un piso estándar de {{name}} se completa en 1 a 3 días, dependiendo de la superficie y el estado del subsuelo. Un piso de 60-80 m² suele estar listo en un solo día con nuestro equipo de instaladores profesionales de Barcelona. No necesitas desalojar la vivienda: la instalación flotante (click o SPC) no genera polvo ni requiere tiempo de secado. Si el suelo existente está en buen estado, colocamos directamente encima. Nuestro equipo propio trabaja en todos los barrios de Barcelona, incluido {{name}}, con total flexibilidad de horarios.',
        category: 'installation',
      },
      {
        question: '¿En cuánto tiempo puedo recibir el suelo PVC en {{name}}?',
        answer:
          'Al estar {{name}} dentro de Barcelona ciudad, dispones de nuestro servicio de entrega exprés en 24-48 horas desde la confirmación del pedido. Tenemos almacén propio en Barcelona con stock permanente de los modelos más vendidos, por lo que la mayoría de pedidos los entregamos al día siguiente. Si necesitas un modelo específico bajo pedido, el plazo es de 5 a 7 días laborables. Nuestro equipo de reparto conoce perfectamente {{name}} y te avisan por teléfono 30 minutos antes de llegar a tu portal.',
        category: 'delivery',
      },
      {
        question: '¿Qué suelo PVC es mejor para el clima de Barcelona en {{name}}?',
        answer:
          'Barcelona tiene un clima mediterráneo con veranos cálidos y húmedos e inviernos suaves. Para {{name}} te recomendamos especialmente el suelo SPC o el vinílico click, ya que ambos son 100 % resistentes a la humedad y no se dilatan con los cambios de temperatura típicos de la costa. Si tienes un piso con mucha luz natural, el SPC es la mejor opción porque su núcleo rígido no se deforma con el calor. Para pisos interiores sin exposición solar directa, el vinílico click ofrece una excelente relación calidad-precio. Ambos son compatibles con suelo radiante, muy común en la obra nueva de {{name}}.',
        category: 'climate',
      },
      {
        question: '¿Cómo se limpia y mantiene el suelo PVC en {{name}}?',
        answer:
          'El mantenimiento del suelo PVC es extremadamente sencillo, algo que agradecerás en el día a día en {{name}}. Para la limpieza diaria solo necesitas pasar una mopa o aspiradora para recoger el polvo. Una o dos veces por semana, pasa la fregona con agua tibia y un chorrito de jabón neutro, y listo. No necesitas ceras, pulidos ni tratamientos especiales. Evita usar productos con lejía concentrada o amoníaco puro, ya que pueden dañar la capa protectora. Si tienes mascotas, el suelo PVC es perfecto porque las uñas no lo rayan y los accidentes se limpian en segundos.',
        category: 'maintenance',
      },
      {
        question: '¿Qué garantía tienen los suelos PVC que vendéis en Barcelona?',
        answer:
          'Todos nuestros suelos PVC incluyen una garantía mínima de 10 años en uso doméstico y de 5 años en uso comercial, dependiendo del fabricante y la gama del producto. Los modelos SPC premium cuentan con garantías de hasta 25 años. La garantía cubre defectos de fabricación, problemas de estabilidad dimensional y decoloración por exposición a la luz. Al comprar en VentaPVC y tener nuestra sede en Barcelona, cualquier incidencia en {{name}} la resolvemos de forma presencial en 24-48 horas. Te entregamos el certificado de garantía junto con la factura el mismo día de la instalación.',
        category: 'warranty',
      },
      {
        question: '¿Qué tipos de suelo PVC puedo comprar para mi vivienda en {{name}}?',
        answer:
          'En VentaPVC tenemos cinco grandes familias de suelos PVC disponibles para {{name}}: el vinílico click (desde 15,99 €/m²), ideal para una instalación rápida sin obras; el PVC en rollo (desde 6,99 €/m²), la opción más económica; el SPC de núcleo rígido (desde 22,99 €/m²), nuestra gama premium con máxima estabilidad; las losetas modulares (desde 18,99 €/m²), perfectas para garajes y espacios con diseño; y el autoadhesivo (desde 9,99 €/m²), para reformas express de bricolaje. Puedes ver todos los modelos en nuestro showroom de Barcelona, muy cerca de {{name}}.',
        category: 'product-types',
      },
      {
        question: '¿Es mejor el suelo PVC que el parquet o la tarima para un piso en {{name}}?',
        answer:
          'Para un piso en {{name}}, el suelo PVC ofrece varias ventajas frente al parquet tradicional y la tarima flotante. En primer lugar, el PVC es 100 % resistente al agua, algo fundamental en cocinas y baños donde la madera se hincha y deteriora. En segundo lugar, el precio es entre un 30 % y un 50 % inferior al del parquet de calidad similar. La instalación es más rápida (un día frente a varios) y no genera polvo ni requiere acuchillado. El PVC no necesita barnizados periódicos ni tratamientos especiales. El único punto donde el parquet gana es en la sensación natural del material, pero los acabados actuales del PVC son tan realistas que la diferencia visual es prácticamente imperceptible. Para los pisos de {{name}}, con la humedad típica de Barcelona, el PVC es la opción más práctica.',
        category: 'comparison',
      },
      {
        question: '¿Puedo instalar suelo PVC sobre el suelo existente en mi piso de {{name}}?',
        answer:
          'Sí, en la gran mayoría de pisos de {{name}} puedes instalar suelo PVC directamente sobre el pavimento existente sin retirarlo. El suelo vinílico click y el SPC se instalan en formato flotante sobre el suelo actual (baldosa, terrazo, cemento, parquet viejo) siempre que la superficie esté razonablemente nivelada, seca y limpia. Solo se necesita retirar el suelo anterior si presenta desniveles superiores a 2 mm por metro lineal o si hay problemas de humedad ascendente. Nuestro equipo de Barcelona puede visitar tu piso en {{name}} para hacer una inspección gratuita del subsuelo antes de la instalación.',
        category: 'installation',
      },
      {
        question: '¿Ofrecéis servicio de medición gratuita en {{name}}?',
        answer:
          'Sí, ofrecemos un servicio de medición y asesoramiento gratuito a domicilio en {{name}} y en toda Barcelona ciudad. Uno de nuestros técnicos se desplaza a tu vivienda, mide todas las estancias, evalúa el estado del subsuelo y te asesora sobre el tipo de suelo PVC que mejor se adapta a tus necesidades y presupuesto. Tras la visita, recibes un presupuesto detallado sin compromiso en un máximo de 24 horas. Puedes reservar tu cita llamándonos o rellenando el formulario de presupuesto de nuestra web.',
        category: 'pricing',
      },
    ],
  },

  // =========================================================================
  // BARCELONA METROPOLITANA
  // =========================================================================
  {
    zone: 'bcnMetro',
    templates: [
      {
        question: '¿Cuánto cuesta poner suelo de PVC en {{name}}?',
        answer:
          'El coste de instalar suelo PVC en {{name}} depende del tipo de producto y la superficie a cubrir. Los precios por metro cuadrado van desde 6,99 € para el PVC en rollo hasta 45,99 € para los modelos SPC premium de alta gama. El coste medio de un proyecto completo para un piso de 70 m² en {{name}} (material + instalación) oscila entre 1.400 € y 3.500 €. Al estar en el área metropolitana de Barcelona, nuestros equipos de instalación trabajan habitualmente en {{name}}, lo que nos permite ofrecer precios competitivos sin recargos por desplazamiento. Solicita tu presupuesto gratuito y lo tendrás en menos de 24 horas.',
        category: 'pricing',
      },
      {
        question: '¿Cuántos días se tarda en instalar suelo PVC en una vivienda de {{name}}?',
        answer:
          'La instalación de suelo PVC en {{name}} suele completarse en 1 a 2 días para un piso estándar de 60-90 m². Si se trata de un chalet o vivienda unifamiliar más grande, puede llevar de 2 a 4 días. Nuestros instaladores profesionales trabajan regularmente en {{name}} y en toda la comarca del {{province}}, por lo que conocen bien las particularidades de las viviendas de la zona. La instalación flotante click no genera obras, polvo ni malos olores, y puedes usar el suelo inmediatamente después de la colocación.',
        category: 'installation',
      },
      {
        question: '¿En cuánto tiempo me llega el suelo PVC a {{name}}?',
        answer:
          'Realizamos entregas en {{name}} en un plazo de 24 a 48 horas para los productos que tenemos en stock en nuestro almacén de Barcelona. Al pertenecer al área metropolitana, {{name}} está dentro de nuestra zona de reparto prioritaria. Para modelos especiales o bajo pedido, el plazo de entrega es de 5 a 7 días laborables. Nuestro servicio de transporte incluye la entrega a pie de calle. Si necesitas subida a planta, podemos organizarlo con un pequeño suplemento. Te avisamos por teléfono el mismo día de la entrega para coordinar la hora.',
        category: 'delivery',
      },
      {
        question: '¿Qué suelo PVC recomendáis para viviendas en {{name}}?',
        answer:
          'Para las viviendas de {{name}}, con el clima mediterráneo típico de la zona de {{province}}, recomendamos especialmente el suelo vinílico click o el SPC. Ambos resisten perfectamente la humedad ambiental y los cambios de temperatura de la costa catalana. Si tu vivienda tiene suelo radiante, el SPC es la mejor elección por su estabilidad dimensional superior. Para pisos de alquiler o reformas con presupuesto ajustado, el PVC en rollo ofrece una excelente relación calidad-precio. Si tu vivienda en {{name}} es un bajo o tiene tendencia a la humedad, el SPC con su núcleo impermeable es la opción más segura.',
        category: 'climate',
      },
      {
        question: '¿Cómo se cuida el suelo PVC una vez instalado?',
        answer:
          'El mantenimiento del suelo PVC es mínimo y muy sencillo. Para el día a día, basta con pasar la aspiradora o una mopa seca para eliminar el polvo y la suciedad. Una o dos veces por semana, limpia con una fregona bien escurrida y agua tibia con jabón neutro. No uses productos abrasivos, lejía concentrada ni estropajos que puedan rayar la superficie. Para manchas puntuales (café, vino, rotulador), aplica un poco de alcohol isopropílico con un paño suave. Es recomendable colocar fieltros protectores bajo las patas de los muebles pesados y usar un felpudo en la entrada para reducir la suciedad. Con estos cuidados básicos, el suelo PVC te durará décadas en perfecto estado.',
        category: 'maintenance',
      },
      {
        question: '¿Qué garantía ofrecéis en los suelos PVC para {{name}}?',
        answer:
          'Nuestros suelos PVC cuentan con garantías de entre 10 y 25 años en uso residencial, dependiendo del fabricante y la gama del producto. Los modelos de rollo tienen garantía de 10 a 15 años, los vinílicos click de 15 a 20 años, y los SPC premium de 20 a 25 años. La garantía cubre defectos de fabricación, delaminación, problemas de encaje y decoloración prematura. Si contratas la instalación con nosotros, añadimos una garantía adicional de 2 años sobre la mano de obra. Al tener nuestra base en Barcelona, cualquier reclamación en {{name}} la gestionamos de forma presencial y ágil.',
        category: 'warranty',
      },
      {
        question: '¿Cuáles son los tipos de suelo PVC disponibles para {{name}}?',
        answer:
          'Tenemos cinco categorías principales de suelo PVC con entrega en {{name}}: el vinílico click (15,99-34,99 €/m²) para instalaciones flotantes sin obras; el PVC en rollo (6,99-19,99 €/m²) como la opción más económica y versátil; el suelo SPC de núcleo rígido (22,99-45,99 €/m²) para máxima estabilidad y durabilidad; las losetas modulares (18,99-39,99 €/m²) para garajes, gimnasios y diseños personalizados; y el autoadhesivo (9,99-24,99 €/m²) para reformas rápidas de bricolaje. Todos los productos están disponibles con entrega en {{name}} en 24-48 horas.',
        category: 'product-types',
      },
      {
        question: '¿Merece la pena el suelo PVC frente al gres porcelánico en {{name}}?',
        answer:
          'El suelo PVC y el gres porcelánico son dos opciones excelentes, pero el PVC ofrece ventajas significativas para muchas situaciones en {{name}}. La instalación del PVC es hasta un 70 % más rápida y limpia: sin albañil, sin escombros, sin tiempo de secado. El precio total (material + instalación) del PVC es un 40-60 % inferior. La pisada del PVC es más cálida y confortable, especialmente en invierno. Además, si te cansas del diseño, puedes cambiarlo fácilmente. El gres porcelánico gana en resistencia extrema al rayado y en zonas exteriores, pero para interiores de viviendas en {{name}}, el PVC es la opción más práctica y económica sin renunciar a la estética.',
        category: 'comparison',
      },
      {
        question: '¿Necesito preparar el suelo antes de instalar PVC en {{name}}?',
        answer:
          'En la mayoría de viviendas de {{name}} no es necesario retirar el suelo existente. El PVC click y SPC se instalan en formato flotante sobre baldosa, terrazo, cemento o parquet, siempre que la superficie esté nivelada (menos de 2 mm de desnivel por metro), seca y limpia. Si hay desniveles, se aplica una pasta niveladora (coste adicional de 3-5 €/m²). Si hay humedad ascendente, se coloca una lámina antihumedad. Nuestro equipo puede hacer una evaluación gratuita del subsuelo en {{name}} antes de presupuestar, para que no tengas sorpresas el día de la instalación.',
        category: 'installation',
      },
      {
        question: '¿Puedo ver muestras de suelo PVC antes de comprar en {{name}}?',
        answer:
          'Por supuesto. Tienes dos opciones para ver y tocar las muestras antes de decidir. La primera es visitarnos en nuestro showroom de Barcelona, a pocos minutos de {{name}}, donde tenemos expuestos más de 200 modelos de todas las categorías. La segunda opción es solicitar el envío gratuito de hasta 5 muestras a tu domicilio en {{name}}: te las mandamos por mensajería y las recibes en 24-48 horas. Así puedes ver cómo quedan con la luz y la decoración de tu casa. También puedes combinar ambas opciones: visitar el showroom para una primera selección y luego pedir las muestras finales a casa.',
        category: 'product-types',
      },
    ],
  },

  // =========================================================================
  // RESTO DE CATALUÑA
  // =========================================================================
  {
    zone: 'catalonia',
    templates: [
      {
        question: '¿Cuánto cuesta el suelo PVC en {{name}}, {{province}}?',
        answer:
          'Los precios de suelo PVC en {{name}} son los mismos que en nuestro almacén de Barcelona, sin recargos por distancia: desde 6,99 €/m² para PVC en rollo, desde 15,99 €/m² para vinílico click y desde 22,99 €/m² para SPC premium. El coste de instalación profesional en {{name}} oscila entre 7 y 12 €/m², dependiendo de la superficie total y la complejidad del trabajo. Para un piso de 70 m² en {{name}}, el presupuesto completo (material + instalación) parte desde unos 1.500 € y puede llegar hasta 4.000 € para los modelos de gama alta. Todos los presupuestos son gratuitos y sin compromiso.',
        category: 'pricing',
      },
      {
        question: '¿Cuánto se tarda en poner suelo PVC en una vivienda de {{name}}?',
        answer:
          'La instalación de suelo PVC en {{name}} suele durar entre 1 y 3 días para una vivienda estándar. Un piso de 60-80 m² se completa normalmente en una sola jornada con un equipo de dos instaladores. Viviendas más grandes o con muchas estancias pueden requerir 2 o 3 días. Trabajamos con una red de instaladores certificados en la provincia de {{province}} que conocen las características constructivas de las viviendas de la zona. La instalación flotante (click o SPC) no requiere obras, y puedes usar el suelo inmediatamente después de la colocación.',
        category: 'installation',
      },
      {
        question: '¿Cuánto tarda el envío de suelo PVC a {{name}}?',
        answer:
          'El plazo de entrega estándar para {{name}} es de 48 a 72 horas desde la confirmación del pedido. Al estar en {{province}}, dentro de Cataluña, tu pedido sale directamente de nuestro almacén de Barcelona con transporte dedicado. Los productos en stock se envían en 24-48 horas, y los modelos especiales o bajo pedido en 5-7 días laborables. El envío es gratuito para pedidos superiores a 500 €. Para pedidos inferiores, el coste de envío a {{name}} es de entre 29 € y 49 € dependiendo del volumen. Te enviamos el número de seguimiento por SMS para que puedas rastrear tu pedido en todo momento.',
        category: 'delivery',
      },
      {
        question: '¿Qué tipo de suelo PVC es ideal para el clima de {{name}}?',
        answer:
          'El clima de {{name}} es un factor importante a la hora de elegir el suelo PVC adecuado. Para las zonas de {{province}} con clima mediterráneo, tanto el vinílico click como el SPC funcionan muy bien gracias a su resistencia a la humedad. Si {{name}} se encuentra en una zona interior con inviernos fríos y veranos calurosos, el SPC es la mejor opción por su estabilidad dimensional frente a los cambios bruscos de temperatura. Para viviendas con suelo radiante en {{name}}, el SPC es imprescindible por su conductividad térmica. Y si buscas una opción económica que funcione bien en cualquier clima, el PVC en rollo es siempre una apuesta segura.',
        category: 'climate',
      },
      {
        question: '¿Qué mantenimiento necesita el suelo PVC en {{name}}?',
        answer:
          'El suelo PVC prácticamente se cuida solo, lo cual es ideal para el ritmo de vida en {{name}}. La rutina de limpieza es muy sencilla: aspira o pasa la mopa a diario para recoger el polvo y limpia con fregona húmeda una o dos veces por semana usando agua tibia con jabón neutro. No necesitas ceras, barnices ni productos especializados. Evita únicamente la lejía concentrada y los productos con disolventes. Si tienes mascotas, te encantará saber que el PVC no absorbe olores ni se raya con las uñas de perros y gatos. En zonas de mucho sol, los suelos PVC de calidad tienen protección UV que evita la decoloración.',
        category: 'maintenance',
      },
      {
        question: '¿Tienen garantía los suelos PVC que enviáis a {{name}}?',
        answer:
          'Todos nuestros suelos PVC vendidos en {{name}} y en toda España incluyen la garantía oficial del fabricante, que oscila entre 10 y 25 años según la gama: PVC en rollo (10-15 años), vinílico click (15-20 años), SPC premium (20-25 años), losetas (10-15 años) y autoadhesivo (5-10 años). Si además contratas nuestra instalación profesional, incluimos 2 años de garantía adicional sobre la mano de obra. Las reclamaciones se gestionan a través de nuestro servicio de atención al cliente en Barcelona, con respuesta en un máximo de 48 horas. Conserva siempre la factura y el certificado de garantía que te entregamos.',
        category: 'warranty',
      },
      {
        question: '¿Qué opciones de suelo PVC puedo comprar en {{name}}?',
        answer:
          'Tenemos cinco familias de suelos PVC disponibles con envío a {{name}}: el vinílico click es nuestra opción estrella para instalaciones flotantes sin obras, con precios de 15,99 a 34,99 €/m². El PVC en rollo es la alternativa más económica (6,99-19,99 €/m²), perfecta para cubrir grandes superficies. El SPC de núcleo rígido (22,99-45,99 €/m²) es la gama premium para quienes buscan lo mejor. Las losetas modulares (18,99-39,99 €/m²) son ideales para garajes y diseños creativos. Y el autoadhesivo (9,99-24,99 €/m²) es la solución más rápida para reformas de bricolaje. Todos los modelos se envían a {{name}} desde nuestro almacén de Barcelona.',
        category: 'product-types',
      },
      {
        question: '¿Es mejor el suelo PVC que la cerámica para mi casa en {{name}}?',
        answer:
          'Depende de tus prioridades, pero el suelo PVC tiene ventajas claras para viviendas en {{name}}. Frente a la cerámica, el PVC se instala en un día (la cerámica necesita varios días más secado), cuesta un 30-50 % menos incluyendo la instalación, es más cálido al pisar y mucho más silencioso. Además, no se rompe si se cae algo pesado y es más cómodo para estar de pie largos ratos. La cerámica gana en zonas exteriores y en resistencia al rayado extremo, pero para interiores de viviendas en {{name}}, el PVC moderno (especialmente el SPC) ofrece una estética igual de atractiva con ventajas prácticas superiores.',
        category: 'comparison',
      },
      {
        question: '¿Tienen instaladores profesionales en {{name}}?',
        answer:
          'Sí, contamos con una red de instaladores profesionales certificados que cubren toda la provincia de {{province}}, incluida {{name}}. Nuestros instaladores están formados por los propios fabricantes y tienen experiencia acreditada de al menos 5 años en pavimentos vinílicos. Antes de la instalación, realizan una inspección del subsuelo para asegurar las condiciones óptimas. El equipo lleva todo el material y las herramientas necesarias, y se encarga de retirar los recortes y dejar la zona limpia al terminar. La cita se coordina directamente contigo para adaptarnos a tu disponibilidad.',
        category: 'installation',
      },
      {
        question: '¿Puedo pedir muestras gratuitas de suelo PVC en {{name}}?',
        answer:
          'Sí, enviamos hasta 5 muestras gratuitas de suelo PVC a cualquier dirección en {{name}}. Solo tienes que seleccionar los modelos que te interesen en nuestra web o llamarnos y te las enviamos por mensajería en 48-72 horas. Las muestras tienen un tamaño de 15x20 cm, suficiente para apreciar el color, la textura y el grosor del material. Si prefieres ver toda la gama en persona, puedes acercarte a nuestro showroom en Barcelona. También ofrecemos videollamadas de asesoramiento donde te mostramos los productos en directo y resolvemos todas tus dudas.',
        category: 'product-types',
      },
    ],
  },

  // =========================================================================
  // NACIONAL (resto de España)
  // =========================================================================
  {
    zone: 'national',
    templates: [
      {
        question: '¿Cuánto cuesta el suelo PVC en {{name}}?',
        answer:
          'Los precios de suelo PVC en {{name}} son idénticos a los de nuestra web, sin recargos por zona geográfica: PVC en rollo desde 6,99 €/m², vinílico click desde 15,99 €/m², SPC premium desde 22,99 €/m², losetas desde 18,99 €/m² y autoadhesivo desde 9,99 €/m². El coste de instalación profesional en {{name}} varía entre 8 y 14 €/m² dependiendo del tipo de suelo y la superficie. Para un piso de 70 m², el presupuesto completo (material + instalación) parte desde unos 1.600 € y puede alcanzar los 4.200 € en gama alta. Te enviamos presupuesto personalizado gratuito en un máximo de 48 horas.',
        category: 'pricing',
      },
      {
        question: '¿Cuánto tiempo se necesita para instalar suelo PVC en {{name}}?',
        answer:
          'La instalación de suelo PVC en {{name}} tiene una duración media de 1 a 3 días para una vivienda de tamaño estándar. Un equipo de dos instaladores puede cubrir entre 30 y 50 m² al día dependiendo del tipo de suelo elegido y el estado del subsuelo. Los suelos click y SPC son los más rápidos de instalar (sistema flotante sin adhesivos), mientras que el PVC en rollo requiere un poco más de tiempo por el pegado. Contamos con instaladores profesionales certificados que operan en la zona de {{name}} y toda la provincia de {{province}}. La obra es limpia, sin escombros ni ruidos molestos.',
        category: 'installation',
      },
      {
        question: '¿En cuántos días recibo el suelo PVC en {{name}}?',
        answer:
          'El plazo de entrega estándar para {{name}} es de {{deliveryTime}} desde la confirmación del pedido. Enviamos directamente desde nuestro almacén central de Barcelona mediante transporte especializado en pavimentos. Para pedidos de productos en stock, el envío se tramita en 24-48 horas y el transporte tarda el tiempo indicado en llegar a {{name}}. Los pedidos superiores a 500 € tienen envío gratuito a toda la península. Para pedidos menores, el coste de envío a {{name}} es de entre 39 € y 69 € según el volumen. Te enviamos el número de seguimiento para que puedas rastrear tu pedido.',
        category: 'delivery',
      },
      {
        question: '¿Qué suelo PVC me recomendáis para el clima de {{name}}?',
        answer:
          'La elección del suelo PVC ideal para {{name}} depende del clima de tu zona. Si vives en una zona de clima continental con inviernos fríos y veranos calurosos, te recomendamos el SPC por su excepcional estabilidad dimensional: no se dilata ni contrae con los cambios bruscos de temperatura. Si estás en una zona costera o mediterránea, el vinílico click es una opción excelente por su resistencia a la humedad ambiental. Para climas oceánicos con mucha lluvia, cualquier suelo PVC es ideal porque es 100 % impermeable. Y si tienes suelo radiante en tu vivienda de {{name}}, el SPC es la opción más eficiente térmicamente. Cuéntanos las características de tu vivienda y te asesoramos sin compromiso.',
        category: 'climate',
      },
      {
        question: '¿Cómo se limpia el suelo PVC? ¿Necesita mucho mantenimiento?',
        answer:
          'El suelo PVC es uno de los pavimentos más fáciles de mantener del mercado, algo que agradecerás en tu día a día en {{name}}. La limpieza diaria se reduce a pasar la aspiradora o una mopa para recoger el polvo. Una vez por semana (o dos veces en zonas de mucho tránsito), pasa la fregona con agua tibia y un poco de jabón neutro. No necesitas comprar productos especiales: cualquier limpiador multiusos de pH neutro funciona perfectamente. Evita la lejía concentrada, el amoníaco puro y los estropajos abrasivos. Si tienes mascotas o niños pequeños, el PVC es ideal porque las manchas se limpian al instante y no absorbe olores ni líquidos.',
        category: 'maintenance',
      },
      {
        question: '¿Qué garantía tienen los suelos PVC con envío a {{name}}?',
        answer:
          'Todos nuestros suelos PVC enviados a {{name}} incluyen la misma garantía oficial que si los compraras en nuestro almacén de Barcelona: de 10 a 25 años en uso doméstico y de 5 a 10 años en uso comercial, según el producto. La garantía cubre defectos de fabricación, problemas de estabilidad, delaminación y decoloración prematura. Si contratas la instalación con nuestros profesionales en {{name}}, añadimos 2 años de garantía sobre la mano de obra. Trabajamos con fabricantes europeos de primer nivel (Gerflor, Tarkett, Forbo) y todos nuestros productos cumplen con las normativas CE y las certificaciones de emisiones (A+ o FloorScore).',
        category: 'warranty',
      },
      {
        question: '¿Qué tipos de suelo PVC puedo comprar con envío a {{name}}?',
        answer:
          'Disponemos de cinco familias de suelos PVC con envío directo a {{name}}: vinílico click (15,99-34,99 €/m²), la opción más popular para hogares por su instalación flotante sin obras; PVC en rollo (6,99-19,99 €/m²), la alternativa más económica para grandes superficies; SPC de núcleo rígido (22,99-45,99 €/m²), la gama premium con máxima estabilidad y durabilidad; losetas modulares (18,99-39,99 €/m²), ideales para garajes, gimnasios y diseños personalizados; y autoadhesivo (9,99-24,99 €/m²), la solución de bricolaje más rápida. Todos con entrega en {{name}} en {{deliveryTime}}.',
        category: 'product-types',
      },
      {
        question: '¿El suelo PVC es mejor que la tarima flotante para {{name}}?',
        answer:
          'Para viviendas en {{name}}, el suelo PVC tiene varias ventajas importantes frente a la tarima flotante de madera. La primera y más decisiva: el PVC es 100 % impermeable, mientras que la tarima se hincha y deforma con la humedad. La segunda: el precio del PVC es un 30-50 % inferior al de una tarima de calidad equivalente. La tercera: la instalación del PVC es más rápida y sencilla, incluso para los modelos click que comparten el mismo sistema de encaje. La tarima ofrece una sensación más natural al pisar, pero los suelos PVC modernos con textura sincronizada son visualmente indistinguibles de la madera. Para zonas húmedas (cocina, baño), el PVC gana sin discusión. Para el resto de estancias, ambos son excelentes opciones.',
        category: 'comparison',
      },
      {
        question: '¿Cómo funciona el proceso de compra e instalación en {{name}}?',
        answer:
          'El proceso es muy sencillo. Primero, elige tus productos en nuestra web o solicita asesoramiento gratuito por teléfono o formulario. Segundo, recibes un presupuesto detallado en 24-48 horas que incluye material, transporte e instalación en {{name}}. Tercero, si aceptas, coordinamos la entrega del material en {{deliveryTime}} y la fecha de instalación con nuestro equipo en la zona de {{province}}. Cuarto, nuestros instaladores se presentan el día acordado con todo el material y herramientas, inspeccionan el subsuelo y proceden a la colocación. Quinto, al terminar reciben tu conformidad, te entregan la garantía y se llevan todos los recortes. Aceptamos transferencia bancaria, tarjeta y financiación hasta 12 meses sin intereses.',
        category: 'installation',
      },
      {
        question: '¿Puedo pedir muestras de suelo PVC en {{name}}?',
        answer:
          'Sí, enviamos hasta 5 muestras gratuitas de suelo PVC a tu domicilio en {{name}}. Selecciona los modelos que te interesen en nuestra web, añádelos al carrito de muestras y te los enviamos por mensajería sin coste alguno. Las recibirás en {{deliveryTime}} y podrás ver el color, la textura y el grosor del material en tu propia casa, con la luz natural de tus estancias. Si prefieres asesoramiento personalizado, ofrecemos videollamadas con nuestros asesores de Barcelona donde te mostramos los productos en directo, te explicamos las diferencias y te ayudamos a elegir el suelo perfecto para tu vivienda en {{name}}.',
        category: 'product-types',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// FAQ templates por clima
// ---------------------------------------------------------------------------

export const faqsByClimate: ClimateFaqSet[] = [
  // =========================================================================
  // MEDITERRÁNEO
  // =========================================================================
  {
    climate: 'mediterráneo' as ClimateType,
    templates: [
      {
        question: '¿Es resistente el suelo PVC a la humedad del clima mediterráneo en {{name}}?',
        answer:
          'El suelo PVC es una de las mejores opciones para el clima mediterráneo de {{name}}. A diferencia de la madera o el laminado, el PVC es 100 % impermeable y no absorbe la humedad ambiental, que en la costa mediterránea puede superar el 70 % en verano. Tanto el vinílico click como el SPC soportan sin problemas la condensación, los cambios de temperatura estacionales y la proximidad al mar. Si tu vivienda en {{name}} está cerca de la costa, el SPC es especialmente recomendable porque su núcleo rígido de piedra caliza no reacciona ante el salitre ni la humedad salina. Además, el suelo PVC no desarrolla moho ni hongos, un problema habitual en las viviendas mediterráneas durante los meses húmedos.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC se calienta mucho en verano en {{name}}?',
        answer:
          'No, el suelo PVC no acumula calor como la cerámica o la piedra natural. En los veranos de {{name}}, donde las temperaturas pueden superar los 30 °C, el PVC mantiene una temperatura de superficie agradable y estable. Si tu vivienda recibe mucha luz solar directa, el suelo SPC es la opción más estable porque su núcleo rígido no se dilata con el calor. Para los suelos click estándar, es aconsejable mantener una temperatura interior por debajo de 35 °C (lo habitual con persianas y ventilación). En cualquier caso, todos nuestros suelos PVC incluyen protección UV que evita la decoloración por la intensa luz solar del Mediterráneo.',
        category: 'climate',
      },
      {
        question: '¿Qué grosor de suelo PVC recomendáis para el clima de {{name}}?',
        answer:
          'Para el clima mediterráneo de {{name}}, recomendamos un grosor mínimo de 4,5 mm para suelos click y de 5 mm para SPC. Un mayor grosor proporciona mejor aislamiento térmico (mantiene el frescor en verano y la calidez en invierno) y una mayor estabilidad dimensional ante los cambios de temperatura. Si tu vivienda en {{name}} tiene suelo radiante, opta por un SPC de 5-6 mm con base IXPE integrada: transmite el calor eficientemente sin deformarse. Para plantas bajas o viviendas con tendencia a la humedad ascendente, elige siempre un SPC de al menos 5,5 mm con barrera antihumedad integrada.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC resiste el salitre en viviendas costeras de {{name}}?',
        answer:
          'Sí, el suelo PVC es completamente resistente al salitre y a la humedad salina, algo especialmente relevante para viviendas en zonas costeras de {{name}}. A diferencia de los suelos de madera, que se hinchan y deforman con el ambiente marino, el PVC no absorbe humedad ni reacciona con la sal. El SPC, con su núcleo de piedra caliza, es la opción más resistente para viviendas de primera línea de playa o con exposición directa al mar. Puedes limpiar el suelo con agua sin preocuparte por la acumulación de sales. Muchos de nuestros clientes en zonas costeras del Mediterráneo eligen suelo PVC precisamente por esta resistencia.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC es compatible con aire acondicionado en {{name}}?',
        answer:
          'Por supuesto. El suelo PVC funciona perfectamente con sistemas de aire acondicionado, que son habituales en las viviendas de {{name}} durante el verano mediterráneo. Los cambios de temperatura que genera el aire acondicionado (típicamente de 25-35 °C exterior a 22-24 °C interior) están dentro del rango óptimo de funcionamiento de todos nuestros suelos PVC. El SPC, al tener un núcleo rígido, es el que menos se ve afectado por estos contrastes térmicos. Tanto el click como el SPC mantienen su estabilidad sin problemas. Solo es recomendable no enfocar directamente el chorro de aire frío sobre el suelo durante períodos prolongados para evitar condensación superficial.',
        category: 'climate',
      },
      {
        question: '¿Qué acabados de suelo PVC quedan mejor en viviendas mediterráneas de {{name}}?',
        answer:
          'Para viviendas en {{name}} con estilo mediterráneo, los acabados más demandados son los que evocan materiales naturales con tonos claros y cálidos. Las imitaciones de roble natural claro y roble blanqueado son los más vendidos porque aportan luminosidad y amplitud. Las reproducciones de piedra caliza y cemento pulido son perfectas para estilos contemporáneos y minimalistas. Si buscas un toque rústico, los acabados de madera envejecida con textura marcada combinan muy bien con la arquitectura tradicional. Y para cocinas y baños, los diseños tipo baldosa hidráulica en PVC son una tendencia en alza que permite recuperar el estilo clásico sin el coste del mosaico artesanal.',
        category: 'climate',
      },
      {
        question: '¿Cómo afectan las lluvias torrenciales al suelo PVC en {{name}}?',
        answer:
          'El suelo PVC es 100 % impermeable, por lo que las lluvias torrenciales típicas del otoño mediterráneo en {{name}} no suponen ningún riesgo para el pavimento en sí. Si entra agua por una ventana abierta o una terraza, puedes secarla con una fregona sin que el suelo sufra daños. El SPC y el vinílico click resisten incluso una inundación temporal sin deformarse, algo que no puede decir ningún suelo de madera ni laminado. La única precaución es asegurar que la junta perimetral (espacio de dilatación) esté correctamente sellada con silicona en las zonas de contacto con puertas de terraza y balcones.',
        category: 'climate',
      },
      {
        question: '¿Es el suelo PVC una buena opción para segundas residencias en la costa de {{name}}?',
        answer:
          'El suelo PVC es la opción ideal para segundas residencias en la costa de {{name}}. Al ser 100 % impermeable y no requerir mantenimiento, aguanta perfectamente los meses en que la vivienda está cerrada y sin ventilación, algo que destruiría un suelo de madera o laminado. No desarrolla moho ni malos olores, no se dilata con el calor del verano ni se contrae en invierno, y cuando llegas solo necesitas una pasada de fregona para dejarlo impecable. Además, la instalación es rápida y limpia, ideal si no quieres pasar tus vacaciones en medio de una obra. El SPC es nuestra recomendación estrella para segundas residencias mediterráneas.',
        category: 'climate',
      },
    ],
  },

  // =========================================================================
  // CONTINENTAL
  // =========================================================================
  {
    climate: 'continental' as ClimateType,
    templates: [
      {
        question: '¿Funciona bien el suelo PVC con el frío intenso de invierno en {{name}}?',
        answer:
          'Sí, el suelo PVC funciona muy bien en los inviernos fríos de {{name}}. A diferencia de la cerámica, que transmite una sensación gélida al pisar, el PVC tiene una pisada cálida y confortable incluso sin suelo radiante. Su estructura multicapa actúa como aislante térmico natural, reduciendo la pérdida de calor por el suelo. En {{name}}, donde las temperaturas invernales pueden bajar de 0 °C, recomendamos optar por un suelo SPC de al menos 5 mm de grosor con base IXPE integrada para maximizar el aislamiento. Si tienes suelo radiante, el SPC es la mejor opción porque conduce el calor de forma eficiente sin deformarse.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC resiste los cambios bruscos de temperatura en {{name}}?',
        answer:
          'El clima continental de {{name}}, con sus fuertes contrastes entre verano e invierno (y a veces entre el día y la noche), puede ser un reto para muchos pavimentos. El suelo SPC es la opción más recomendable para este clima porque su núcleo rígido de piedra y polímero tiene una dilatación térmica prácticamente nula. Puede pasar de 5 °C a 30 °C sin deformarse, separarse ni crear juntas visibles. El vinílico click estándar también funciona bien, pero es importante respetar la junta de dilatación perimetral de 8-10 mm para absorber los movimientos. En {{name}}, el SPC es nuestra recomendación estrella para todo tipo de viviendas.',
        category: 'climate',
      },
      {
        question: '¿Es compatible el suelo PVC con calefacción y suelo radiante en {{name}}?',
        answer:
          'Por supuesto. El suelo PVC es totalmente compatible con los sistemas de calefacción habituales en {{name}}: suelo radiante (tanto de agua como eléctrico), radiadores y bomba de calor. Para suelo radiante, el SPC es la opción ideal porque resiste temperaturas de hasta 35 °C en la superficie del subsuelo y transmite el calor de forma uniforme. El vinílico click también es compatible, pero con un límite de 28 °C. Es importante que el suelo radiante se encienda y apague de forma gradual (subida/bajada de 5 °C por hora) para evitar estrés térmico. Nuestros instaladores en {{name}} conocen perfectamente estos protocolos y te asesoran sobre la mejor opción.',
        category: 'climate',
      },
      {
        question: '¿Qué grosor de suelo PVC es mejor para el clima continental de {{name}}?',
        answer:
          'Para el clima continental de {{name}}, recomendamos un grosor generoso para maximizar el aislamiento térmico. En suelo SPC, opta por un mínimo de 5,5 mm, idealmente 6-7 mm si tu vivienda no tiene suelo radiante. Para suelos click, elige modelos de 5 mm en adelante con base acústica integrada de al menos 1,5 mm. Si tu vivienda en {{name}} es una planta baja o tiene problemas de frío desde el subsuelo, considera añadir una manta aislante (PE foam o IXPE) de 2-3 mm bajo el suelo vinílico, lo que sumará un aislamiento térmico considerable y eliminará la sensación de frío.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC se comporta bien en plantas bajas con humedad en {{name}}?',
        answer:
          'Sí, el suelo PVC es una solución excelente para plantas bajas en {{name}}, donde la humedad ascendente del terreno puede ser un problema serio para suelos de madera y laminados. El PVC es 100 % impermeable y no absorbe la humedad que sube del subsuelo. Eso sí, es fundamental colocar una lámina antihumedad (barrera de vapor) entre el subsuelo y el pavimento para evitar que la condensación quede atrapada. El SPC, con su núcleo de piedra, es el más resistente a la humedad. Nuestro equipo puede realizar una medición de humedad del subsuelo en tu vivienda de {{name}} antes de la instalación para determinar si necesitas algún tratamiento previo.',
        category: 'climate',
      },
      {
        question: '¿Cómo protege el suelo PVC del frío en comparación con otros suelos en {{name}}?',
        answer:
          'En los inviernos de {{name}}, la diferencia al pisar un suelo PVC frente a una baldosa cerámica es notable. Mientras la cerámica tiene una temperatura superficial que puede bajar de 10 °C en invierno (muy desagradable sin zapatillas), el PVC mantiene una superficie entre 15 y 18 °C gracias a su estructura multicapa aislante. Frente al laminado, el PVC ofrece una pisada similar en temperatura pero gana en impermeabilidad. Frente a la madera maciza, el PVC es más estable dimensionalmente ante la calefacción (la madera se seca y agrieta). Y con suelo radiante, el PVC transmite el calor de forma más uniforme que la madera, resultando más eficiente energéticamente.',
        category: 'climate',
      },
      {
        question: '¿Puedo instalar suelo PVC en invierno en {{name}}?',
        answer:
          'Sí, puedes instalar suelo PVC en invierno en {{name}}, pero hay que tomar algunas precauciones. La temperatura de la habitación durante la instalación debe estar entre 15 y 25 °C, por lo que si instalas en pleno invierno, asegúrate de tener la calefacción encendida al menos 48 horas antes. Es importante que el material se aclimate a la temperatura de la vivienda dejándolo en la habitación al menos 24-48 horas antes de instalarlo (sin abrir los paquetes). Esto es especialmente importante en {{name}} en los meses de diciembre a febrero. Nuestros instaladores profesionales conocen estas condiciones y te indicarán exactamente cuándo y cómo preparar la estancia.',
        category: 'climate',
      },
      {
        question: '¿Qué acabados de suelo PVC recomendáis para casas de estilo castellano en {{name}}?',
        answer:
          'Para viviendas de estilo castellano o tradicional en {{name}}, los acabados que mejor combinan son las imitaciones de madera oscura o envejecida: roble tostado, nogal, castaño antiguo o encina. Estos tonos cálidos aportan carácter y combinan perfectamente con la arquitectura tradicional de la zona. Si prefieres un estilo más contemporáneo, los acabados de roble natural con vetas marcadas en formato de lama ancha (18-22 cm) dan un toque moderno sin perder la calidez. Para cocinas y baños, los diseños de piedra pizarra o barro cocido en PVC son una alternativa elegante y mucho más práctica que los materiales originales.',
        category: 'climate',
      },
    ],
  },

  // =========================================================================
  // OCEÁNICO
  // =========================================================================
  {
    climate: 'oceánico' as ClimateType,
    templates: [
      {
        question: '¿Es el suelo PVC resistente a la lluvia y humedad del norte en {{name}}?',
        answer:
          'El suelo PVC es la opción ideal para el clima oceánico de {{name}}, donde la humedad relativa media supera el 75 % y las precipitaciones son frecuentes durante todo el año. A diferencia de la madera, que se hincha y deforma con la humedad constante, el PVC es 100 % impermeable y no absorbe ni un gramo de agua. Puedes fregar sin restricciones, no tienes que preocuparte si entran gotas por una ventana abierta, y la humedad ambiental no le afecta en absoluto. El SPC es la opción más estable, pero incluso el vinílico click y el rollo funcionan perfectamente en el clima húmedo de {{name}}. Además, el PVC no desarrolla moho ni hongos, un problema común en la zona.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC ayuda con los problemas de moho en viviendas de {{name}}?',
        answer:
          'El suelo PVC contribuye significativamente a reducir los problemas de moho en viviendas de {{name}}. Al ser impermeable y no poroso, el PVC no retiene humedad ni proporciona un sustrato donde los hongos puedan crecer, a diferencia de la madera, el corcho o las moquetas. Su superficie lisa y no absorbente se limpia fácilmente, eliminando las esporas antes de que puedan proliferar. Para maximizar la protección antimoho en {{name}}, recomendamos instalar el suelo SPC con una lámina antihumedad debajo y asegurar una ventilación adecuada de la vivienda. Todos nuestros suelos PVC tienen tratamiento antibacteriano en superficie.',
        category: 'climate',
      },
      {
        question: '¿Qué suelo PVC es más cálido para los inviernos de {{name}}?',
        answer:
          'Los inviernos de {{name}} son suaves pero húmedos y grises, y un suelo cálido marca la diferencia en el confort del hogar. El suelo PVC más cálido al pisar es el vinílico click de 6-8 mm de grosor con base de espuma integrada. Le sigue el SPC de 6-7 mm con base IXPE. Ambos ofrecen una pisada notablemente más cálida que la cerámica o la piedra. Si quieres maximizar la sensación térmica sin suelo radiante, te recomendamos añadir una base aislante adicional de 2 mm bajo el suelo. Con suelo radiante, el SPC de 5-6 mm es la combinación perfecta: cálido, impermeable y resistente a la humedad oceánica de {{name}}.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC resiste las entradas de agua en portales y entradas en {{name}}?',
        answer:
          'Sí, el suelo PVC es perfecto para las entradas y portales de viviendas en {{name}}, donde es inevitable que se acumule agua de lluvia en los zapatos y paraguas. A diferencia de la madera, que se mancha y deforma con el agua constante, el PVC resiste sin problemas los charcos, las pisadas mojadas y la humedad permanente. Para zonas de entrada, recomendamos el SPC con acabado antideslizante (clasificación R10 o R11) para evitar resbalones con los pies mojados. Las losetas de PVC también son una opción excelente para entradas porque combinan resistencia extrema con facilidad de reposición individual si alguna pieza se daña con el tiempo.',
        category: 'climate',
      },
      {
        question: '¿Cómo preparar la instalación de suelo PVC en la temporada de lluvias en {{name}}?',
        answer:
          'En {{name}}, donde llueve con frecuencia, la instalación de suelo PVC requiere prestar atención a la humedad del subsuelo. Antes de instalar, es imprescindible medir la humedad residual del suelo base con un higrómetro: debe estar por debajo del 2 % en subsuelos de cemento y por debajo del 0,5 % en anhidrita. Si la vivienda ha tenido problemas de humedad, recomendamos colocar una lámina de polietileno de 0,2 mm como barrera de vapor antes de instalar el PVC. Nuestros instaladores en {{name}} realizan esta medición como parte del protocolo estándar. Si se detecta humedad excesiva, te asesoran sobre la solución más adecuada antes de proceder.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC se ve afectado por la falta de sol en {{name}}?',
        answer:
          'La menor exposición solar del clima oceánico de {{name}} es realmente una ventaja para el suelo PVC. La radiación UV es la principal causa de decoloración en los pavimentos vinílicos, y en {{name}} este riesgo es mucho menor que en zonas de interior o del sur de España. Esto significa que los colores y acabados de tu suelo PVC se mantendrán vibrantes y uniformes durante más tiempo. Dicho esto, todos nuestros productos incluyen tratamiento UV protector de serie. Si quieres aprovechar al máximo la luz natural en los días nublados, te recomendamos acabados claros (roble natural, arce, fresno blanqueado) que reflejan la luz y hacen las estancias más luminosas.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC aísla del ruido de la lluvia en {{name}}?',
        answer:
          'Sí, el suelo PVC contribuye al aislamiento acústico de tu vivienda en {{name}}. Los modelos click y SPC con base integrada ofrecen una reducción de ruido de impacto de hasta 19 dB, lo que se traduce en un hogar más silencioso tanto para ti como para los vecinos del piso de abajo. Si vives en un piso alto en {{name}} y quieres maximizar el aislamiento acústico, elige un SPC de 6-7 mm con base IXPE de 1,5 mm o añade una base adicional de corcho o espuma de alta densidad. Esta combinación no solo reduce el ruido de pisadas sino que también amortigua las vibraciones y el ruido de impacto de la lluvia en los pisos superiores.',
        category: 'climate',
      },
      {
        question: '¿Qué acabados de suelo PVC combinan con el estilo de viviendas del norte en {{name}}?',
        answer:
          'Para viviendas del norte como las de {{name}}, los acabados más acertados son los que aportan calidez y luminosidad a los interiores. Los tonos de roble claro, abedul y fresno son los más demandados porque iluminan las estancias en los días nublados sin renunciar a la calidez. Si tu vivienda tiene un estilo rústico norteño, los acabados de roble envejecido con nudos y textura cepillada combinan perfectamente. Para casas de estilo industrial, los diseños de cemento gris claro o madera recuperada dan un toque contemporáneo. Y para los amantes de la decoración nórdica (muy popular en el norte), los acabados de roble blanqueado o pino escandinavo son la opción perfecta.',
        category: 'climate',
      },
    ],
  },

  // =========================================================================
  // SUBTROPICAL (Canarias)
  // =========================================================================
  {
    climate: 'subtropical' as ClimateType,
    templates: [
      {
        question: '¿Es adecuado el suelo PVC para el clima subtropical de {{name}}?',
        answer:
          'El suelo PVC es una elección excelente para el clima subtropical de {{name}}. Las temperaturas estables durante todo el año (entre 18 y 28 °C) crean condiciones ideales para cualquier tipo de suelo PVC, ya que no hay cambios térmicos bruscos que generen dilatación o contracción. La humedad ambiental de las islas tampoco supone un problema porque el PVC es 100 % impermeable. El suelo SPC y el vinílico click son las opciones más populares en {{name}} por su resistencia a la humedad y su fácil mantenimiento. Si tu vivienda está en una zona costera con exposición al salitre, el SPC es la opción más duradera.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC resiste la arena y la sal del ambiente en {{name}}?',
        answer:
          'Sí, el suelo PVC es altamente resistente a la arena y al ambiente salino de {{name}}. La arena fina que inevitablemente entra en las viviendas costeras de Canarias se limpia fácilmente con una aspiradora o mopa, sin rayar la superficie gracias al tratamiento protector de las capas superiores. El salitre ambiental tampoco afecta al PVC porque es un material inerte que no reacciona con la sal. Solo es recomendable barrer o aspirar con frecuencia para evitar que los granos de arena actúen como abrasivo bajo las suelas de los zapatos. Con esta sencilla precaución, tu suelo PVC en {{name}} se mantendrá impecable durante décadas.',
        category: 'climate',
      },
      {
        question: '¿Qué suelo PVC es mejor para viviendas con mucha luz solar en {{name}}?',
        answer:
          'En {{name}}, donde las horas de sol anuales superan las 2.800, la protección UV del suelo PVC es especialmente importante. Todos nuestros suelos incluyen tratamiento UV, pero para viviendas con grandes ventanales orientados al sur o al oeste en {{name}}, recomendamos especialmente el suelo SPC con capa de uso de 0,55 mm o superior y protección UV reforzada. Este tipo de suelo no se decolora ni se degrada con la exposición solar intensa. Para los colores, los tonos medios (roble natural, nogal claro) son los que mejor disimulan cualquier mínima variación de tono a lo largo de los años.',
        category: 'climate',
      },
      {
        question: '¿Cuánto tarda en llegar el suelo PVC a {{name}} en Canarias?',
        answer:
          'El plazo de entrega estándar para {{name}} es de 7 a 10 días laborables desde la confirmación del pedido. Los envíos a Canarias salen de nuestro almacén de Barcelona por transporte marítimo, que es el método más seguro y económico para los pavimentos. Los portes a Canarias tienen un coste adicional respecto a la península, que varía entre 50 y 120 € según el volumen y el peso del pedido. Este coste se incluye desglosado en el presupuesto. Los productos están exentos de IGIC (impuesto canario) al ser material de construcción con destino a obra. Te proporcionamos toda la documentación necesaria para la aduana.',
        category: 'delivery',
      },
      {
        question: '¿El suelo PVC no se calienta excesivamente en {{name}}?',
        answer:
          'A diferencia de la cerámica oscura o la piedra, el suelo PVC no acumula calor excesivo en {{name}}. Su estructura multicapa de materiales sintéticos tiene una baja conductividad térmica, lo que significa que la superficie del suelo se mantiene a una temperatura confortable incluso en los meses de verano. Si tu vivienda en {{name}} tiene terrazas o zonas cubiertas, las losetas de PVC para exterior son una alternativa fresca al pavimento cerámico. En interiores, tanto el click como el SPC mantienen una temperatura de superficie agradable, notablemente inferior a la que alcanzaría una baldosa oscura bajo la misma exposición solar.',
        category: 'climate',
      },
      {
        question: '¿Se puede instalar suelo PVC en terrazas cubiertas en {{name}}?',
        answer:
          'Sí, para terrazas cubiertas en {{name}} recomendamos las losetas de PVC con sistema de encastre, que son resistentes a la radiación UV, a los cambios de temperatura y a la humedad. Las losetas modulares de exterior tienen un espesor de 8-10 mm y una superficie antideslizante que cumple con la clasificación R11 incluso mojadas. Se instalan directamente sobre la superficie existente sin adhesivos y se pueden desmontar fácilmente. Para terrazas descubiertas expuestas directamente al sol y la lluvia, el PVC no es la opción más adecuada; en ese caso es mejor optar por gres porcelánico exterior o composite. Pero para terrazas y porches con techo, el PVC es perfecto.',
        category: 'climate',
      },
      {
        question: '¿Qué estilos de suelo PVC combinan con viviendas canarias en {{name}}?',
        answer:
          'Las viviendas de {{name}} tienen un estilo arquitectónico propio que combina muy bien con ciertos acabados de suelo PVC. Los diseños de madera tropical clara (teca, bambú, iroko claro) son muy populares porque evocan el ambiente isleño sin las desventajas de la madera real (mantenimiento, humedad). Los acabados de piedra arenisca y cemento blanco encajan perfectamente con el estilo mediterráneo-canario de muros encalados. Si buscas un estilo más moderno, los tonos grises de roble lavado o cemento pulido aportan un look contemporáneo muy atractivo. En general, los tonos claros son los más recomendables porque reflejan la luz, no acumulan calor y combinan con la luminosidad natural de {{name}}.',
        category: 'climate',
      },
      {
        question: '¿Tienen instaladores de suelo PVC en {{name}}, Canarias?',
        answer:
          'Sí, contamos con una red de instaladores profesionales certificados en Canarias que cubren {{name}} y las principales localidades de las islas. Nuestros instaladores en Canarias están formados con los mismos estándares que los equipos de Barcelona y tienen amplia experiencia en las particularidades de las viviendas isleñas (humedades costeras, subsuelos de hormigón, casas terrizas). La coordinación se realiza desde nuestra central de Barcelona: te asignamos un instalador en {{name}}, coordinamos la fecha y nos encargamos de que el material llegue antes de la cita de instalación. El coste de instalación en Canarias tiene un ligero suplemento respecto a la península.',
        category: 'installation',
      },
    ],
  },

  // =========================================================================
  // MONTAÑA
  // =========================================================================
  {
    climate: 'montaña' as ClimateType,
    templates: [
      {
        question: '¿Resiste el suelo PVC el frío extremo de montaña en {{name}}?',
        answer:
          'Sí, el suelo PVC funciona perfectamente en el clima de montaña de {{name}}, incluso con temperaturas bajo cero en el exterior. El PVC no se agrieta, rompe ni deforma con el frío, a diferencia de algunos suelos cerámicos que pueden sufrir fisuras por heladas. Lo importante es que la temperatura interior de la vivienda se mantenga por encima de los 10 °C de forma continuada. En viviendas de montaña con calefacción en {{name}}, el suelo PVC ofrece una pisada notablemente más cálida que la cerámica o la piedra. El SPC de 6-8 mm con base aislante es nuestra recomendación para estas condiciones, ya que proporciona el máximo aislamiento térmico.',
        category: 'climate',
      },
      {
        question: '¿Es compatible el suelo PVC con la calefacción intensa que se usa en {{name}}?',
        answer:
          'Por supuesto. El suelo PVC es totalmente compatible con sistemas de calefacción intensiva (suelo radiante, radiadores, estufas de pellets, chimeneas) habituales en viviendas de montaña de {{name}}. El SPC resiste temperaturas de superficie de hasta 35 °C con suelo radiante. Para estufas y chimeneas, es recomendable colocar una placa protectora en el perímetro inmediato de la fuente de calor para evitar que la radiación directa supere los límites recomendados. Nuestros instaladores en la zona de {{name}} conocen estas particularidades y te asesoran sobre la distancia de seguridad y las protecciones necesarias.',
        category: 'climate',
      },
      {
        question: '¿Qué grosor de suelo PVC es ideal para casas de montaña en {{name}}?',
        answer:
          'Para viviendas de montaña en {{name}}, donde el aislamiento térmico es prioritario, recomendamos el máximo grosor disponible. En SPC, opta por 7-8 mm con base IXPE integrada de 1,5 mm o más. En vinílico click, elige modelos de 6-8 mm. Además, te recomendamos instalar una base aislante adicional de 2-3 mm (PE foam de alta densidad o corcho natural) para maximizar la barrera térmica entre el subsuelo frío y la superficie. Esta combinación de suelo + base puede aportar un valor de aislamiento térmico (R) de hasta 0,15 m²K/W, lo que se traduce en una reducción notable de la pérdida de calor y un ahorro energético en calefacción.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC soporta la nieve y el agua de botas en {{name}}?',
        answer:
          'Sí, el suelo PVC resiste perfectamente el agua de la nieve fundida y las botas mojadas, algo habitual en el día a día invernal de {{name}}. Al ser 100 % impermeable, puedes entrar con las botas cubiertas de nieve sin preocuparte por el suelo. El agua se limpia con una simple fregona. Para la entrada y el recibidor, recomendamos un SPC con acabado antideslizante (R10-R11) y un felpudo absorbente grande para retener la mayor parte del agua y la gravilla. Las losetas de PVC también son excelentes para zonas de entrada porque son extremadamente resistentes al impacto y se pueden reemplazar individualmente si una pieza se deteriora.',
        category: 'climate',
      },
      {
        question: '¿Cómo se comporta el suelo PVC en viviendas de temporada en {{name}}?',
        answer:
          'El suelo PVC es una opción excelente para viviendas de temporada y segundas residencias de montaña en {{name}}. A diferencia de la madera, que se contrae y agrieta cuando la casa está fría y sin calefacción durante semanas, el PVC mantiene su estabilidad dimensional. El SPC es especialmente resistente a los ciclos de frío-calor que experimenta una casa de montaña que se abre y cierra periódicamente. No necesita ningún mantenimiento durante los períodos de inactividad: cuando llegas, solo tienes que encender la calefacción, esperar unas horas a que la casa temple, y el suelo estará perfecto. No desarrolla humedad, moho ni malos olores.',
        category: 'climate',
      },
      {
        question: '¿Qué acabados de suelo PVC encajan con casas rurales o de montaña en {{name}}?',
        answer:
          'Para casas de montaña y viviendas rurales en {{name}}, los acabados más demandados son los que evocan la madera natural con carácter: roble rústico con nudos marcados, castaño antiguo, pino de montaña con textura de sierra y nogal oscuro. Estos diseños combinan perfectamente con la arquitectura de piedra, vigas de madera y chimeneas típicas de la zona. Si prefieres un estilo más contemporáneo, los acabados de roble ahumado o roble gris con textura cepillada aportan un toque moderno sin perder la calidez. Para cocinas y baños de montaña, los diseños de piedra pizarra o slate natural en PVC son una alternativa elegante y 100 % impermeable.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC aísla acústicamente en casas de montaña en {{name}}?',
        answer:
          'Sí, el suelo PVC contribuye significativamente al aislamiento acústico en viviendas de {{name}}. Los modelos SPC de 6-8 mm con base IXPE integrada ofrecen una reducción de ruido de impacto de hasta 19-22 dB, lo que se traduce en un hogar más silencioso y confortable. Esto es especialmente valioso en casas de montaña donde el silencio es parte del atractivo. Si buscas el máximo aislamiento acústico, añade una base de corcho natural de 2-3 mm bajo el SPC: la combinación puede alcanzar una reducción de hasta 25 dB. Este aislamiento también funciona a la inversa, evitando que el ruido de pasos moleste a los vecinos en viviendas adosadas o pisos de montaña.',
        category: 'climate',
      },
      {
        question: '¿Necesito un instalador especializado para suelo PVC en zonas de montaña como {{name}}?',
        answer:
          'Recomendamos contar con un instalador profesional que conozca las particularidades de las viviendas de montaña en {{name}}. Las condiciones específicas incluyen: subsuelos que pueden tener mayor humedad residual por la proximidad al terreno natural, necesidad de barreras antihumedad reforzadas, juntas de dilatación más generosas (10-12 mm en lugar de los 8 mm estándar) para absorber los cambios térmicos extremos, y protocolos de aclimatación del material más estrictos (48-72 horas a temperatura ambiente). Nuestros instaladores certificados en la zona de {{province}} están familiarizados con estas condiciones y garantizan una instalación duradera.',
        category: 'installation',
      },
    ],
  },

  // =========================================================================
  // SEMIÁRIDO
  // =========================================================================
  {
    climate: 'semiárido' as ClimateType,
    templates: [
      {
        question: '¿Es adecuado el suelo PVC para el clima seco y caluroso de {{name}}?',
        answer:
          'El suelo PVC es una elección excelente para el clima semiárido de {{name}}. La baja humedad ambiental es realmente beneficiosa para el PVC, ya que no hay riesgo de problemas por humedad. Los veranos calurosos tampoco suponen un inconveniente serio: el SPC, con su núcleo rígido, mantiene su estabilidad dimensional hasta temperaturas de superficie de 40 °C. La pisada del PVC es más fresca que la del parquet y más cálida que la de la cerámica, ofreciendo un punto intermedio muy confortable para el clima extremo de {{name}}. Además, el PVC requiere un mantenimiento mínimo y no acumula el polvo del ambiente como otros pavimentos.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC resiste el polvo y la tierra del clima semiárido en {{name}}?',
        answer:
          'Sí, el suelo PVC es uno de los pavimentos más prácticos para zonas con mucho polvo como {{name}}. Su superficie lisa y no porosa no acumula polvo ni tierra entre las juntas (a diferencia de los suelos con rejuntado como la cerámica) y se limpia con un simple pase de mopa o aspiradora. Las partículas de arena fina que entran con el viento o los zapatos no rayan la superficie gracias al tratamiento protector de la capa de uso. Para viviendas en {{name}} con jardín o terreno abierto alrededor, el PVC es ideal porque puedes limpiar rápidamente sin necesidad de fregar a fondo cada día.',
        category: 'climate',
      },
      {
        question: '¿Qué suelo PVC soporta mejor el calor intenso del verano en {{name}}?',
        answer:
          'Para los veranos intensos de {{name}}, donde las temperaturas pueden superar los 40 °C en el exterior, el suelo SPC es la opción más estable. Su núcleo de piedra caliza y polímero tiene una dilatación térmica mínima, muy inferior a la del vinílico click estándar. Esto es especialmente importante si tu vivienda en {{name}} recibe sol directo a través de grandes ventanales. El SPC resiste temperaturas de superficie de hasta 40 °C sin deformarse. Si tu presupuesto no alcanza para SPC, el vinílico click de 5 mm o más también funciona bien, pero es fundamental respetar la junta de dilatación perimetral de 10 mm y evitar que la temperatura interior supere los 35 °C de forma prolongada.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC se decolora con la intensa radiación solar de {{name}}?',
        answer:
          'Todos nuestros suelos PVC incluyen tratamiento de protección UV que previene la decoloración por radiación solar. Para las condiciones de alta radiación de {{name}}, recomendamos específicamente los modelos con protección UV reforzada (capa de uso de 0,5 mm o superior) y los acabados SPC premium que utilizan pigmentos de alta estabilidad. Es aconsejable usar cortinas o estores durante las horas de máxima exposición solar (12:00-16:00 en verano) para prolongar al máximo la vida del suelo. Los tonos medios y oscuros son los que mejor disimulan cualquier variación mínima de color, mientras que los blancos y cremas puros son más sensibles a la exposición prolongada.',
        category: 'climate',
      },
      {
        question: '¿Necesita el suelo PVC algún cuidado especial en {{name}} por el clima seco?',
        answer:
          'El clima seco de {{name}} es realmente favorable para el suelo PVC, que no necesita ningún cuidado especial más allá de la limpieza habitual. A diferencia de la madera, que se reseca y agrieta con la baja humedad, el PVC mantiene su integridad sin necesidad de humidificadores ni tratamientos. La única recomendación específica para {{name}} es mantener una rutina de barrido o aspirado frecuente para evitar que las partículas de arena y polvo ambiental actúen como abrasivo bajo las suelas. Un felpudo de buena calidad en la entrada y una mopa de microfibra son todo lo que necesitas para mantener tu suelo perfecto.',
        category: 'climate',
      },
      {
        question: '¿Cómo se instala suelo PVC en condiciones de calor en {{name}}?',
        answer:
          'La instalación de suelo PVC en {{name}} durante los meses calurosos requiere algunas precauciones. La temperatura ideal de instalación es de 18-25 °C, por lo que en verano es mejor trabajar con aire acondicionado encendido o a primera hora de la mañana. Es fundamental aclimatar el material 48 horas en la habitación donde se va a instalar, pero protegido de la exposición solar directa. En el clima semiárido de {{name}}, la baja humedad es una ventaja porque no hay que preocuparse por problemas de condensación en el subsuelo. Nuestros instaladores profesionales en la zona de {{province}} conocen estas condiciones y planifican las instalaciones en horarios óptimos.',
        category: 'climate',
      },
      {
        question: '¿El suelo PVC es eficiente energéticamente en el clima extremo de {{name}}?',
        answer:
          'Sí, el suelo PVC contribuye positivamente a la eficiencia energética de las viviendas en {{name}}. En invierno, su capacidad aislante reduce la pérdida de calor por el suelo, lo que se traduce en menor consumo de calefacción. En verano, su baja conductividad térmica evita que el calor del subsuelo suba a la superficie, manteniendo la estancia más fresca. Con suelo radiante, el SPC transmite el calor de forma uniforme y eficiente, reduciendo el tiempo necesario para alcanzar la temperatura deseada. En comparación con la cerámica, que acumula y libera calor lentamente, el PVC tiene un comportamiento térmico más neutro que favorece el ahorro energético tanto en verano como en invierno.',
        category: 'climate',
      },
      {
        question: '¿Qué acabados de suelo PVC son más adecuados para el clima de {{name}}?',
        answer:
          'Para viviendas en {{name}} con su clima semiárido, te recomendamos acabados en tonos medios y claros que no acumulen sensación de calor visual. Los acabados de roble claro, fresno natural y pino blanqueado aportan frescura y luminosidad. Los diseños de piedra caliza, arenisca y cemento claro combinan perfectamente con la arquitectura y el paisaje de la zona. Para un estilo más tradicional, los acabados de barro cocido y terracota en PVC son una alternativa práctica que evoca el estilo local. Evita los tonos muy oscuros (nogal negro, ébano, pizarra oscura) porque absorben más calor y pueden resultar visualmente pesados en los meses de verano.',
        category: 'climate',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Funciones auxiliares
// ---------------------------------------------------------------------------

/**
 * Devuelve las FAQ templates para una zona concreta.
 */
export function getFaqsByZone(zone: ZoneType): FaqTemplate[] {
  const set = faqsByZone.find((f) => f.zone === zone);
  return set ? set.templates : faqsByZone.find((f) => f.zone === 'national')!.templates;
}

/**
 * Devuelve las FAQ templates para un tipo de clima.
 */
export function getFaqsByClimate(climate: ClimateType): FaqTemplate[] {
  const set = faqsByClimate.find((f) => f.climate === climate);
  return set ? set.templates : [];
}

/**
 * Determina la zona a partir de las propiedades de una ubicación.
 */
export function getZoneType(location: {
  isBcnCity: boolean;
  isBcnMetro: boolean;
  isCatalonia: boolean;
}): ZoneType {
  if (location.isBcnCity) return 'bcnCity';
  if (location.isBcnMetro) return 'bcnMetro';
  if (location.isCatalonia) return 'catalonia';
  return 'national';
}

/**
 * Interpola las variables {{variable}} en una cadena de texto con los datos proporcionados.
 */
export function interpolateFaq(
  template: FaqTemplate,
  data: Record<string, string>
): { question: string; answer: string; category: FaqCategory } {
  let question = template.question;
  let answer = template.answer;

  for (const [key, value] of Object.entries(data)) {
    const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
    question = question.replace(regex, value);
    answer = answer.replace(regex, value);
  }

  return { question, answer, category: template.category };
}

/**
 * Genera un conjunto completo de FAQs interpoladas para una ubicación,
 * combinando las FAQ de zona y las FAQ de clima.
 * Devuelve un máximo de `limit` FAQs, mezclando ambas fuentes.
 */
export function generateFaqsForLocation(
  location: {
    name: string;
    province: string;
    climate: ClimateType;
    deliveryTime: string;
    isBcnCity: boolean;
    isBcnMetro: boolean;
    isCatalonia: boolean;
  },
  limit: number = 8
): Array<{ question: string; answer: string; category: FaqCategory }> {
  const zone = getZoneType(location);
  const zoneTemplates = getFaqsByZone(zone);
  const climateTemplates = getFaqsByClimate(location.climate);

  const data: Record<string, string> = {
    name: location.name,
    province: location.province,
    deliveryTime: location.deliveryTime,
  };

  // Tomar FAQs de zona (prioridad) y completar con clima
  const zoneFaqs = zoneTemplates.map((t) => interpolateFaq(t, data));
  const climateFaqs = climateTemplates.map((t) => interpolateFaq(t, data));

  // Mezclar: primero zona, luego clima (evitando categorías duplicadas excesivas)
  const result: Array<{ question: string; answer: string; category: FaqCategory }> = [];
  const usedCategories = new Set<string>();

  // Añadir al menos una FAQ de cada categoría de zona
  for (const faq of zoneFaqs) {
    if (result.length >= limit) break;
    if (!usedCategories.has(faq.category)) {
      result.push(faq);
      usedCategories.add(faq.category);
    }
  }

  // Completar con FAQs de clima si no hemos llegado al límite
  for (const faq of climateFaqs) {
    if (result.length >= limit) break;
    // Evitar preguntas muy similares comprobando que no empiece igual
    const isDuplicate = result.some(
      (r) => r.question.substring(0, 30) === faq.question.substring(0, 30)
    );
    if (!isDuplicate) {
      result.push(faq);
    }
  }

  // Si aún no hemos llegado al límite, añadir más FAQs de zona
  for (const faq of zoneFaqs) {
    if (result.length >= limit) break;
    const isDuplicate = result.some((r) => r.question === faq.question);
    if (!isDuplicate) {
      result.push(faq);
    }
  }

  return result.slice(0, limit);
}
