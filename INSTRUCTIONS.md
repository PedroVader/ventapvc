# PROMPT PARA CLAUDE CODE (VS Code) — Generación del Proyecto ventapvc.com
# Copia y pega este prompt completo en Claude Code desde VS Code

---

Eres un desarrollador senior fullstack especializado en Next.js 14+ (App Router), TypeScript, Tailwind CSS y SEO técnico avanzado. Vas a construir desde cero el proyecto completo de **ventapvc.com**, un sitio web de venta de suelos PVC en España con **550+ landing pages locales generadas programáticamente** mediante Static Site Generation (SSG).

## CONTEXTO DEL PROYECTO

- **Dominio:** ventapvc.com
- **Marca:** VentaPVC.com (marca de Disstands, empresa de pavimentos con sede en Barcelona)
- **Objetivo:** Dominar las búsquedas locales de "suelos PVC en [ciudad]" en toda España mediante SEO programático
- **Stack:** Next.js 14+ App Router, TypeScript, Tailwind CSS, SSG con `generateStaticParams`
- **Hosting objetivo:** Vercel
- **Total de landing pages loc
ales:** 550 ciudades/barrios
- **Foco principal:** Barcelona (65 barrios) + provincia BCN (80 localidades)

---

## PASO 1 — INICIALIZACIÓN DEL PROYECTO

Crea el proyecto Next.js con esta configuración:

```bash
npx create-next-app@latest ventapvc --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

Instala las dependencias necesarias:

```bash
npm install next-sitemap schema-dts clsx
npm install -D @types/node
```

Configura `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Para SSG completo si se despliega estático, o quitar si Vercel
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'ventapvc.com' }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

---

## PASO 2 — BASE DE DATOS DE UBICACIONES

Crea el archivo `src/data/locations.ts` con TODAS las 550 ubicaciones. Cada ubicación debe ser un objeto con esta interfaz TypeScript:

```typescript
// src/types/location.ts

export interface Location {
  slug: string;               // URL-friendly: "eixample", "hospitalet-de-llobregat"
  name: string;               // Nombre completo: "Eixample", "L'Hospitalet de Llobregat"
  province: string;           // "Barcelona", "Madrid", "Sevilla"
  community: string;          // "Cataluña", "Comunidad de Madrid", "Andalucía"
  region: LocationRegion;     // Enum para agrupar
  isBcnCity: boolean;         // true si es barrio/distrito de Barcelona ciudad
  isBcnMetro: boolean;        // true si es área metropolitana de BCN
  isCatalonia: boolean;       // true si pertenece a Cataluña
  climate: ClimateType;       // Tipo de clima
  housingType: string;        // "Pisos antiguos y obra nueva", "Chalets y adosados", etc.
  population: number;         // Población aproximada
  deliveryTime: string;       // "24-48h", "48-72h", "3-5 días laborables", etc.
  nearbyCities: string[];     // Array de 3-5 slugs de ciudades cercanas para interlinking
  metaDescription: string;    // Meta description personalizada
  introVariant: number;       // 1-5, para rotar variantes de introducción
  coordinates: {              // Para schema y posible mapa
    lat: number;
    lng: number;
  };
}

export enum LocationRegion {
  BCN_CITY = 'barcelona-ciudad',
  BCN_PROVINCE = 'provincia-barcelona',
  CATALONIA_OTHER = 'resto-cataluna',
  MADRID = 'comunidad-madrid',
  VALENCIA = 'comunidad-valenciana',
  ANDALUSIA = 'andalucia',
  BASQUE = 'pais-vasco',
  GALICIA = 'galicia',
  CASTILLA_LEON = 'castilla-leon',
  CASTILLA_MANCHA = 'castilla-la-mancha',
  ARAGON = 'aragon',
  MURCIA = 'murcia',
  CANARIAS = 'canarias',
  BALEARES = 'baleares',
  ASTURIAS = 'asturias',
  CANTABRIA = 'cantabria',
  NAVARRA = 'navarra',
  LA_RIOJA = 'la-rioja',
  EXTREMADURA = 'extremadura',
  CEUTA_MELILLA = 'ceuta-melilla',
}

export enum ClimateType {
  MEDITERRANEAN = 'mediterráneo',
  CONTINENTAL = 'continental',
  OCEANIC = 'oceánico',
  SUBTROPICAL = 'subtropical',
  MOUNTAIN = 'montaña',
  SEMIARID = 'semiárido',
}
```

