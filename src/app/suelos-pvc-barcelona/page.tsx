import { Metadata } from 'next';
import Link from 'next/link';

import { locations } from '@/data/locations';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const bcnCityLocations = locations
  .filter((loc) => loc.isBcnCity)
  .sort((a, b) => a.name.localeCompare(b.name, 'es'));

/**
 * Group Barcelona barrios by their parent district. The district is inferred
 * from the location data — the 10 main districts are the locations whose slug
 * matches one of these known district slugs. Every other BCN location is
 * assigned to the closest district based on the `nearbyCities` array or
 * alphabetically if no match is found.
 */
const DISTRICTS: Record<string, string> = {
  'ciutat-vella': 'Ciutat Vella',
  'eixample': 'Eixample',
  'sants-montjuic': 'Sants-Montjuic',
  'les-corts': 'Les Corts',
  'sarria-sant-gervasi': 'Sarria-Sant Gervasi',
  'gracia': 'Gracia',
  'horta-guinardo': 'Horta-Guinardo',
  'nou-barris': 'Nou Barris',
  'sant-andreu': 'Sant Andreu',
  'sant-marti': 'Sant Marti',
};

const DISTRICT_BARRIOS: Record<string, string[]> = {
  'Ciutat Vella': [
    'barcelona-centro', 'ciutat-vella', 'el-born', 'el-raval', 'la-barceloneta',
  ],
  'Eixample': [
    'eixample', 'la-sagrada-familia', 'el-fort-pienc', 'la-dreta-de-l-eixample',
    'l-esquerra-de-l-eixample', 'la-nova-esquerra-de-l-eixample', 'sant-antoni',
  ],
  'Sants-Montjuic': [
    'sants-montjuic', 'hostafrancs', 'la-bordeta', 'sants-badal',
    'el-poble-sec', 'la-font-de-la-guatlla', 'la-marina-de-port',
    'la-marina-del-prat-vermell',
  ],
  'Les Corts': [
    'les-corts', 'pedralbes',
  ],
  'Sarria-Sant Gervasi': [
    'sarria-sant-gervasi', 'sant-gervasi-de-cassoles', 'el-putget-i-farro',
    'el-putxet', 'vallvidrera', 'tibidabo',
  ],
  'Gracia': [
    'gracia', 'la-vila-de-gracia', 'el-camp-d-en-grassot-i-gracia-nova',
    'el-coll', 'la-salut', 'vallcarca', 'vallcarca-i-els-penitents',
  ],
  'Horta-Guinardo': [
    'horta-guinardo', 'el-guinardo', 'el-carmel', 'la-teixonera',
    'montbau', 'la-font-d-en-fargues', 'can-baro',
  ],
  'Nou Barris': [
    'nou-barris', 'canyelles', 'les-roquetes', 'verdun',
    'la-prosperitat', 'trinitat-nova', 'torre-baro',
  ],
  'Sant Andreu': [
    'sant-andreu', 'la-sagrera', 'el-congres-i-els-indians', 'navas',
    'trinitat-vella', 'la-trinitat-vella', 'baro-de-viver', 'el-bon-pastor',
  ],
  'Sant Marti': [
    'sant-marti', 'poblenou', 'el-clot', 'la-verneda',
    'diagonal-mar', 'la-vila-olimpica', 'el-camp-de-l-arpa-del-clot',
    'el-parc-i-la-llacuna-del-poblenou',
  ],
};

function getGroupedBarrios() {
  const slugSet = new Set(bcnCityLocations.map((loc) => loc.slug));

  const groups: Array<{ district: string; barrios: typeof bcnCityLocations }> = [];

  for (const [district, slugs] of Object.entries(DISTRICT_BARRIOS)) {
    const barrios = slugs
      .filter((s) => slugSet.has(s))
      .map((s) => bcnCityLocations.find((loc) => loc.slug === s)!)
      .filter(Boolean)
      .sort((a, b) => a.name.localeCompare(b.name, 'es'));

    if (barrios.length > 0) {
      groups.push({ district, barrios });
    }
  }

  // Catch any barrios not assigned to a district
  const assignedSlugs = new Set(
    Object.values(DISTRICT_BARRIOS).flat(),
  );
  const unassigned = bcnCityLocations
    .filter((loc) => !assignedSlugs.has(loc.slug))
    .sort((a, b) => a.name.localeCompare(b.name, 'es'));

  if (unassigned.length > 0) {
    groups.push({ district: 'Otros barrios', barrios: unassigned });
  }

  return groups;
}

// ---------------------------------------------------------------------------
// Barcelona-specific FAQs
// ---------------------------------------------------------------------------

