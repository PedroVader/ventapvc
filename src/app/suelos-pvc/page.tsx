import type { Metadata } from 'next';
import Link from 'next/link';
import { categories, getProductsByCategorySlug } from '@/data/products';

export const metadata: Metadata = {
  title: 'Suelos de PVC: Catálogo Completo por Uso | VentaPVC',
  description:
    'Descubre nuestro catálogo de suelos PVC Disstands organizados por uso: eventos, doméstico, oficinas, colegios, hospital y más. Más de 40 productos con precios y especificaciones.',
  alternates: {
    canonical: '/suelos-pvc',
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  eventos: (
    <svg className="h-12 w-12 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
    </svg>
  ),
  domestico: (
    <svg className="h-12 w-12 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  oficinas: (
    <svg className="h-12 w-12 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  colegios: (
    <svg className="h-12 w-12 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  ),
  hospital: (
    <svg className="h-12 w-12 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  otros: (
    <svg className="h-12 w-12 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  ),
};

export default function SuelosPvcPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Catálogo de Suelos PVC Disstands
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
        Más de 40 productos de suelos de PVC profesionales organizados por uso.
        Desde pavimentos para eventos temporales hasta suelos hospitalarios con
        certificaciones sanitarias. Encuentra la solución perfecta para tu
        proyecto.
      </p>

      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />

      {/* Category cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const catProducts = getProductsByCategorySlug(cat.slug);
          return (
            <Link
              key={cat.slug}
              href={`/suelos-pvc/${cat.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary/5 to-primary-light/10">
                {categoryIcons[cat.icon]}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-bold text-primary transition-colors group-hover:text-accent">
                  {cat.name}
                </h2>
                <p className="mt-2 flex-1 text-sm text-[var(--color-text-light)]">
                  {cat.description.length > 140
                    ? cat.description.slice(0, 140).trim() + '...'
                    : cat.description}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-semibold text-accent">
                    {catProducts.length} productos
                  </span>
                  <span className="text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                    Ver categoría →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Advantages */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-primary">
          Ventajas de los Suelos de PVC Disstands
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--color-text-light)]">
          <li>Catálogo profesional con más de 40 referencias para todos los usos.</li>
          <li>Soluciones específicas: sanitarias, educativas, deportivas e industriales.</li>
          <li>Certificaciones de calidad: clasificación al fuego, antideslizamiento, antiestática.</li>
          <li>Instalación profesional en toda España con red de instaladores certificados.</li>
          <li>Asesoramiento técnico especializado para cada tipo de proyecto.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-xl bg-primary p-8 text-center text-white sm:p-12">
        <h2 className="text-2xl font-bold sm:text-3xl">
          ¿No sabes qué suelo elegir?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Nuestros expertos te asesoran sin compromiso. Cuéntanos tu proyecto y
          te recomendamos la mejor solución del catálogo Disstands.
        </p>
        <div className="mt-8">
          <Link
            href="/presupuesto"
            className="inline-flex items-center rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-accent-hover"
          >
            Pide Asesoramiento Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