Ahora crea `src/data/locations.ts` con las 550 ubicaciones. Aquí tienes los datos organizados por región. **Genera el array completo con datos realistas para cada ubicación:**

### BARCELONA CIUDAD — 65 barrios (isBcnCity: true, isBcnMetro: true, isCatalonia: true, climate: MEDITERRANEAN, deliveryTime: "24-48h")

Barcelona Centro, Eixample, Gràcia, Sants-Montjuïc, Les Corts, Sarrià-Sant Gervasi, Horta-Guinardó, Nou Barris, Sant Andreu, Sant Martí, Ciutat Vella, El Born, El Raval, La Barceloneta, Poblenou, El Clot, Sant Antoni, La Sagrada Família, El Putxet, Pedralbes, Vallcarca, El Carmel, La Verneda, Trinitat Vella, Trinitat Nova, Torre Baró, Vallvidrera, Tibidabo, Diagonal Mar, La Vila Olímpica, El Fort Pienc, La Dreta de l'Eixample, L'Esquerra de l'Eixample, La Nova Esquerra de l'Eixample, Sant Gervasi de Cassoles, El Putget i Farró, Vallcarca i els Penitents, La Salut, La Font d'en Fargues, El Guinardó, Can Baró, La Teixonera, Montbau, Canyelles, Les Roquetes, Verdun, La Prosperitat, La Trinitat Vella, Baró de Viver, El Bon Pastor, La Sagrera, El Congrés i els Indians, Navas, El Camp de l'Arpa del Clot, El Parc i la Llacuna del Poblenou, La Vila de Gràcia, El Camp d'en Grassot i Gràcia Nova, El Coll, La Marina del Prat Vermell, La Marina de Port, La Font de la Guatlla, Hostafrancs, La Bordeta, Sants-Badal, El Poble-sec

### PROVINCIA DE BARCELONA — 80 localidades (isBcnCity: false, isBcnMetro: true para las del cinturón / false para las más lejanas, isCatalonia: true, climate: MEDITERRANEAN, deliveryTime: "24-48h" o "48-72h")

L'Hospitalet de Llobregat, Badalona, Terrassa, Sabadell, Mataró, Santa Coloma de Gramenet, Cornellà de Llobregat, Sant Boi de Llobregat, Manresa, Rubí, Vilanova i la Geltrú, Viladecans, El Prat de Llobregat, Granollers, Cerdanyola del Vallès, Mollet del Vallès, Gavà, Castelldefels, Esplugues de Llobregat, Sant Cugat del Vallès, Sant Feliu de Llobregat, Vic, Igualada, Ripollet, Sitges, Sant Adrià de Besòs, Barberà del Vallès, Montcada i Reixac, Sant Joan Despí, Premià de Mar, Sant Pere de Ribes, Pineda de Mar, Calella, Berga, Martorell, Sant Vicenç dels Horts, Olesa de Montserrat, Vilassar de Mar, Abrera, Canet de Mar, Sant Andreu de la Barca, Torelló, Montgat, Molins de Rei, Palau-solità i Plegamans, El Masnou, Lliçà d'Amunt, Cardedeu, Arenys de Mar, Sant Celoni, Vallirana, Castellar del Vallès, Les Franqueses del Vallès, Sant Quirze del Vallès, La Garriga, Sentmenat, Cubelles, Vilanova del Camí, Manlleu, Centelles, Caldes de Montbui, Sant Sadurní d'Anoia, Vilafranca del Penedès, Olèrdola, Santa Perpètua de Mogoda, La Llagosta, Corbera de Llobregat, Cervelló, Begues, Torrelles de Llobregat, Sant Just Desvern, Sant Climent de Llobregat, Tiana, Alella, Teià, Cabrera de Mar, Argentona, Dosrius, Òrrius, Llavaneres

