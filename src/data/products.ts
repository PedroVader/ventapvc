// src/data/products.ts
// Catálogo real de productos Disstands para ventapvc.com

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export interface Product {
  slug: string;
  name: string;
  brand: string;
  categorySlug: string;
  description: string;
  shortDescription: string;
  priceDisplay?: string;
  pricePerSqm?: number;
  specs: {
    thickness?: string;
    wearLayer?: string;
    width?: string;
    rollLength?: string;
    format?: string;
    fireRating?: string;
    slipResistance?: string;
    acoustics?: string;
  };
  features: string[];
  bestFor: string[];
  hasPage: boolean;
  image: string;
}

// ─── CATEGORIES ────────────────────────────────────────────────────────────────

export const categories: ProductCategory[] = [
  {
    slug: 'eventos',
    name: 'Eventos',
    description:
      'Suelos de PVC diseñados para eventos, ferias, congresos y espacios temporales. Instalación ultrarrápida, resistencia al tráfico intenso y acabados profesionales que transforman cualquier espacio en minutos.',
    icon: 'eventos',
  },
  {
    slug: 'domestico',
    name: 'Uso Doméstico',
    description:
      'Amplia gama de suelos de PVC para hogares: desde imitación madera y piedra hasta diseños decorativos. Soluciones resistentes, impermeables y fáciles de mantener para salones, dormitorios, cocinas y baños.',
    icon: 'domestico',
  },
  {
    slug: 'oficinas',
    name: 'Oficinas',
    description:
      'Pavimentos de PVC profesionales para oficinas y espacios de trabajo. Losetas modulares, rollos y sistemas click con excelente aislamiento acústico y resistencia al tráfico comercial.',
    icon: 'oficinas',
  },
  {
    slug: 'colegios',
    name: 'Colegios',
    description:
      'Suelos de PVC para centros educativos: aulas, gimnasios, pasillos y comedores. Productos seguros, antideslizantes, fáciles de limpiar y con alta resistencia al desgaste infantil.',
    icon: 'colegios',
  },
  {
    slug: 'hospital',
    name: 'Hospital',
    description:
      'Pavimentos de PVC para entornos sanitarios: hospitales, clínicas, residencias y laboratorios. Superficies higiénicas, conductivas y antiestáticas con certificaciones sanitarias.',
    icon: 'hospital',
  },
  {
    slug: 'otros',
    name: 'Otros',
    description:
      'Suelos de PVC especiales para transporte, náutica, exterior y garajes. Soluciones técnicas de alta resistencia para usos industriales y entornos exigentes.',
    icon: 'otros',
  },
];

// ─── PRODUCTS ──────────────────────────────────────────────────────────────────

