// src/data/products.ts
// Catálogo de productos de suelos PVC para ventapvc.com

export interface Product {
  slug: string;
  name: string;
  description: string;
  priceRange: {
    min: number;
    max: number;
  };
  features: string[];
  bestFor: string[];
  image: string;
  thicknessOptions: string[];
}

export const products: Product[] = [
  {
    slug: 'vinilico-click',
    name: 'Suelo Vinílico Click',
    description:
      'El suelo vinílico click es la solución ideal para quienes buscan una instalación rápida y sin complicaciones. Gracias a su sistema de clic machihembrado, las lamas se ensamblan entre sí sin necesidad de adhesivos ni herramientas especiales. Puedes instalarlo directamente sobre el pavimento existente, lo que reduce significativamente el tiempo y el coste de la reforma. Su acabado imita fielmente la madera natural, la piedra o el cemento, ofreciendo un resultado estético de alta gama a una fracción del precio. Además, su capa de uso reforzada garantiza una gran resistencia al desgaste, las manchas y los arañazos del día a día. Es compatible con suelo radiante y su estructura multicapa proporciona un excelente aislamiento acústico y térmico.',
    priceRange: {
      min: 15.99,
      max: 34.99,
    },
    features: [
      'Instalación flotante sin adhesivos mediante sistema click',
      'Compatible con suelo radiante hasta 28 °C',
      'Capa de uso de 0,3 mm a 0,55 mm según modelo',
      'Resistente al agua — apto para cocinas y baños',
      'Aislamiento acústico integrado de hasta 19 dB',
      'Clasificación de uso 23/33 (doméstico intensivo / comercial moderado)',
      'Tratamiento superficial anti-arañazos y anti-manchas',
      'Instalación sobre pavimento existente sin obras',
      'Pisada cálida y confortable gracias a la base de espuma',
      'Amplia gama de acabados: madera, piedra, cemento y hormigón',
    ],
    bestFor: [
      'Reformas rápidas sin obras',
      'Viviendas con suelo radiante',
      'Salones y dormitorios de uso intensivo',
      'Pisos de alquiler que necesitan suelo nuevo sin complicaciones',
      'Locales comerciales con tráfico moderado',
      'Hogares con mascotas y niños',
    ],
    image: '/images/products/vinilico-click.webp',
    thicknessOptions: ['4 mm', '4,5 mm', '5 mm', '5,5 mm', '6 mm', '7 mm', '8 mm'],
  },
  {
    slug: 'rollo',
    name: 'Suelo PVC en Rollo',
    description:
      'El suelo PVC en rollo es la opción más económica y versátil del mercado. Se suministra en rollos de 2, 3 o 4 metros de ancho, lo que permite cubrir grandes superficies con un mínimo de juntas. Su instalación es extremadamente sencilla: basta con desenrollar, recortar a medida y fijar con adhesivo de contacto o cinta de doble cara. Es la solución preferida para renovaciones rápidas de cocinas, baños, locales comerciales y espacios de alto tránsito. Su superficie es 100 % impermeable, higiénica y muy fácil de limpiar. Disponible en una enorme variedad de diseños que reproducen madera, baldosa, mosaico hidráulico y patrones decorativos modernos.',
    priceRange: {
      min: 6.99,
      max: 19.99,
    },
    features: [
      'Precio más competitivo del mercado por metro cuadrado',
      'Rollos disponibles en anchos de 2 m, 3 m y 4 m',
      '100 % impermeable — ideal para zonas húmedas',
      'Instalación en horas: desenrollar, cortar y fijar',
      'Superficie antibacteriana y antialérgica',
      'Apto para uso comercial e industrial según espesor',
      'Aislamiento acústico y térmico natural',
      'Se puede instalar sobre la mayoría de superficies planas',
      'Mantenimiento mínimo: solo fregona húmeda',
      'Gran variedad de diseños: madera, baldosa, hidráulico, liso',
    ],
    bestFor: [
      'Presupuestos ajustados que buscan máxima relación calidad-precio',
      'Cocinas y baños que necesitan impermeabilidad total',
      'Locales comerciales y oficinas de gran superficie',
      'Habitaciones infantiles y guarderías',
      'Reformas express de pisos de alquiler',
      'Espacios que necesitan higiene extrema (clínicas, consultorios)',
    ],
    image: '/images/products/rollo-pvc.webp',
    thicknessOptions: ['1,5 mm', '2 mm', '2,5 mm', '3 mm', '3,5 mm', '4 mm'],
  },
  {
    slug: 'spc',
    name: 'Suelo SPC (Stone Polymer Composite)',
    description:
      'El suelo SPC representa la última generación en pavimentos vinílicos de alta gama. Su núcleo rígido de piedra caliza y polímero le confiere una estabilidad dimensional excepcional, siendo completamente inmune a la humedad, la dilatación térmica y las deformaciones por temperatura. Es el suelo perfecto para instalaciones sobre suelo radiante, en zonas húmedas y en espacios con grandes variaciones de temperatura. Su sistema de clic de última generación permite una instalación flotante ultrarrápida con un encaje perfecto. La capa superior de desgaste de alta densidad ofrece la máxima resistencia al tráfico intensivo, comparable a la de suelos cerámicos. Es el producto premium de nuestra gama, recomendado para quienes buscan lo mejor en durabilidad y rendimiento.',
    priceRange: {
      min: 22.99,
      max: 45.99,
    },
    features: [
      'Núcleo rígido SPC — estabilidad dimensional superior',
      '100 % resistente al agua, humedad y cambios térmicos',
      'Compatible con suelo radiante hasta 35 °C',
      'Capa de uso de 0,5 mm a 0,7 mm de alta densidad',
      'Clasificación de uso 23/34/43 (doméstico, comercial e industrial)',
      'Sistema click de nueva generación para ensamblaje perfecto',
      'Base acústica integrada IXPE de 1,5 mm',
      'Resistencia a la indentación (no se marca con muebles pesados)',
      'Tratamiento UV antimanchas y protección antibacteriana',
      'Acabados ultra-realistas con textura sincronizada en registro',
    ],
    bestFor: [
      'Viviendas de alta gama que buscan el mejor pavimento vinílico',
      'Zonas con suelo radiante de alta temperatura',
      'Baños, cocinas y lavaderos con exposición constante al agua',
      'Locales comerciales de alto tráfico (tiendas, restaurantes)',
      'Climas con grandes variaciones térmicas (continental, montaña)',
      'Hogares que buscan la máxima durabilidad a largo plazo',
    ],
    image: '/images/products/spc.webp',
    thicknessOptions: ['4 mm', '5 mm', '5,5 mm', '6 mm', '6,5 mm', '7 mm', '8 mm'],
  },
  {
    slug: 'losetas',
    name: 'Losetas de PVC',
    description:
      'Las losetas de PVC son piezas individuales que se instalan encajándolas entre sí mediante un sistema de clic o simplemente colocándolas a presión sobre el suelo existente. Su formato modular permite crear diseños personalizados combinando colores, texturas y patrones geométricos. Son extremadamente resistentes al impacto, al peso y al desgaste, lo que las convierte en la solución preferida para garajes, talleres, almacenes, gimnasios y espacios industriales. También se utilizan cada vez más en viviendas contemporáneas que buscan un look moderno e industrial. Su instalación no requiere adhesivos ni preparación del subsuelo, y se pueden desmontar y reutilizar en otro espacio si es necesario.',
    priceRange: {
      min: 18.99,
      max: 39.99,
    },
    features: [
      'Formato modular — combina colores y crea diseños únicos',
      'Instalación sin adhesivos: encaje a presión o clic',
      'Extrema resistencia al impacto y al peso (tráfico de vehículos)',
      'Desmontable y reutilizable en otro espacio',
      'Superficie antideslizante certificada R10/R11',
      'Resistente a aceites, grasas y productos químicos',
      'Aislamiento acústico y absorción de vibraciones',
      'No requiere preparación especial del subsuelo',
      'Formatos disponibles: 30x30 cm, 45x45 cm, 60x60 cm',
      'Ideal tanto para uso industrial como residencial contemporáneo',
    ],
    bestFor: [
      'Garajes y aparcamientos privados',
      'Talleres, almacenes y naves industriales',
      'Gimnasios y salas de fitness',
      'Espacios comerciales que buscan diseño modular',
      'Terrazas cubiertas y porches',
      'Viviendas de estilo industrial o contemporáneo',
    ],
    image: '/images/products/losetas-pvc.webp',
    thicknessOptions: ['5 mm', '6 mm', '7 mm', '8 mm', '10 mm'],
  },
  {
    slug: 'autoadhesivo',
    name: 'Suelo PVC Autoadhesivo',
    description:
      'El suelo PVC autoadhesivo es la opción más sencilla y rápida para renovar cualquier espacio. Cada lama o loseta incorpora una capa adhesiva en su parte inferior protegida por un film pelable. La instalación es tan simple como retirar el protector y pegar la pieza sobre el suelo existente, sin necesidad de herramientas, adhesivos adicionales ni experiencia previa. Es la elección perfecta para proyectos de bricolaje, reformas de fin de semana y espacios que necesitan una renovación inmediata con un presupuesto contenido. A pesar de su facilidad de colocación, ofrece un acabado profesional con diseños que imitan fielmente la madera, la piedra y el mármol. Su perfil ultrafino permite instalarlo sin necesidad de recortar puertas ni ajustar marcos.',
    priceRange: {
      min: 9.99,
      max: 24.99,
    },
    features: [
      'Instalación instantánea: despegar y pegar (peel & stick)',
      'No necesita herramientas ni experiencia previa',
      'Perfil ultrafino de 1,5 mm a 3 mm — sin ajustar puertas',
      'Adhesivo de alta adherencia permanente incluido',
      'Se coloca directamente sobre el suelo existente liso',
      'Corte fácil con cúter — se adapta a cualquier geometría',
      'Resistente al agua y a la humedad superficial',
      'Limpieza sencilla con fregona húmeda',
      'Diseños realistas de madera, piedra, mármol y cemento',
      'Ideal para reformas rápidas y proyectos de bricolaje (DIY)',
    ],
    bestFor: [
      'Reformas de fin de semana sin obras ni complicaciones',
      'Proyectos de bricolaje y DIY sin experiencia previa',
      'Pisos de alquiler que necesitan un cambio rápido y económico',
      'Estancias secundarias: trasteros, vestidores, pasillos',
      'Habitaciones de estudiantes y pisos compartidos',
      'Espacios temporales (ferias, stands, pop-up stores)',
    ],
    image: '/images/products/autoadhesivo.webp',
    thicknessOptions: ['1,5 mm', '2 mm', '2,5 mm', '3 mm'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}