### RESTO DE CATALUÑA — 53 (isCatalonia: true, climate: MEDITERRANEAN o MOUNTAIN según zona, deliveryTime: "48-72h")

Tarragona, Reus, Lleida, Girona, Figueres, Tortosa, Amposta, Valls, El Vendrell, Cambrils, Salou, Vila-seca, Blanes, Lloret de Mar, Tossa de Mar, Palafrugell, Sant Feliu de Guíxols, Palamós, Olot, Banyoles, Salt, Roses, L'Escala, Platja d'Aro, Calonge, La Bisbal d'Empordà, Ripoll, Puigcerdà, La Seu d'Urgell, Balaguer, Tàrrega, Mollerussa, Cervera, Solsona, Tremp, Sort, Vielha, Agramunt, Les Borges Blanques, Montblanc, Santa Coloma de Farners, Cassà de la Selva, Vidreres, Tordera, Arenys de Munt, Calafell, Torredembarra, Altafulla, Constantí, La Pobla de Mafumet, Deltebre, Sant Carles de la Ràpita

### COMUNIDAD DE MADRID — 57 (climate: CONTINENTAL, deliveryTime: "3-5 días laborables")

Madrid Centro, Chamberí, Salamanca, Retiro, Chamartín, Arganzuela, Moncloa-Aravaca, Latina, Carabanchel, Usera, Puente de Vallecas, Moratalaz, Ciudad Lineal, Hortaleza, Villaverde, Villa de Vallecas, Vicálvaro, San Blas-Canillejas, Barajas, Fuencarral-El Pardo, Tetuán, Alcalá de Henares, Móstoles, Fuenlabrada, Leganés, Getafe, Alcorcón, Torrejón de Ardoz, Parla, Alcobendas, Las Rozas, San Sebastián de los Reyes, Pozuelo de Alarcón, Coslada, Rivas-Vaciamadrid, Valdemoro, Majadahonda, Tres Cantos, Collado Villalba, Aranjuez, Arganda del Rey, Boadilla del Monte, Pinto, Colmenar Viejo, San Fernando de Henares, Torrelodones, Galapagar, Villanueva de la Cañada, Navalcarnero, Ciempozuelos, Villalba, Mejorada del Campo, Villaviciosa de Odón, El Escorial, San Lorenzo de El Escorial, Algete, Humanes de Madrid

### COMUNIDAD VALENCIANA — 43 (climate: MEDITERRANEAN, deliveryTime: "3-5 días laborables")

Valencia, Alicante, Elche, Castellón de la Plana, Torrevieja, Orihuela, Benidorm, Paterna, Sagunto, Torrent, Gandía, Alcoy, Elda, San Vicente del Raspeig, Villena, Denia, Jávea, Altea, Calpe, Ontinyent, Alzira, Sueca, Cullera, Requena, Utiel, Xàtiva, Benicarló, Vinaròs, La Vila Joiosa, Crevillent, Novelda, Petrer, Ibi, Alcàsser, Manises, Mislata, Burjassot, Alfafar, Catarroja, Xirivella, Albal, Picanya, Massanassa

### ANDALUCÍA — 49 (climate: MEDITERRANEAN, deliveryTime: "3-5 días laborables")

Sevilla, Málaga, Granada, Córdoba, Almería, Huelva, Cádiz, Jaén, Jerez de la Frontera, Marbella, Dos Hermanas, Algeciras, Torremolinos, Fuengirola, Estepona, Benalmádena, Roquetas de Mar, El Ejido, San Fernando, Chiclana de la Frontera, El Puerto de Santa María, Línea de la Concepción, Motril, Antequera, Ronda, Lucena, Puente Genil, Úbeda, Baeza, Linares, Andújar, Martos, Écija, Carmona, Utrera, Lebrija, Osuna, Marchena, Loja, Baza, Guadix, Nerja, Vélez-Málaga, Sanlúcar de Barrameda, Isla Cristina, Ayamonte, Alcalá de Guadaíra, La Rinconada, Camas

### PAÍS VASCO — 20 (climate: OCEANIC, deliveryTime: "3-5 días laborables")