export const products: Product[] = [
  // ── EVENTOS (4 productos) ──────────────────────────────────────────────────
  {
    slug: 'pvc-artic',
    name: 'PVC Artic',
    brand: 'Disstands',
    categorySlug: 'eventos',
    description:
      'El PVC Artic es un pavimento vinílico en rollo diseñado específicamente para eventos, ferias y congresos. Su superficie lisa y uniforme ofrece un acabado profesional que transforma cualquier espacio en minutos. Fabricado con materiales de alta calidad, resiste el tráfico intenso de visitantes durante varios días sin mostrar signos de desgaste. Su instalación es extremadamente rápida: basta con desenrollar y fijar con cinta de doble cara. Disponible en una amplia gama de colores sólidos para adaptarse a cualquier imagen corporativa o temática de evento.',
    shortDescription: 'Suelo PVC liso para eventos y ferias. Instalación ultrarrápida, amplia gama de colores sólidos.',
    priceDisplay: 'Desde 5,20 €/m²',
    pricePerSqm: 5.20,
    specs: {
      thickness: '2 mm',
      wearLayer: '0,2 mm',
      width: '2 m',
      rollLength: '25 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R9',
    },
    features: [
      'Superficie lisa con acabado mate profesional',
      'Instalación en minutos con cinta de doble cara',
      'Resistente al tráfico intenso de eventos',
      'Amplia gama de colores sólidos disponibles',
      'Reutilizable en múltiples eventos',
      'Clasificación al fuego Bfl-s1',
    ],
    bestFor: ['Ferias y congresos', 'Eventos corporativos', 'Stands y exposiciones', 'Espacios temporales'],
    hasPage: true,
    image: '/images/products/pvc-artic.webp',
  },
  {
    slug: 'pvc-artic-madera',
    name: 'PVC Artic Madera',
    brand: 'Disstands',
    categorySlug: 'eventos',
    description:
      'El PVC Artic Madera combina la practicidad del suelo para eventos con la estética cálida de la madera natural. Disponible en varios tonos de madera — roble claro, nogal, cerezo y wengué — aporta elegancia a cualquier evento o espacio temporal sin el coste ni el mantenimiento de un parquet real. Su instalación es tan rápida como el Artic estándar: desenrollar y fijar. Ideal para eventos que requieren una atmósfera más sofisticada como galas, presentaciones de producto o showrooms.',
    shortDescription: 'Suelo PVC para eventos con acabado imitación madera. Elegancia para ferias y showrooms.',
    priceDisplay: 'Desde 6,50 €/m²',
    pricePerSqm: 6.50,
    specs: {
      thickness: '2 mm',
      wearLayer: '0,2 mm',
      width: '2 m',
      rollLength: '25 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R9',
    },
    features: [
      'Acabado imitación madera realista',
      'Varios tonos disponibles: roble, nogal, cerezo, wengué',
      'Instalación rápida sin adhesivos',
      'Aporta calidez y elegancia a eventos',
      'Resistente a tacones y tráfico intenso',
      'Clasificación al fuego Bfl-s1',
    ],
    bestFor: ['Galas y eventos premium', 'Showrooms y presentaciones', 'Stands de diseño', 'Espacios VIP en ferias'],
    hasPage: true,
    image: '/images/products/pvc-artic-madera.webp',
  },
  {
    slug: 'pvc-silencio-confort',
    name: 'PVC Silencio Confort',
    brand: 'Disstands',
    categorySlug: 'eventos',
    description:
      'El PVC Silencio Confort es un pavimento para eventos con capa de espuma incorporada que ofrece una pisada cómoda y reduce significativamente el ruido de pasos. Su estructura de doble capa — superficie de PVC resistente y base de espuma amortiguadora — lo convierte en la elección ideal para eventos de larga duración donde los asistentes pasan horas de pie: congresos, ferias comerciales y convenciones. Reduce la fatiga y mejora la experiencia del visitante.',
    shortDescription: 'Suelo PVC acolchado para eventos. Capa de espuma para máximo confort en ferias y congresos.',
    priceDisplay: 'Desde 7,80 €/m²',
    pricePerSqm: 7.80,
    specs: {
      thickness: '3,5 mm',
      wearLayer: '0,2 mm',
      width: '2 m',
      rollLength: '20 m',
      fireRating: 'Bfl-s1',
      acoustics: '8 dB',
    },
    features: [
      'Capa de espuma integrada para confort superior',
      'Reducción acústica de 8 dB',
      'Reduce la fatiga en eventos de larga duración',
      'Superficie antideslizante',
      'Instalación rápida en grandes superficies',
      'Reutilizable en múltiples eventos',
    ],
    bestFor: ['Congresos y convenciones', 'Ferias de larga duración', 'Eventos con público de pie', 'Salas de conferencias temporales'],
    hasPage: true,
    image: '/images/products/pvc-silencio-confort.webp',
  },
  {
    slug: 'pvc-compact',
    name: 'PVC Compact',
    brand: 'Disstands',
    categorySlug: 'eventos',
    description:
      'El PVC Compact es un pavimento de alta densidad diseñado para los eventos más exigentes. Su estructura compacta y homogénea ofrece la máxima resistencia al tráfico pesado, incluyendo carretillas, stands con maquinaria y montaje de escenarios. Es el suelo preferido para ferias industriales, exposiciones de automóviles y eventos con logística pesada. Su superficie texturizada proporciona un agarre excepcional incluso en condiciones húmedas.',
    shortDescription: 'Suelo PVC compacto de alta densidad para eventos industriales y ferias con tráfico pesado.',
    priceDisplay: 'Desde 9,37 €/m²',
    pricePerSqm: 9.37,
    specs: {
      thickness: '2,6 mm',
      wearLayer: '0,7 mm',
      width: '2 m',
      rollLength: '20 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R10',
    },
    features: [
      'Alta densidad para tráfico pesado',
      'Resistente a carretillas y maquinaria',
      'Superficie texturizada antideslizante R10',
      'Capa de uso de 0,7 mm de alta resistencia',
      'Apto para montaje de escenarios',
      'Clasificación al fuego Bfl-s1',
    ],
    bestFor: ['Ferias industriales', 'Exposiciones de automóviles', 'Eventos con montaje pesado', 'Espacios de logística temporal'],
    hasPage: true,
    image: '/images/products/pvc-compact.webp',
  },

  // ── DOMÉSTICO (13 productos) ───────────────────────────────────────────────
  {
    slug: 'bindis-wood',
    name: 'Bindis Wood',
    brand: 'Disstands',
    categorySlug: 'domestico',
    description:
      'Bindis Wood es un suelo vinílico en rollo con acabado imitación madera de alta definición. Diseñado para uso doméstico, ofrece la calidez y estética de la madera natural con las ventajas del PVC: impermeabilidad total, facilidad de limpieza y resistencia al desgaste. Disponible en tonos roble, pino, haya y nogal. Su base de espuma proporciona confort al caminar y aislamiento acústico. Perfecto para salones, dormitorios y pasillos que buscan un aspecto natural sin el mantenimiento del parquet.',
    shortDescription: 'Suelo PVC en rollo imitación madera. Impermeabilidad total y confort para hogares.',
    priceDisplay: 'Desde 8,50 €/m²',
    pricePerSqm: 8.50,
    specs: {
      thickness: '2,8 mm',
      wearLayer: '0,25 mm',
      width: '2 m / 3 m / 4 m',
      rollLength: '25 m',
      fireRating: 'Bfl-s1',
      acoustics: '6 dB',
    },
    features: [
      'Acabado imitación madera de alta definición',
      'Tonos disponibles: roble, pino, haya, nogal',
      '100% impermeable para cocinas y baños',
      'Base de espuma para confort acústico',
      'Mantenimiento mínimo: solo fregona húmeda',
      'Compatible con suelo radiante hasta 28 °C',
    ],
    bestFor: ['Salones y dormitorios', 'Cocinas y baños', 'Reformas rápidas de viviendas', 'Pisos de alquiler'],
    hasPage: true,
    image: '/images/products/bindis-wood.webp',
  },
  {
    slug: 'bindis-stone',
    name: 'Bindis Stone',
    brand: 'Disstands',
    categorySlug: 'domestico',
    description:
      'Bindis Stone es un suelo PVC en rollo con acabados que imitan piedra natural, mármol y pizarra. Ideal para quienes buscan un suelo de aspecto mineral sin la frialdad ni el peso de los materiales naturales. Su superficie texturizada reproduce fielmente las vetas y la rugosidad de la piedra. Resistente al agua, manchas y arañazos, es perfecto para cocinas, baños y zonas de paso. Disponible en varios anchos para minimizar juntas en la instalación.',
    shortDescription: 'Suelo PVC en rollo efecto piedra y mármol. Estética mineral sin frialdad para hogares.',
    priceDisplay: 'Desde 9,20 €/m²',
    pricePerSqm: 9.20,
    specs: {
      thickness: '2,8 mm',
      wearLayer: '0,25 mm',
      width: '2 m / 3 m / 4 m',
      rollLength: '25 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R10',
    },
    features: [
      'Acabados piedra, mármol y pizarra realistas',
      'Superficie texturizada antideslizante',
      '100% impermeable — ideal para zonas húmedas',
      'Sin la frialdad ni el peso de piedra natural',
      'Fácil instalación con adhesivo o cinta',
      'Resistente a manchas y productos de limpieza',
    ],
    bestFor: ['Cocinas y baños modernos', 'Recibidores y zonas de paso', 'Viviendas de estilo mediterráneo', 'Reformas sin obras'],
    hasPage: true,
    image: '/images/products/bindis-stone.webp',
  },
  {
    slug: 'bindis-loseta',
    name: 'Bindis Loseta',
    brand: 'Disstands',
    categorySlug: 'domestico',
    description:
      'Bindis Loseta es un suelo PVC en rollo que reproduce fielmente el aspecto de baldosas cerámicas y mosaicos hidráulicos. Combina la estética tradicional del suelo cerámico con la comodidad, calidez y facilidad de instalación del PVC. Disponible en diseños clásicos, geométricos y modernos. Perfecto para cocinas, baños y recibidores que buscan un look de baldosa sin las juntas frías ni el riesgo de rotura del material cerámico.',
    shortDescription: 'Suelo PVC en rollo efecto baldosa cerámica. Look de azulejo sin obras ni juntas frías.',
    priceDisplay: 'Desde 8,90 €/m²',
    pricePerSqm: 8.90,
    specs: {
      thickness: '2,8 mm',
      wearLayer: '0,25 mm',
      width: '2 m / 3 m / 4 m',
      rollLength: '25 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R10',
    },
    features: [
      'Diseños de baldosa cerámica y mosaico hidráulico',
      'Sin juntas frías ni riesgo de rotura',
      'Instalación rápida sobre pavimento existente',
      'Superficie cálida y confortable al tacto',
      'Resistente al agua y productos de limpieza',
      'Amplia variedad de diseños decorativos',
    ],
    bestFor: ['Cocinas de estilo clásico', 'Baños con look cerámico', 'Recibidores y halls', 'Viviendas vintage o de diseño'],
    hasPage: true,
    image: '/images/products/bindis-loseta.webp',
  },
  {
    slug: 'taraladis',
    name: 'Taraladis',
    brand: 'Disstands',
    categorySlug: 'domestico',
    description:
      'Taraladis es un suelo PVC heterogéneo en rollo de alta calidad para uso doméstico intensivo. Su capa de uso reforzada lo hace especialmente resistente al desgaste en hogares con niños, mascotas y tráfico frecuente. Disponible en una amplia variedad de diseños de madera, piedra y abstractos. Su estructura multicapa proporciona excelente aislamiento acústico y térmico, haciendo que la vivienda sea más silenciosa y confortable.',
    shortDescription: 'Suelo PVC heterogéneo para uso doméstico intensivo. Alta resistencia para familias con niños y mascotas.',
    priceDisplay: 'Desde 11,50 €/m²',
    pricePerSqm: 11.50,
    specs: {
      thickness: '3,2 mm',
      wearLayer: '0,30 mm',
      width: '2 m / 3 m / 4 m',
      rollLength: '25 m',
      fireRating: 'Bfl-s1',
      acoustics: '15 dB',
    },
    features: [
      'Capa de uso reforzada de 0,30 mm',
      'Aislamiento acústico de 15 dB',
      'Diseños madera, piedra y abstractos',
      'Resistente a mascotas y juegos infantiles',
      'Compatible con suelo radiante',
      'Tratamiento anti-manchas de fábrica',
    ],
    bestFor: ['Hogares con niños y mascotas', 'Salones de uso intensivo', 'Dormitorios principales', 'Viviendas unifamiliares'],
    hasPage: true,
    image: '/images/products/taraladis.webp',
  },
  {
    slug: 'mipoldis',
    name: 'Mipoldis',
    brand: 'Disstands',
    categorySlug: 'domestico',
    description:
      'Mipoldis es un suelo vinílico en rollo económico para uso doméstico general. Es la opción más accesible de la gama Disstands para hogares que buscan renovar su suelo con un presupuesto ajustado sin renunciar a la calidad. Disponible en diseños de madera clara, madera oscura y tonos lisos. Su instalación es sencilla y rápida, ideal para reformas express y pisos de alquiler. 100% impermeable y fácil de mantener.',
    shortDescription: 'Suelo PVC en rollo económico para hogares. La opción más accesible de Disstands.',
    priceDisplay: 'Desde 6,20 €/m²',
    pricePerSqm: 6.20,
    specs: {
      thickness: '2,0 mm',
      wearLayer: '0,15 mm',
      width: '2 m / 3 m',
      rollLength: '25 m',
      fireRating: 'Efl',
    },
    features: [
      'Precio muy competitivo por metro cuadrado',
      '100% impermeable',
      'Diseños de madera clara, oscura y lisos',
      'Instalación sencilla sin herramientas especiales',
      'Ideal para reformas rápidas',
      'Fácil mantenimiento con fregona húmeda',
    ],
    bestFor: ['Presupuestos ajustados', 'Pisos de alquiler', 'Reformas express', 'Habitaciones secundarias'],
    hasPage: true,
    image: '/images/products/mipoldis.webp',
  },
  {
    slug: 'lundis',
    name: 'Lundis',
    brand: 'Disstands',
    categorySlug: 'domestico',
    description:
      'Lundis es un suelo PVC de inspiración escandinava con acabados en tonos claros y naturales. Su diseño nórdico aporta luminosidad y amplitud visual a cualquier estancia. Fabricado con materiales de alta calidad, ofrece una capa de uso de 0,25 mm que garantiza durabilidad en uso doméstico normal. Su textura superficial reproduce fielmente los poros y vetas de la madera de abedul, roble blanqueado y fresno.',
    shortDescription: 'Suelo PVC estilo nórdico en tonos claros. Aporta luminosidad y amplitud a viviendas.',
    priceDisplay: 'Desde 9,80 €/m²',
    pricePerSqm: 9.80,
    specs: {
      thickness: '2,5 mm',
      wearLayer: '0,25 mm',
      width: '2 m / 4 m',
      rollLength: '25 m',
      fireRating: 'Bfl-s1',
      acoustics: '5 dB',
    },
    features: [
      'Estilo escandinavo en tonos claros',
      'Textura madera realista (abedul, roble, fresno)',
      'Aporta luminosidad y sensación de amplitud',
      'Capa de uso de 0,25 mm',
      'Aislamiento acústico de 5 dB',
      'Compatible con suelo radiante',
    ],
    bestFor: ['Viviendas de estilo nórdico', 'Habitaciones pequeñas', 'Salones luminosos', 'Dormitorios minimalistas'],
    hasPage: true,
    image: '/images/products/lundis.webp',
  },
  {
    slug: 'muraldis',
    name: 'Muraldis',
    brand: 'Disstands',
    categorySlug: 'domestico',
    description:
      'Muraldis es un revestimiento de PVC flexible que puede utilizarse tanto en suelos como en paredes. Su versatilidad lo convierte en una solución decorativa integral para baños, cocinas y espacios comerciales. Disponible en diseños de piedra, ladrillo, madera y acabados decorativos modernos. Su superficie impermeable y antibacteriana lo hace especialmente indicado para zonas húmedas donde se busca una renovación completa sin obras.',
    shortDescription: 'PVC flexible para suelos y paredes. Solución decorativa integral para baños y cocinas.',
    priceDisplay: 'Desde 12,50 €/m²',
    pricePerSqm: 12.50,
    specs: {
      thickness: '2,0 mm',
      wearLayer: '0,20 mm',
      width: '2 m',
      rollLength: '20 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R10',
    },
    features: [
      'Apto para suelos y paredes',
      'Diseños piedra, ladrillo, madera y decorativos',
      'Superficie impermeable y antibacteriana',
      'Ideal para renovación integral de baños',
      'Instalación sencilla con adhesivo',
      'Fácil de cortar y adaptar a cualquier espacio',
    ],
    bestFor: ['Revestimiento integral de baños', 'Paredes y suelos de cocinas', 'Espacios comerciales', 'Reformas sin obras'],
    hasPage: true,
    image: '/images/products/muraldis.webp',
  },
  {
    slug: 'twisdis',
    name: 'Twisdis',
    brand: 'Disstands',
    categorySlug: 'domestico',
    description:
      'Twisdis es un suelo PVC con diseños geométricos y contemporáneos que aporta personalidad a cualquier estancia. Su colección incluye patrones hexagonales, chevron, espiga y diseños abstractos en combinaciones de colores modernas. Es la elección perfecta para quienes buscan un suelo con carácter y diferente a los acabados convencionales de madera o piedra. Combina estética con la funcionalidad del PVC: resistente al agua, fácil de limpiar y duradero.',
    shortDescription: 'Suelo PVC con diseños geométricos modernos. Patrones hexagonales, chevron y espiga.',
    priceDisplay: 'Desde 10,90 €/m²',
    pricePerSqm: 10.90,
    specs: {
      thickness: '2,5 mm',
      wearLayer: '0,25 mm',
      width: '2 m / 4 m',
      rollLength: '20 m',
      fireRating: 'Bfl-s1',
    },
    features: [
      'Diseños geométricos y contemporáneos',
      'Patrones hexagonales, chevron y espiga',
      'Combinaciones de colores modernas',
      '100% impermeable',
      'Fácil de limpiar y mantener',
      'Aporta personalidad y carácter al espacio',
    ],
    bestFor: ['Viviendas de diseño contemporáneo', 'Halls y recibidores', 'Cocinas modernas', 'Espacios comerciales creativos'],
    hasPage: true,
    image: '/images/products/twisdis.webp',
  },
  {
    slug: 'marmoredis',
    name: 'Marmoredis',
    brand: 'Disstands',
    categorySlug: 'domestico',
    description:
      'Marmoredis reproduce la elegancia del mármol natural en un suelo PVC accesible y práctico. Disponible en mármol blanco Carrara, gris Calacatta, negro Marquina y tonos travertino. Su superficie con brillo sutil imita las vetas y la profundidad del mármol auténtico. A diferencia del mármol real, es cálido al tacto, no se raya ni se mancha, y su mantenimiento es mínimo. Ideal para crear ambientes lujosos en salones, recibidores y baños de gama alta.',
    shortDescription: 'Suelo PVC efecto mármol de alta definición. Elegancia de Carrara, Calacatta y Marquina.',
    priceDisplay: 'Desde 11,80 €/m²',
    pricePerSqm: 11.80,
    specs: {
      thickness: '2,8 mm',
      wearLayer: '0,30 mm',
      width: '2 m / 4 m',
      rollLength: '20 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R9',
    },
    features: [
      'Efecto mármol Carrara, Calacatta, Marquina, travertino',
      'Brillo sutil que imita mármol real',
      'Cálido al tacto — no frío como mármol natural',
      'Resistente a manchas y arañazos',
      'Sin mantenimiento especial (no necesita pulir)',
      'Capa de uso reforzada de 0,30 mm',
    ],
    bestFor: ['Salones de gama alta', 'Recibidores elegantes', 'Baños de diseño', 'Viviendas de lujo accesible'],
    hasPage: true,
    image: '/images/products/marmoredis.webp',
  },
  {
    slug: 'oro-y-plata-pvc',
    name: 'Oro y Plata PVC',
    brand: 'Disstands',
    categorySlug: 'domestico',
    description:
      'Oro y Plata PVC es un suelo vinílico decorativo con acabados metalizados en tonos dorados y plateados. Diseñado para espacios que buscan un impacto visual único: tiendas de moda, showrooms, estudios de diseño o viviendas con personalidad. Su superficie con efecto metalizado refleja la luz de forma sutil, creando ambientes sofisticados y exclusivos. Combina la espectacularidad visual con la funcionalidad práctica del PVC.',
    shortDescription: 'Suelo PVC con acabados metalizados dorados y plateados. Impacto visual para espacios exclusivos.',
    priceDisplay: 'Desde 14,50 €/m²',
    pricePerSqm: 14.50,
    specs: {
      thickness: '2,0 mm',
      wearLayer: '0,20 mm',
      width: '2 m',
      rollLength: '20 m',
      fireRating: 'Bfl-s1',
    },
    features: [
      'Acabados metalizados dorados y plateados',
      'Efecto visual único y exclusivo',
      'Reflejo sutil de la luz',
      'Resistente al tráfico moderado',
      'Fácil instalación y mantenimiento',
      'Ideal para espacios de diseño',
    ],
    bestFor: ['Tiendas de moda', 'Showrooms y galerías', 'Estudios de diseño', 'Viviendas con estilo propio'],
    hasPage: true,
    image: '/images/products/oro-y-plata-pvc.webp',
  },
  {
    slug: 'flocado',
    name: 'Flocado',
    brand: 'Disstands',
    categorySlug: 'domestico',
    description:
      'El Flocado es un suelo PVC con superficie textil que ofrece una sensación de confort excepcional bajo los pies. Su acabado aterciopelado combina la suavidad de una moqueta con la resistencia e impermeabilidad del PVC. Es ideal para dormitorios, vestidores y zonas de relax donde se busca la máxima comodidad. A diferencia de las moquetas tradicionales, no acumula ácaros ni alérgenos, siendo apto para personas alérgicas.',
    shortDescription: 'Suelo PVC con superficie textil aterciopelada. Confort de moqueta sin alérgenos.',
    priceDisplay: 'Desde 13,20 €/m²',
    pricePerSqm: 13.20,
    specs: {
      thickness: '3,5 mm',
      wearLayer: '0,20 mm',
      width: '2 m',
      rollLength: '20 m',
      fireRating: 'Cfl-s1',
      acoustics: '18 dB',
    },
    features: [
      'Superficie textil aterciopelada',
      'Aislamiento acústico excepcional de 18 dB',
      'No acumula ácaros ni alérgenos',
      'Confort de moqueta con resistencia de PVC',
      'Ideal para dormitorios y zonas de relax',
      'Fácil de limpiar con aspiradora',
    ],
    bestFor: ['Dormitorios', 'Vestidores', 'Zonas de relax', 'Hogares con personas alérgicas'],
    hasPage: true,
    image: '/images/products/flocado.webp',
  },
  {
    slug: 'imitacion-cemento',
    name: 'Imitación Cemento',
    brand: 'Disstands',
    categorySlug: 'domestico',
    description:
      'Suelo PVC con acabado efecto cemento y microcemento, una tendencia decorativa en auge. Reproduce fielmente el aspecto del hormigón pulido, el microcemento y el cemento alisado en tonos grises claros, medios y oscuros. Aporta un look industrial y moderno sin la complejidad de aplicar microcemento real. Ideal para lofts, viviendas de estilo industrial y espacios contemporáneos que buscan superficies continuas de aspecto minimalista.',
    shortDescription: 'Suelo PVC efecto cemento y microcemento. Look industrial sin obras para viviendas modernas.',
    priceDisplay: 'Desde 10,50 €/m²',
    pricePerSqm: 10.50,
    specs: {
      thickness: '2,5 mm',
      wearLayer: '0,25 mm',
      width: '2 m / 4 m',
      rollLength: '25 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R10',
    },
    features: [
      'Efecto cemento, microcemento y hormigón pulido',
      'Tonos grises claros, medios y oscuros',
      'Aspecto continuo sin juntas visibles',
      'Look industrial moderno',
      'Resistente y fácil de mantener',
      'Sin la complejidad de aplicar microcemento real',
    ],
    bestFor: ['Lofts y viviendas industriales', 'Salones contemporáneos', 'Cocinas minimalistas', 'Espacios comerciales modernos'],
    hasPage: true,
    image: '/images/products/imitacion-cemento.webp',
  },
  {
    slug: 'pvc-pradis',
    name: 'PVC Pradis',
    brand: 'Disstands',
    categorySlug: 'domestico',
    description:
      'PVC Pradis es un suelo vinílico premium de uso doméstico con la capa de uso más gruesa de la gama residencial. Su estructura reforzada de 0,40 mm de capa de uso garantiza la máxima durabilidad incluso en los hogares más exigentes. Disponible en diseños de madera premium con textura sincronizada (registro en relieve), ofrece un realismo visual y táctil superior. Incluye tratamiento antibacteriano y resistencia reforzada a las manchas.',
    shortDescription: 'Suelo PVC premium doméstico con capa de uso de 0,40 mm. Máxima durabilidad residencial.',
    priceDisplay: 'Desde 15,90 €/m²',
    pricePerSqm: 15.90,
    specs: {
      thickness: '3,5 mm',
      wearLayer: '0,40 mm',
      width: '2 m / 4 m',
      rollLength: '20 m',
      fireRating: 'Bfl-s1',
      acoustics: '12 dB',
      slipResistance: 'R10',
    },
    features: [
      'Capa de uso premium de 0,40 mm',
      'Textura sincronizada (registro en relieve)',
      'Tratamiento antibacteriano permanente',
      'Aislamiento acústico de 12 dB',
      'Máxima durabilidad residencial',
      'Diseños de madera premium ultra-realistas',
    ],
    bestFor: ['Viviendas de gama alta', 'Hogares con máxima exigencia', 'Salones y dormitorios principales', 'Reformas de calidad premium'],
    hasPage: true,
    image: '/images/products/pvc-pradis.webp',
  },

  // ── OFICINAS (4 productos) ─────────────────────────────────────────────────
  {
    slug: 'loseta-oficina',
    name: 'Loseta Oficina',
    brand: 'Disstands',
    categorySlug: 'oficinas',
    description:
      'Loseta Oficina es un pavimento modular de PVC en formato loseta diseñado para entornos de trabajo. Su sistema de instalación permite cubrir grandes superficies de oficina de forma rápida y con mínima interrupción de la actividad laboral. Disponible en diseños textiles, madera y hormigón que se adaptan a la estética profesional. Las losetas dañadas se pueden reemplazar individualmente sin necesidad de sustituir todo el suelo, lo que reduce costes de mantenimiento a largo plazo.',
    shortDescription: 'Loseta PVC modular para oficinas. Instalación rápida y reposición individual de piezas.',
    priceDisplay: 'Desde 14,50 €/m²',
    pricePerSqm: 14.50,
    specs: {
      thickness: '5 mm',
      wearLayer: '0,55 mm',
      format: '60,96 cm x 60,96 cm',
      fireRating: 'Bfl-s1',
      acoustics: '10 dB',
      slipResistance: 'R10',
    },
    features: [
      'Formato modular 60,96 x 60,96 cm',
      'Reposición individual de piezas dañadas',
      'Diseños textiles, madera y hormigón',
      'Aislamiento acústico de 10 dB',
      'Instalación sin interrumpir la actividad',
      'Resistente a sillas con ruedas',
    ],
    bestFor: ['Oficinas de planta abierta', 'Despachos y salas de reuniones', 'Espacios de coworking', 'Recepciones corporativas'],
    hasPage: true,
    image: '/images/products/loseta-oficina.webp',
  },
  {
    slug: 'loseta-oficina-premium',
    name: 'Loseta Oficina Premium',
    brand: 'Disstands',
    categorySlug: 'oficinas',
    description:
      'Loseta Oficina Premium es la versión de gama alta de nuestro pavimento modular para oficinas. Con una capa de uso de 0,70 mm y tratamiento PUR (poliuretano reforzado), ofrece la máxima resistencia al tráfico intenso de oficinas corporativas. Su diseño incluye opciones de combinación de colores para crear zonas diferenciadas: áreas de trabajo, pasillos y zonas comunes. Excelente comportamiento acústico con reducción de hasta 18 dB.',
    shortDescription: 'Loseta PVC premium para oficinas corporativas. Capa de uso de 0,70 mm y tratamiento PUR.',
    priceDisplay: 'Desde 22,00 €/m²',
    pricePerSqm: 22.00,
    specs: {
      thickness: '6 mm',
      wearLayer: '0,70 mm',
      format: '60,96 cm x 60,96 cm',
      fireRating: 'Bfl-s1',
      acoustics: '18 dB',
      slipResistance: 'R10',
    },
    features: [
      'Capa de uso de 0,70 mm con tratamiento PUR',
      'Aislamiento acústico superior de 18 dB',
      'Opciones de combinación por zonas',
      'Máxima resistencia al tráfico intenso',
      'Resistente a sillas con ruedas y mobiliario pesado',
      'Certificación medioambiental',
    ],
    bestFor: ['Oficinas corporativas de alto tráfico', 'Sedes de grandes empresas', 'Zonas de representación', 'Edificios de oficinas de clase A'],
    hasPage: true,
    image: '/images/products/loseta-oficina-premium.webp',
  },
  {
    slug: 'pvc-rollo-oficina',
    name: 'PVC Rollo Oficina',
    brand: 'Disstands',
    categorySlug: 'oficinas',
    description:
      'PVC Rollo Oficina es un pavimento continuo en rollo diseñado para oficinas que buscan una superficie sin juntas. Su instalación de pared a pared crea un acabado limpio y profesional que facilita la limpieza y el mantenimiento. Disponible en diseños de madera, textil y hormigón. Su capa de uso de 0,40 mm resiste el desgaste diario de sillas con ruedas, tráfico de empleados y limpieza industrial.',
    shortDescription: 'Suelo PVC en rollo continuo para oficinas. Superficie sin juntas, limpia y profesional.',
    priceDisplay: 'Desde 12,80 €/m²',
    pricePerSqm: 12.80,
    specs: {
      thickness: '3 mm',
      wearLayer: '0,40 mm',
      width: '2 m',
      rollLength: '25 m',
      fireRating: 'Bfl-s1',
      acoustics: '8 dB',
      slipResistance: 'R9',
    },
    features: [
      'Superficie continua sin juntas',
      'Capa de uso de 0,40 mm',
      'Resistente a sillas con ruedas',
      'Diseños madera, textil y hormigón',
      'Aislamiento acústico de 8 dB',
      'Limpieza industrial compatible',
    ],
    bestFor: ['Oficinas que buscan suelo continuo', 'Espacios de trabajo de superficie media', 'Despachos profesionales', 'Clínicas y consultas'],
    hasPage: true,
    image: '/images/products/pvc-rollo-oficina.webp',
  },
  {
    slug: 'pvc-click-oficina',
    name: 'PVC Click Oficina',
    brand: 'Disstands',
    categorySlug: 'oficinas',
    description:
      'PVC Click Oficina es un suelo vinílico con sistema de clic diseñado para instalación flotante en entornos de trabajo. Su núcleo rígido y sistema de ensamblaje de precisión permiten una instalación rápida sin adhesivos, minimizando el tiempo de inactividad de la oficina. Compatible con suelo técnico elevado. Su capa de uso de 0,55 mm ofrece alta resistencia al tráfico comercial y a las sillas de oficina.',
    shortDescription: 'Suelo vinílico click para oficinas. Instalación flotante sin adhesivos, compatible con suelo técnico.',
    priceDisplay: 'Desde 19,50 €/m²',
    pricePerSqm: 19.50,
    specs: {
      thickness: '5 mm',
      wearLayer: '0,55 mm',
      format: '1220 mm x 180 mm',
      fireRating: 'Bfl-s1',
      acoustics: '12 dB',
      slipResistance: 'R10',
    },
    features: [
      'Sistema click de instalación flotante',
      'Sin adhesivos — mínimo tiempo de inactividad',
      'Compatible con suelo técnico elevado',
      'Capa de uso de 0,55 mm',
      'Aislamiento acústico de 12 dB',
      'Resistente a sillas con ruedas',
    ],
    bestFor: ['Oficinas con suelo técnico', 'Reformas con mínimo tiempo de parada', 'Oficinas de alquiler', 'Espacios de coworking'],
    hasPage: true,
    image: '/images/products/pvc-click-oficina.webp',
  },

  // ── COLEGIOS (4 productos) ─────────────────────────────────────────────────
  {
    slug: 'pvc-aula',
    name: 'PVC Aula',
    brand: 'Disstands',
    categorySlug: 'colegios',
    description:
      'PVC Aula es un pavimento específico para aulas escolares que combina resistencia extrema con seguridad infantil. Su superficie antideslizante certificada R10 previene caídas, mientras que su estructura compacta resiste el desgaste de sillas, mesas y el tráfico constante de alumnos. Disponible en colores vivos y neutros que favorecen el entorno de aprendizaje. Fácil de limpiar y desinfectar, cumple con los estándares de higiene escolar.',
    shortDescription: 'Suelo PVC para aulas escolares. Antideslizante, resistente y fácil de desinfectar.',
    priceDisplay: 'Desde 13,50 €/m²',
    pricePerSqm: 13.50,
    specs: {
      thickness: '2,5 mm',
      wearLayer: '0,40 mm',
      width: '2 m',
      rollLength: '25 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R10',
      acoustics: '6 dB',
    },
    features: [
      'Superficie antideslizante certificada R10',
      'Capa de uso de 0,40 mm para alta durabilidad',
      'Colores vivos y neutros para entornos educativos',
      'Fácil de limpiar y desinfectar',
      'Clasificación al fuego Bfl-s1',
      'Resistente al mobiliario escolar',
    ],
    bestFor: ['Aulas de infantil y primaria', 'Bibliotecas escolares', 'Salas de profesores', 'Guarderías'],
    hasPage: true,
    image: '/images/products/pvc-aula.webp',
  },
  {
    slug: 'pvc-deportivo',
    name: 'PVC Deportivo',
    brand: 'Disstands',
    categorySlug: 'colegios',
    description:
      'PVC Deportivo es un pavimento especializado para gimnasios, pabellones deportivos y salas de actividad física en centros educativos. Su superficie proporciona la tracción necesaria para actividades deportivas, mientras que su estructura de espuma amortiguadora absorbe impactos y reduce el riesgo de lesiones. Cumple con las normativas deportivas para uso escolar. Disponible en colores para marcar líneas de juego y zonas deportivas.',
    shortDescription: 'Suelo PVC deportivo para gimnasios escolares. Amortiguación de impactos y tracción deportiva.',
    priceDisplay: 'Desde 18,00 €/m²',
    pricePerSqm: 18.00,
    specs: {
      thickness: '6,5 mm',
      wearLayer: '0,65 mm',
      width: '2 m',
      rollLength: '15 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R10',
      acoustics: '12 dB',
    },
    features: [
      'Estructura con espuma amortiguadora de impactos',
      'Tracción adecuada para actividad deportiva',
      'Cumple normativas deportivas escolares',
      'Colores para líneas de juego y zonas',
      'Capa de uso de 0,65 mm de alta resistencia',
      'Fácil mantenimiento con limpieza mecánica',
    ],
    bestFor: ['Gimnasios escolares', 'Pabellones deportivos', 'Salas de actividades', 'Patios cubiertos'],
    hasPage: true,
    image: '/images/products/pvc-deportivo.webp',
  },
  {
    slug: 'pvc-antiestatico',
    name: 'PVC Antiestático',
    brand: 'Disstands',
    categorySlug: 'colegios',
    description:
      'PVC Antiestático es un pavimento con propiedades de disipación de cargas electrostáticas, diseñado para aulas de informática, laboratorios de tecnología y salas de servidores en centros educativos. Protege los equipos electrónicos de descargas estáticas que pueden dañar componentes sensibles. Cumple con la norma EN 1081 para resistividad eléctrica. También es apto para talleres de electrónica y salas técnicas.',
    shortDescription: 'Suelo PVC antiestático para aulas de informática. Protege equipos electrónicos de descargas.',
    priceDisplay: 'Desde 21,00 €/m²',
    pricePerSqm: 21.00,
    specs: {
      thickness: '2,5 mm',
      wearLayer: '0,40 mm',
      width: '2 m',
      rollLength: '20 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R9',
    },
    features: [
      'Disipación de cargas electrostáticas',
      'Cumple norma EN 1081 de resistividad eléctrica',
      'Protege equipos electrónicos sensibles',
      'Capa de uso de 0,40 mm',
      'Clasificación al fuego Bfl-s1',
      'Instalación con adhesivo conductivo',
    ],
    bestFor: ['Aulas de informática', 'Laboratorios de tecnología', 'Salas de servidores escolares', 'Talleres de electrónica'],
    hasPage: true,
    image: '/images/products/pvc-antiestatico.webp',
  },
  {
    slug: 'pvc-compacto-educativo',
    name: 'PVC Compacto Educativo',
    brand: 'Disstands',
    categorySlug: 'colegios',
    description:
      'PVC Compacto Educativo es un pavimento de alta densidad diseñado para las zonas de mayor tránsito de centros educativos: pasillos, escaleras, comedores y halls de entrada. Su estructura compacta y homogénea ofrece la máxima resistencia al desgaste en entornos con cientos de alumnos transitando diariamente. Su superficie es fácil de desinfectar y cumple con las normativas de higiene y seguridad escolar.',
    shortDescription: 'Suelo PVC compacto para pasillos y zonas comunes de colegios. Máxima resistencia al tráfico.',
    priceDisplay: 'Desde 16,50 €/m²',
    pricePerSqm: 16.50,
    specs: {
      thickness: '2,0 mm',
      wearLayer: '0,70 mm',
      width: '2 m',
      rollLength: '20 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R10',
    },
    features: [
      'Alta densidad para tráfico intenso escolar',
      'Capa de uso de 0,70 mm',
      'Superficie fácil de desinfectar',
      'Apto para pasillos, escaleras y comedores',
      'Antideslizante certificado R10',
      'Cumple normativas de seguridad escolar',
    ],
    bestFor: ['Pasillos de colegios', 'Comedores escolares', 'Halls de entrada', 'Escaleras y zonas de paso'],
    hasPage: true,
    image: '/images/products/pvc-compacto-educativo.webp',
  },

  // ── HOSPITAL (4 productos) ─────────────────────────────────────────────────
  {
    slug: 'fordis-heterogeneo',
    name: 'Fordis (Heterogéneo)',
    brand: 'Disstands',
    categorySlug: 'hospital',
    description:
      'Fordis Heterogéneo es un pavimento sanitario multicapa diseñado para hospitales, clínicas y residencias de mayores. Su superficie con tratamiento bacteriostático permanente inhibe la proliferación de bacterias, garantizando un entorno higiénico. Su estructura heterogénea combina una capa de uso resistente con un dorso de espuma que proporciona confort y reduce la fatiga del personal sanitario que trabaja de pie durante largas jornadas. Soldadura en caliente para uniones herméticas.',
    shortDescription: 'Pavimento sanitario heterogéneo para hospitales. Tratamiento bacteriostático y confort para el personal.',
    priceDisplay: 'Desde 19,50 €/m²',
    pricePerSqm: 19.50,
    specs: {
      thickness: '3,4 mm',
      wearLayer: '0,65 mm',
      width: '2 m',
      rollLength: '20 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R10',
      acoustics: '15 dB',
    },
    features: [
      'Tratamiento bacteriostático permanente',
      'Soldadura en caliente para uniones herméticas',
      'Base de espuma para confort del personal',
      'Aislamiento acústico de 15 dB',
      'Capa de uso de 0,65 mm',
      'Fácil desinfección con productos hospitalarios',
    ],
    bestFor: ['Hospitales y clínicas', 'Residencias de mayores', 'Consultas médicas', 'Centros de salud'],
    hasPage: true,
    image: '/images/products/fordis-heterogeneo.webp',
  },
  {
    slug: 'fordis-homogeneo',
    name: 'Fordis (Homogéneo)',
    brand: 'Disstands',
    categorySlug: 'hospital',
    description:
      'Fordis Homogéneo es un pavimento sanitario de estructura uniforme que ofrece la máxima durabilidad en entornos hospitalarios. A diferencia de la versión heterogénea, su composición idéntica en todo su espesor permite renovar la superficie mediante pulido, prolongando su vida útil indefinidamente. Es la elección preferida para quirófanos, UCI, salas blancas y zonas de alto riesgo donde la higiene absoluta es imprescindible. Compatible con protocolos de desinfección extrema.',
    shortDescription: 'Pavimento sanitario homogéneo para quirófanos y UCI. Renovable por pulido, vida útil ilimitada.',
    priceDisplay: 'Desde 24,00 €/m²',
    pricePerSqm: 24.00,
    specs: {
      thickness: '2,0 mm',
      wearLayer: 'Todo el espesor',
      width: '2 m',
      rollLength: '20 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R10',
    },
    features: [
      'Estructura homogénea en todo el espesor',
      'Renovable por pulido — vida útil ilimitada',
      'Compatible con desinfección extrema',
      'Soldadura en caliente para estanqueidad total',
      'Superficie antimicrobiana certificada',
      'Apto para quirófanos y salas blancas',
    ],
    bestFor: ['Quirófanos', 'UCI y zonas críticas', 'Salas blancas', 'Laboratorios hospitalarios'],
    hasPage: true,
    image: '/images/products/fordis-homogeneo.webp',
  },
  {
    slug: 'pvc-antiestatico-hospital',
    name: 'PVC Antiestático Hospital',
    brand: 'Disstands',
    categorySlug: 'hospital',
    description:
      'PVC Antiestático Hospital es un pavimento con propiedades de disipación electrostática certificada, diseñado para proteger equipos médicos sensibles como resonancias magnéticas, equipos de rayos X y monitores de UCI. Cumple con la norma EN 1081 para pavimentos disipativos en entornos sanitarios. Su superficie bacteriostática garantiza la higiene necesaria en hospitales. Instalación con adhesivo conductivo y banda de cobre para conexión a tierra.',
    shortDescription: 'Suelo PVC antiestático para hospitales. Protege equipos médicos sensibles de descargas.',
    priceDisplay: 'Desde 28,00 €/m²',
    pricePerSqm: 28.00,
    specs: {
      thickness: '2,5 mm',
      wearLayer: '0,65 mm',
      width: '2 m',
      rollLength: '20 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R10',
    },
    features: [
      'Disipación electrostática certificada EN 1081',
      'Protege equipos médicos sensibles',
      'Superficie bacteriostática',
      'Instalación con banda de cobre a tierra',
      'Capa de uso de 0,65 mm',
      'Compatible con protocolos de desinfección hospitalaria',
    ],
    bestFor: ['Salas de resonancia magnética', 'Salas de rayos X', 'UCI con equipamiento sensible', 'Laboratorios de análisis'],
    hasPage: true,
    image: '/images/products/pvc-antiestatico-hospital.webp',
  },
  {
    slug: 'pvc-conductivo',
    name: 'PVC Conductivo',
    brand: 'Disstands',
    categorySlug: 'hospital',
    description:
      'PVC Conductivo es un pavimento de máxima conductividad eléctrica para quirófanos con gases anestésicos inflamables y zonas ATEX en hospitales. Cumple con la normativa más estricta para entornos donde la acumulación de electricidad estática puede provocar explosiones o incendios. Su resistividad eléctrica es inferior a 10⁶ ohmios, garantizando la disipación instantánea de cualquier carga estática. Certificado para uso en quirófanos de última generación.',
    shortDescription: 'Suelo PVC conductivo para quirófanos con gases anestésicos. Máxima seguridad antiexplosión.',
    priceDisplay: 'Desde 32,00 €/m²',
    pricePerSqm: 32.00,
    specs: {
      thickness: '2,0 mm',
      wearLayer: '0,65 mm',
      width: '2 m',
      rollLength: '20 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R10',
    },
    features: [
      'Resistividad inferior a 10⁶ ohmios',
      'Apto para quirófanos con gases inflamables',
      'Cumple normativa ATEX',
      'Disipación instantánea de cargas estáticas',
      'Superficie antimicrobiana',
      'Certificado para quirófanos de última generación',
    ],
    bestFor: ['Quirófanos con gases anestésicos', 'Zonas ATEX hospitalarias', 'Salas de operaciones especiales', 'Áreas de alto riesgo'],
    hasPage: true,
    image: '/images/products/pvc-conductivo.webp',
  },

  // ── OTROS (4 productos) ────────────────────────────────────────────────────
  {
    slug: 'pvc-transporte',
    name: 'PVC Transporte',
    brand: 'Disstands',
    categorySlug: 'otros',
    description:
      'PVC Transporte es un pavimento especializado para vehículos de transporte público y privado: autobuses, trenes, tranvías y autocares. Su superficie texturizada antideslizante cumple con las normativas de seguridad del sector transporte. Su composición es extremadamente resistente a la abrasión, los productos de limpieza industrial y las condiciones climáticas extremas. Fabricado según normativa ferroviaria EN 45545 de reacción al fuego.',
    shortDescription: 'Suelo PVC para autobuses y trenes. Antideslizante y certificado EN 45545 para transporte.',
    priceDisplay: 'Consultar',
    specs: {
      thickness: '2,0 mm',
      wearLayer: '0,70 mm',
      width: '2 m',
      rollLength: '20 m',
      fireRating: 'EN 45545',
      slipResistance: 'R11',
    },
    features: [
      'Certificado EN 45545 para transporte',
      'Superficie antideslizante R11',
      'Resistente a limpieza industrial',
      'Apto para condiciones climáticas extremas',
      'Capa de uso de 0,70 mm ultra-resistente',
      'Textura antideslizante para pasajeros de pie',
    ],
    bestFor: ['Autobuses urbanos', 'Trenes y tranvías', 'Autocares de largo recorrido', 'Vehículos de transporte especial'],
    hasPage: true,
    image: '/images/products/pvc-transporte.webp',
  },
  {
    slug: 'pvc-nautico',
    name: 'PVC Náutico',
    brand: 'Disstands',
    categorySlug: 'otros',
    description:
      'PVC Náutico es un pavimento diseñado específicamente para embarcaciones: yates, veleros, lanchas y barcos de recreo. Su composición resiste la exposición continua al agua salada, la radiación UV y los cambios extremos de temperatura. Su superficie con textura tipo teca proporciona un agarre excepcional incluso con el suelo mojado. Ligero y fácil de instalar, se adapta a las curvas y formas irregulares de las cubiertas de barcos.',
    shortDescription: 'Suelo PVC para embarcaciones y yates. Resistente a agua salada y UV con textura antideslizante.',
    priceDisplay: 'Consultar',
    specs: {
      thickness: '3,0 mm',
      wearLayer: '0,50 mm',
      width: '1,5 m',
      rollLength: '15 m',
      slipResistance: 'R11',
    },
    features: [
      'Resistente a agua salada y radiación UV',
      'Textura tipo teca antideslizante',
      'Ligero y flexible para cubiertas',
      'Se adapta a formas irregulares',
      'Resistente a cambios extremos de temperatura',
      'Fácil mantenimiento en ambiente marino',
    ],
    bestFor: ['Yates y veleros', 'Lanchas y barcos de recreo', 'Cubiertas y zonas húmedas', 'Embarcaciones comerciales'],
    hasPage: true,
    image: '/images/products/pvc-nautico.webp',
  },
  {
    slug: 'pvc-exterior',
    name: 'PVC Exterior',
    brand: 'Disstands',
    categorySlug: 'otros',
    description:
      'PVC Exterior es un pavimento diseñado para instalación en zonas exteriores cubiertas y semicubiertas: terrazas techadas, porches, pérgolas y zonas de piscina cubiertas. Su composición resiste la exposición a la lluvia, la humedad ambiental elevada y los cambios de temperatura estacionales. Su superficie antideslizante R11 garantiza la seguridad en condiciones húmedas. No se decolora con la exposición a la luz solar indirecta.',
    shortDescription: 'Suelo PVC para terrazas y porches cubiertos. Resistente a intemperie con antideslizante R11.',
    priceDisplay: 'Desde 16,00 €/m²',
    pricePerSqm: 16.00,
    specs: {
      thickness: '3,5 mm',
      wearLayer: '0,50 mm',
      width: '2 m',
      rollLength: '15 m',
      fireRating: 'Bfl-s1',
      slipResistance: 'R11',
    },
    features: [
      'Resistente a lluvia y humedad ambiental',
      'Antideslizante certificado R11',
      'No se decolora con luz solar indirecta',
      'Apto para zonas de piscina cubiertas',
      'Resistente a cambios de temperatura',
      'Capa de uso de 0,50 mm',
    ],
    bestFor: ['Terrazas techadas', 'Porches y pérgolas', 'Zonas de piscina cubiertas', 'Balcones y galerías'],
    hasPage: true,
    image: '/images/products/pvc-exterior.webp',
  },
  {
    slug: 'pvc-garaje',
    name: 'PVC Garaje',
    brand: 'Disstands',
    categorySlug: 'otros',
    description:
      'PVC Garaje es un pavimento de alta resistencia diseñado para garajes privados, talleres y zonas de estacionamiento. Su estructura compacta y superficie texturizada soportan el peso de vehículos, resisten las manchas de aceite, gasolina y líquidos de freno, y proporcionan un agarre excepcional para peatones y neumáticos. Disponible en formato loseta para instalación modular sin adhesivos, facilitando la limpieza y el acceso a las instalaciones bajo el suelo.',
    shortDescription: 'Suelo PVC para garajes y talleres. Resiste vehículos, aceites y productos químicos.',
    priceDisplay: 'Desde 18,50 €/m²',
    pricePerSqm: 18.50,
    specs: {
      thickness: '7 mm',
      wearLayer: '0,70 mm',
      format: '50 cm x 50 cm',
      slipResistance: 'R11',
    },
    features: [
      'Soporta el peso de vehículos',
      'Resistente a aceite, gasolina y líquidos de freno',
      'Formato loseta modular sin adhesivos',
      'Superficie antideslizante R11',
      'Desmontable para acceso bajo el suelo',
      'Fácil limpieza con manguera o hidrolimpiadora',
    ],
    bestFor: ['Garajes privados', 'Talleres mecánicos', 'Zonas de estacionamiento', 'Espacios de almacenamiento'],
    hasPage: true,
    image: '/images/products/pvc-garaje.webp',
  },
];

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategorySlug(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