const barcelonaFaqs = [
  {
    question: '¿Puedo visitar un showroom de suelos PVC en Barcelona?',
    answer:
      'Si, nuestro showroom de Disstands en la calle de la Industria 42, Barcelona (08025), esta abierto de lunes a viernes de 9:00 a 18:00 y sabados de 10:00 a 14:00. Puedes ver y tocar mas de 200 modelos de suelos PVC, SPC, vinilico click, losetas y rollo. Te recomendamos pedir cita previa para que un asesor te atienda de forma personalizada.',
  },
  {
    question: '¿Cuanto cuesta instalar suelo PVC en un piso de Barcelona?',
    answer:
      'El precio total (material + instalacion) para un piso tipo de 70 m2 en Barcelona oscila entre 1.400 EUR y 4.500 EUR dependiendo del tipo de suelo elegido. El material va desde 6,99 EUR/m2 (PVC en rollo) hasta 45,99 EUR/m2 (SPC premium). La instalacion profesional cuesta entre 6 y 14 EUR/m2. Solicita presupuesto gratuito y sin compromiso.',
  },
  {
    question: '¿En cuanto tiempo recibo el suelo PVC en Barcelona?',
    answer:
      'Para toda Barcelona ciudad y area metropolitana, el plazo de entrega es de 24 a 48 horas para productos en stock. Los modelos mas vendidos estan siempre disponibles en nuestro almacen de Barcelona. Para modelos bajo pedido, el plazo es de 5 a 7 dias laborables. Entrega gratuita para pedidos superiores a 300 EUR dentro de Barcelona ciudad.',
  },
  {
    question: '¿Que tipo de suelo PVC es mejor para el clima de Barcelona?',
    answer:
      'Barcelona tiene un clima mediterraneo con veranos calidos y humedad moderada. Recomendamos suelos SPC o vinilico click, que son 100% impermeables, resisten los cambios de temperatura y cuentan con proteccion UV de serie. Para zonas costeras como La Barceloneta o Diagonal Mar, el SPC con barrera antihumedad es la mejor opcion por su resistencia al salitre.',
  },
  {
    question: '¿Teneis instaladores propios en Barcelona?',
    answer:
      'Si, contamos con un equipo propio de instaladores profesionales con sede en Barcelona que trabajan exclusivamente para VentaPVC.com. Tienen mas de 10 anos de experiencia en pavimentos vinilicos y conocen las particularidades constructivas de cada barrio. Ofrecemos medicion gratuita a domicilio, presupuesto cerrado y garantia de 2 anos sobre la mano de obra.',
  },
  {
    question: '¿Puedo instalar suelo PVC sobre las baldosas hidraulicas de mi piso en Barcelona?',
    answer:
      'Si, el suelo PVC click y SPC se puede instalar directamente sobre baldosas hidraulicas sin retirarlas, siempre que la superficie este razonablemente nivelada (menos de 2 mm de desnivel por metro). De hecho, esta es una de las reformas mas habituales en los pisos modernistas del Eixample y Gracia. El resultado es un acabado moderno que se consigue en un solo dia, sin escombros ni polvo.',
  },
];

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Suelos PVC en Barcelona: Venta, Instalacion y Showroom',
  description:
    'Compra suelos de PVC en Barcelona con entrega en 24-48h. Showroom en Barcelona, instaladores propios y mas de 200 modelos desde 6,99 EUR/m2. Presupuesto gratis.',
  alternates: {
    canonical: '/suelos-pvc-barcelona',
    languages: {
      'es-ES': '/suelos-pvc-barcelona',
    },
  },
  openGraph: {
    title: 'Suelos PVC en Barcelona: Venta, Instalacion y Showroom',
    description:
      'Compra suelos de PVC en Barcelona con entrega en 24-48h. Showroom en Barcelona, instaladores propios y mas de 200 modelos desde 6,99 EUR/m2.',
    url: 'https://ventapvc.com/suelos-pvc-barcelona',
    siteName: 'VentaPVC.com',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://ventapvc.com/og/suelos-pvc-barcelona.jpg',
        width: 1200,
        height: 630,
        alt: 'Suelos de PVC en Barcelona - VentaPVC.com',
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function BarcelonaHubPage() {
  const groupedBarrios = getGroupedBarrios();
  const totalBarrios = bcnCityLocations.length;

  return (
    <>
      <Header />

      <main>
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Suelos PVC Barcelona' }]} />
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Suelos PVC en Barcelona: Venta, Instalacion y Showroom
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              En VentaPVC.com somos especialistas en suelos de PVC con sede en Barcelona.
              Disponemos de un showroom donde puedes ver mas de 200 modelos, un equipo
              propio de instaladores que trabaja a diario en todos los barrios de la
              ciudad y entrega en 24-48 horas desde nuestro almacen local. Precios
              desde 6,99 EUR/m2.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/presupuesto"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Pide Presupuesto Gratis
              </Link>
              <Link
                href="#barrios"
                className="inline-flex items-center justify-center rounded-lg border border-primary/20 bg-white px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Ver {totalBarrios} barrios
              </Link>
            </div>
          </div>
        </section>

        {/* Showroom section */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Showroom Disstands en Barcelona
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 text-gray-600">
                <p>
                  Nuestro showroom esta situado en la <strong>calle de la Industria 42,
                  08025 Barcelona</strong>, a pocos minutos a pie de la Sagrada Familia.
                  Es el espacio de Disstands donde exponemos toda la gama de suelos de
                  PVC disponible: vinilico click, SPC, losetas, rollo y autoadhesivo.
                </p>
                <p>
                  Al visitarnos puedes ver y tocar mas de 200 muestras reales, comparar
                  acabados (madera, piedra, cemento, baldosa hidraulica), consultar
                  precios y recibir asesoramiento personalizado de nuestro equipo
                  tecnico. Te ayudamos a elegir el suelo perfecto para tu vivienda,
                  local u oficina.
                </p>
                <p>
                  <strong>Horario:</strong> Lunes a viernes de 9:00 a 18:00. Sabados de
                  10:00 a 14:00. Te recomendamos pedir cita previa llamando al{' '}
                  <a href="tel:+34934123456" className="font-semibold text-accent hover:underline">
                    934 123 456
                  </a>{' '}
                  para que un asesor te atienda de forma exclusiva.
                </p>
              </div>
              <div className="space-y-4 text-gray-600">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="mb-3 font-semibold text-primary">
                    Ventajas de comprar en nuestro showroom
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      Ve y toca mas de 200 modelos antes de decidir
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      Asesoramiento tecnico personalizado gratuito
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      Llevate muestras gratis a casa para probar
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      Precios directos de almacen sin intermediarios
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      Coordina instalacion y entrega en el acto
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Barrios grid */}
        <section id="barrios" className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Suelos PVC en los {totalBarrios} barrios de Barcelona
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600">
              Cubrimos toda Barcelona ciudad con entrega en 24-48 horas e instalacion
              profesional. Selecciona tu barrio para ver informacion especifica sobre
              productos recomendados, precios y plazos de entrega.
            </p>

            <div className="mt-12 space-y-12">
              {groupedBarrios.map((group) => (
                <div key={group.district}>
                  <h3 className="mb-4 text-xl font-semibold text-primary">
                    {group.district}
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {group.barrios.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/suelos-pvc-barcelona/${loc.slug}`}
                        className="group rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-accent/30 hover:shadow-md"
                      >
                        <span className="block font-medium text-primary transition-colors group-hover:text-accent">
                          {loc.name}
                        </span>
                        <span className="mt-1 block text-sm text-gray-500">
                          {loc.housingType}
                        </span>
                        <span className="mt-2 block text-xs text-gray-400">
                          Entrega en {loc.deliveryTime}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why PVC in Barcelona */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              ¿Por que elegir suelos de PVC en Barcelona?
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Clima mediterraneo',
                  text: 'El PVC resiste la humedad, el calor y los cambios de temperatura tipicos de Barcelona. No se deforma, no absorbe agua y mantiene su acabado durante decadas.',
                },
                {
                  title: 'Pisos modernistas',
                  text: 'Barcelona tiene miles de pisos con suelos hidraulicos deteriorados. El PVC click se instala encima sin retirar las baldosas: reforma sin obra en un solo dia.',
                },
                {
                  title: 'Entrega en 24-48h',
                  text: 'Con almacen propio en Barcelona, entregamos en 24-48 horas en toda la ciudad. Los modelos mas vendidos estan siempre en stock.',
                },
                {
                  title: 'Instaladores propios',
                  text: 'Nuestro equipo de Barcelona trabaja a diario en todos los barrios. Conocen las particularidades de cada tipo de vivienda y garantizan la maxima calidad.',
                },
                {
                  title: 'Desde 6,99 EUR/m2',
                  text: 'Al ser fabricantes (Disstands) y distribuidores, ofrecemos precios de almacen sin intermediarios. PVC en rollo desde 6,99 EUR/m2, SPC desde 22,99 EUR/m2.',
                },
                {
                  title: 'Showroom en Barcelona',
                  text: 'Visita nuestro showroom en la calle de la Industria y ve mas de 200 modelos en persona. Asesoramiento tecnico gratuito y muestras para llevar a casa.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Preguntas frecuentes sobre suelos PVC en Barcelona
            </h2>
            <div className="mt-8 space-y-6">
              {barcelonaFaqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl border border-gray-200 bg-white"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-medium text-primary transition-colors hover:text-accent">
                    <span>{faq.question}</span>
                    <svg
                      className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              ¿Listo para renovar los suelos de tu vivienda en Barcelona?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Solicita un presupuesto gratuito y sin compromiso. Te asesoramos sobre
              el mejor suelo PVC para tu vivienda, te ofrecemos el mejor precio y
              coordinamos la entrega e instalacion.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/presupuesto"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Pide Presupuesto Gratis
              </Link>
              <a
                href="tel:+34934123456"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/20"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                934 123 456
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