Bilbao, San Sebastián, Vitoria-Gasteiz, Barakaldo, Getxo, Irún, Portugalete, Santurtzi, Basauri, Leioa, Durango, Eibar, Zarautz, Hernani, Errenteria, Tolosa, Mondragón, Bergara, Amurrio, Llodio

### GALICIA — 20 (climate: OCEANIC, deliveryTime: "3-5 días laborables")

Vigo, A Coruña, Santiago de Compostela, Ourense, Lugo, Pontevedra, Ferrol, Narón, Vilagarcía de Arousa, Oleiros, Arteixo, Culleredo, Redondela, Cangas, Marín, Lalín, Carballo, Ribeira, Cambados, Boiro

### CASTILLA Y LEÓN — 17 (climate: CONTINENTAL, deliveryTime: "3-5 días laborables")

Valladolid, Burgos, Salamanca, León, Palencia, Zamora, Ávila, Segovia, Soria, Ponferrada, Aranda de Duero, Miranda de Ebro, Medina del Campo, Béjar, Ciudad Rodrigo, Astorga, La Bañeza

### CASTILLA-LA MANCHA — 17 (climate: CONTINENTAL, deliveryTime: "3-5 días laborables")

Toledo, Albacete, Ciudad Real, Guadalajara, Cuenca, Talavera de la Reina, Puertollano, Tomelloso, Alcázar de San Juan, Valdepeñas, Hellín, Almansa, Villarrobledo, Manzanares, Daimiel, Socuéllamos, Azuqueca de Henares

### ARAGÓN — 14 (climate: CONTINENTAL, deliveryTime: "3-5 días laborables")

Zaragoza, Huesca, Teruel, Calatayud, Ejea de los Caballeros, Utebo, Barbastro, Monzón, Fraga, Alcañiz, Jaca, Sabiñánigo, Tarazona, La Almunia de Doña Godina

### REGIÓN DE MURCIA — 16 (climate: SEMIARID/MEDITERRANEAN, deliveryTime: "3-5 días laborables")

Murcia, Cartagena, Lorca, Molina de Segura, Alcantarilla, Cieza, Águilas, Yecla, Jumilla, Torre-Pacheco, San Javier, Mazarrón, Caravaca de la Cruz, Totana, Alhama de Murcia, Las Torres de Cotillas

### CANARIAS — 18 (climate: SUBTROPICAL, deliveryTime: "7-10 días laborables")

Las Palmas de Gran Canaria, Santa Cruz de Tenerife, La Laguna, Telde, Arrecife, Santa Lucía de Tirajana, San Bartolomé de Tirajana, Arona, Adeje, Puerto de la Cruz, Granadilla de Abona, Los Llanos de Aridane, La Orotava, Gáldar, Agüimes, Ingenio, Puerto del Rosario, San Cristóbal de La Laguna

### ISLAS BALEARES — 16 (climate: MEDITERRANEAN, deliveryTime: "5-7 días laborables")

Palma de Mallorca, Ibiza, Manacor, Inca, Marratxí, Llucmajor, Calvià, Santa Eulària des Riu, Mahón, Ciutadella de Menorca, Felanitx, Pollença, Sóller, Alcúdia, Sa Pobla, Sant Antoni de Portmany

### ASTURIAS — 14 (climate: OCEANIC, deliveryTime: "3-5 días laborables")

Oviedo, Gijón, Avilés, Mieres, Langreo, Siero, Castrillón, San Martín del Rey Aurelio, Cangas del Narcea, Llanera, Villaviciosa, Navia, Tineo, Vegadeo

### CANTABRIA — 12 (climate: OCEANIC, deliveryTime: "3-5 días laborables")

Santander, Torrelavega, Camargo, Piélagos, El Astillero, Santa Cruz de Bezana, Castro-Urdiales, Laredo, Santoña, Los Corrales de Buelna, Reinosa, Medio Cudeyo

### NAVARRA — 14 (climate: CONTINENTAL/OCEANIC, deliveryTime: "3-5 días laborables")

Pamplona, Tudela, Barañáin, Burlada, Estella, Zizur Mayor, Tafalla, Villava, Ansoáin, Berriozar, Alsasua, Sangüesa, Peralta, Corella

### LA RIOJA — 8 (climate: CONTINENTAL, deliveryTime: "3-5 días laborables")

Logroño, Calahorra, Arnedo, Haro, Alfaro, Lardero, Nájera, Santo Domingo de la Calzada

### EXTREMADURA — 12 (climate: CONTINENTAL/MEDITERRANEAN, deliveryTime: "3-5 días laborables")

Badajoz, Cáceres, Mérida, Plasencia, Don Benito, Villanueva de la Serena, Almendralejo, Montijo, Zafra, Navalmoral de la Mata, Coria, Trujillo

### CEUTA Y MELILLA — 2 (climate: MEDITERRANEAN, deliveryTime: "Consultar")

Ceuta, Melilla

---

## PASO 3 — ESTRUCTURA DE CARPETAS

Crea exactamente esta estructura de archivos:

```
src/
├── app/
│   ├── layout.tsx                          # Root layout con metadata global
│   ├── page.tsx                            # Home page
│   ├── globals.css                         # Estilos Tailwind
│   ├── suelos-pvc/
│   │   ├── page.tsx                        # Categoría principal
│   │   ├── vinilico-click/
│   │   │   └── page.tsx
│   │   ├── rollo/
│   │   │   └── page.tsx
│   │   ├── spc/
│   │   │   └── page.tsx
│   │   ├── losetas/
│   │   │   └── page.tsx
│   │   └── autoadhesivo/
│   │       └── page.tsx
│   ├── suelos-pvc-barcelona/
│   │   ├── page.tsx                        # Hub Barcelona
│   │   └── [slug]/
│   │       └── page.tsx                    # Landing barrios BCN (SSG)
│   ├── suelos-pvc-[city]/
│   │   └── page.tsx                        # Landing ciudades España (SSG)
│   ├── blog/
│   │   ├── page.tsx                        # Blog index
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── instalacion/
│   │   └── page.tsx
│   ├── presupuesto/
│   │   └── page.tsx
│   ├── contacto/
│   │   └── page.tsx
│   ├── sobre-nosotros/
│   │   └── page.tsx
│   └── sitemap.ts                          # Sitemap dinámico
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── Breadcrumbs.tsx
│   ├── landing/
│   │   ├── HeroSection.tsx                 # Hero de landing local
│   │   ├── WhyPvcSection.tsx               # Sección ¿Por qué PVC?
│   │   ├── CatalogSection.tsx              # Catálogo de productos
│   │   ├── InstallationSection.tsx         # Servicio de instalación
│   │   ├── PricingSection.tsx              # Tabla de precios
│   │   ├── DeliverySection.tsx             # Envío y entrega
│   │   ├── RoomGuideSection.tsx            # Suelo por estancia
│   │   ├── WhyUsSection.tsx                # Por qué comprarnos
│   │   ├── FaqSection.tsx                  # FAQ con schema
│   │   ├── TestimonialsSection.tsx         # Testimonios
│   │   ├── NearbySection.tsx               # Ciudades cercanas (interlinking)
│   │   └── CtaSection.tsx                  # CTA final
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── PriceTable.tsx
│   │   └── ContactForm.tsx
│   └── seo/
│       ├── JsonLd.tsx                      # Componente genérico JSON-LD
│       ├── LocalBusinessSchema.tsx
│       ├── FaqSchema.tsx
│       ├── BreadcrumbSchema.tsx
│       └── ProductSchema.tsx
├── data/
│   ├── locations.ts                        # Base de datos de 550 ubicaciones
│   ├── products.ts                         # Datos de productos/categorías
│   └── faqs.ts                             # Templates de FAQ por tipo de zona
├── lib/
│   ├── getLocationData.ts                  # Función para obtener datos de ubicación
│   ├── generateContent.ts                  # Generador de contenido dinámico
│   ├── seo.ts                              # Utilidades SEO (meta tags, schemas)
│   └── utils.ts                            # Utilidades generales
├── types/
│   └── location.ts                         # Interfaces TypeScript
└── styles/
    └── fonts.ts                            # Configuración de fuentes
```

---

## PASO 4 — GENERADOR DE CONTENIDO DINÁMICO

Crea `src/lib/generateContent.ts`. Este es el módulo más importante. Genera contenido **único y contextualizado** para cada ubicación. **NO** debe ser un simple find-and-replace de nombre de ciudad. Debe incluir lógica condicional real:

```typescript
// src/lib/generateContent.ts

import { Location, ClimateType } from '@/types/location';

export function generateIntro(location: Location): string {
  // 5 variantes de introducción que se rotan según location.introVariant
  // Cada variante adapta el contenido según:
  // - isBcnCity: mencionar sede y showroom
  // - isBcnMetro: destacar entrega 24-48h
  // - isCatalonia: cercanía logística
  // - climate: referencia al clima y tipo de suelo recomendado
  // - housingType: referencia al tipo de vivienda
}

export function generateWhyPvc(location: Location): string {
  // Adapta beneficios del PVC según clima:
  // MEDITERRANEAN: resistencia humedad, frescura, salitre (si costa)
  // CONTINENTAL: aislamiento térmico, suelo radiante, confort invierno
  // OCEANIC: impermeabilidad, resistencia lluvia, anti-moho
  // SUBTROPICAL: no acumula calor, fácil limpieza arena
  // MOUNTAIN: aislamiento extremo, resistencia cambios temperatura
  // SEMIARID: mantenimiento mínimo, resistencia polvo
}

export function generateClimateRecommendation(climate: ClimateType): {
  recommended: string;
  reason: string;
} {
  // Devuelve tipo de suelo recomendado y razón según clima
}

export function generateDeliveryInfo(location: Location): string {
  // Texto personalizado de envío según zona geográfica
}

export function generateInstallationInfo(location: Location): string {
  // Adapta info de instalación: equipo propio BCN vs red certificados
}

export function generateFaqs(location: Location): Array<{question: string; answer: string}> {
  // 6-8 FAQs contextualizadas con datos reales de la ubicación
}

export function generateMetaTitle(location: Location): string {
  // Rota entre 3 formatos de title tag, máx 60 chars
}

export function generateMetaDescription(location: Location): string {
  // Meta description con ubicación, propuesta de valor y CTA, máx 155 chars
}
```

**REGLA CRÍTICA:** El generador de contenido debe producir al menos **5 variantes** de cada sección principal. Usa `location.introVariant` (1-5) y otros datos del objeto Location para determinar qué variante usar. Esto evita contenido duplicado entre páginas.

**Estrategias de unicidad obligatorias:**
1. Rotar estructura de frases entre variantes
2. Adaptar recomendaciones de producto según clima
3. Personalizar tiempos de entrega
4. Referenciar tipo de vivienda local
5. Incluir datos contextuales (costa/interior, montaña/llano, norte/sur)
6. Variar CTAs y propuestas de valor

---

## PASO 5 — PÁGINA DE LANDING LOCAL (SSG)

### Para barrios de Barcelona: `src/app/suelos-pvc-barcelona/[slug]/page.tsx`

```typescript
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locations } from '@/data/locations';
import { generateMetaTitle, generateMetaDescription } from '@/lib/generateContent';
// Importar todos los componentes de sección

// SSG: genera todas las rutas estáticas en build time
export async function generateStaticParams() {
  return locations
    .filter(loc => loc.isBcnCity)
    .map(loc => ({ slug: loc.slug }));
}

// Metadata dinámica
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = locations.find(l => l.slug === params.slug && l.isBcnCity);
  if (!location) return {};
  
  return {
    title: generateMetaTitle(location),
    description: generateMetaDescription(location),
    alternates: {
      canonical: `https://ventapvc.com/suelos-pvc-barcelona/${location.slug}/`,
      languages: { 'es-ES': `https://ventapvc.com/suelos-pvc-barcelona/${location.slug}/` },
    },
    openGraph: {
      title: generateMetaTitle(location),
      description: generateMetaDescription(location),
      url: `https://ventapvc.com/suelos-pvc-barcelona/${location.slug}/`,
      siteName: 'VentaPVC.com',
      locale: 'es_ES',
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}

// Página
export default function BarrioLandingPage({ params }: Props) {
  const location = locations.find(l => l.slug === params.slug && l.isBcnCity);
  if (!location) notFound();

  return (
    <>
      {/* Schema JSON-LD */}
      <LocalBusinessSchema location={location} />
      <BreadcrumbSchema location={location} />
      <FaqSchema location={location} />
      
      {/* Contenido */}
      <HeroSection location={location} />
      <WhyPvcSection location={location} />
      <CatalogSection location={location} />
      <InstallationSection location={location} />
      <PricingSection location={location} />
      <DeliverySection location={location} />
      <RoomGuideSection location={location} />
      <WhyUsSection location={location} />
      <FaqSection location={location} />
      <TestimonialsSection location={location} />
      <NearbySection location={location} />
      <CtaSection location={location} />
    </>
  );
}
```

### Para el resto de ciudades: `src/app/suelos-pvc-[city]/page.tsx`

Mismo patrón pero filtra `locations.filter(l => !l.isBcnCity)` en `generateStaticParams`.

---

## PASO 6 — COMPONENTES DE SECCIÓN

Crea cada componente en `src/components/landing/`. Cada uno recibe `location: Location` como prop y genera contenido usando las funciones de `generateContent.ts`.

**Diseño visual obligatorio (Tailwind CSS):**

- **Paleta de colores:** Azul marino (#1B2A4A) como primario, azul medio (#2E5090) como acento, gris claro (#F5F7FA) para fondos alternos, blanco para secciones principales, naranja (#E8721C) para CTAs y botones de acción.
- **Tipografía:** Inter o system-ui para body, misma familia en bold para headings.
- **Espaciado:** Secciones alternas con fondo blanco y gris claro para ritmo visual.
- **CTAs:** Botones grandes con hover animation, color naranja, siempre visibles.
- **Responsive:** Mobile-first, breakpoints en sm, md, lg, xl.
- **Imágenes:** Placeholder de Next/Image con blur, lazy load excepto hero.

Cada sección debe tener un `id` para anclas internas (ej: `id="catalogo"`, `id="precios"`, `id="faq"`).

---

## PASO 7 — SCHEMA MARKUP COMPONENTS

Crea componentes reutilizables que inyectan JSON-LD en el `<head>`:

```typescript
// src/components/seo/JsonLd.tsx
export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

Schemas obligatorios por landing page:
1. **LocalBusiness** — con areaServed dinámico
2. **BreadcrumbList** — Home > Suelos PVC > [Comunidad] > [Ciudad]
3. **FAQPage** — con las preguntas generadas
4. **Product** — rango de precios y disponibilidad
5. **AggregateRating** — 4.8/5

---

## PASO 8 — SITEMAP DINÁMICO

Crea `src/app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next';
import { locations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ventapvc.com';
  
  // Páginas estáticas
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/suelos-pvc`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    // ... categorías, blog, contacto, etc.
  ];

  // Landing pages de Barcelona (barrios)
  const bcnPages = locations
    .filter(l => l.isBcnCity)
    .map(l => ({
      url: `${baseUrl}/suelos-pvc-barcelona/${l.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  // Landing pages del resto de España
  const cityPages = locations
    .filter(l => !l.isBcnCity)
    .map(l => ({
      url: `${baseUrl}/suelos-pvc-${l.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  return [...staticPages, ...bcnPages, ...cityPages];
}
```

---

## PASO 9 — ROBOTS.TXT

Crea `src/app/robots.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://ventapvc.com/sitemap.xml',
  };
}
```

---

## PASO 10 — HOME PAGE Y PÁGINAS PRINCIPALES

### Home (`src/app/page.tsx`)
- Hero con H1: "Suelos de PVC en España: La Mayor Selección al Mejor Precio"
- Sección de categorías de producto (6 cards con imagen)
- Mapa visual de cobertura o lista de principales ciudades servidas
- Testimonios destacados
- Sección de últimos artículos del blog
- CTA de presupuesto

### Hub Barcelona (`src/app/suelos-pvc-barcelona/page.tsx`)
- H1: "Suelos PVC en Barcelona: Venta, Instalación y Showroom"
- Mención a todos los barrios con enlaces internos a cada landing
- Contenido sobre la sede física de Disstands en Barcelona
- Mapa de barrios o grid visual
- FAQ específica de Barcelona

---

## PASO 11 — DISEÑO Y UX

**Header:**
- Logo VentaPVC a la izquierda
- "by Disstands" debajo en texto pequeño
- Navegación: Suelos PVC (dropdown con categorías), Instalación, Blog, Contacto
- Botón CTA: "Pide Presupuesto" (naranja)
- Teléfono visible en desktop
- Hamburger menu en mobile

**Footer:**
- 4 columnas: Productos, Servicios, Empresa, Contacto
- Grid de logos de marcas de PVC (Gerflor, Tarkett, Forbo, etc.)
- Links a principales ciudades (SEO interlinking)
- Newsletter signup
- Copyright + enlace a Disstands

**Breadcrumbs:** Siempre visibles debajo del header. Formato:
`Inicio > Suelos PVC > Barcelona > Eixample`

---

## PASO 12 — OPTIMIZACIÓN DE RENDIMIENTO

Implementa estas optimizaciones:

1. **next/font** para cargar Inter con `font-display: swap`
2. **next/image** con placeholder blur y sizes responsive
3. **Dynamic imports** con `next/dynamic` para componentes pesados (formulario, mapa)
4. **Metadata API** de Next.js para todos los meta tags
5. **Prefetch** de links a ciudades cercanas con `<Link prefetch>`
6. **CSS:** Purge con Tailwind, sin CSS externo innecesario

---

## INSTRUCCIONES FINALES PARA CLAUDE CODE

1. **Genera TODO el código completo.** No dejes placeholders ni `// TODO`. Cada archivo debe estar completo y funcional.

2. **Genera las 550 ubicaciones** en `locations.ts` con datos realistas (coordenadas aproximadas, poblaciones reales, ciudades cercanas reales, tipo de vivienda correcto por zona).

3. **El generador de contenido** debe producir texto en español de España (no latinoamericano), tutear al usuario, y ser profesional pero cercano.

4. **Cada componente de sección** debe renderizar HTML semántico correcto: `<section>`, `<article>`, `<h2>`, `<h3>`, listas con `<ul>/<ol>`, tablas con `<table>`.

5. **No uses librerías UI** como Chakra, MUI, etc. Solo Tailwind CSS puro.

6. **El proyecto debe compilar sin errores** con `npm run build` y generar todas las páginas estáticas.

7. **Prioriza la velocidad de carga.** Core Web Vitals perfectos. Nada de JavaScript innecesario en el cliente.

8. **Genera primero** la estructura base, luego el data layer (locations.ts), luego los componentes, luego las páginas. En ese orden.

9. **Testea** que `generateStaticParams` produce exactamente 550 rutas (65 barrios BCN + 485 ciudades).

10. **Si algún archivo es demasiado largo** (locations.ts con 550 entradas), divídelo en archivos parciales por región e impórtalos en un archivo índice.

---

## ENTREGABLES ESPERADOS

Al finalizar, el proyecto debe:
- ✅ Compilar sin errores (`npm run build`)
- ✅ Generar 550+ páginas HTML estáticas
- ✅ Cada página con contenido único >2.000 palabras
- ✅ Schema JSON-LD en cada landing (LocalBusiness, FAQ, Breadcrumb, Product)
- ✅ Sitemap.xml con todas las URLs
- ✅ Robots.txt correcto
- ✅ Responsive mobile-first
- ✅ Core Web Vitals optimizados
- ✅ Internal linking automático entre landings cercanas
- ✅ Metadata SEO completa (title, description, OG, canonical, hreflang)
- ✅ Diseño profesional con la paleta de VentaPVC

---

Comienza generando el proyecto paso a paso. Empieza por el PASO 1 (inicialización) y avanza secuencialmente hasta completar todos los pasos. No saltes ninguno.