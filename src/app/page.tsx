import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { categories, getProductsByCategorySlug, products } from '@/data/products';
import { locations } from '@/data/locations';

const featuredCities = [
  { name: 'Barcelona', slug: 'suelos-pvc-barcelona', isBcn: true },
  { name: 'Madrid', slug: 'suelos-pvc-madrid-centro' },
  { name: 'Valencia', slug: 'suelos-pvc-valencia' },
  { name: 'Sevilla', slug: 'suelos-pvc-sevilla' },
  { name: 'Bilbao', slug: 'suelos-pvc-bilbao' },
  { name: 'Zaragoza', slug: 'suelos-pvc-zaragoza' },
  { name: 'Málaga', slug: 'suelos-pvc-malaga' },
  { name: 'Palma de Mallorca', slug: 'suelos-pvc-palma-de-mallorca' },
  { name: 'Alicante', slug: 'suelos-pvc-alicante' },
  { name: 'Vigo', slug: 'suelos-pvc-vigo' },
  { name: 'Gijón', slug: 'suelos-pvc-gijon' },
  { name: 'Murcia', slug: 'suelos-pvc-murcia' },
];

const communityGroups = [
  {
    name: 'Cataluña',
    cities: ['Barcelona', 'Terrassa', 'Sabadell', 'Mataró', 'Tarragona', 'Lleida', 'Girona', 'Reus'],
  },
  {
    name: 'Comunidad de Madrid',
    cities: ['Madrid', 'Móstoles', 'Alcalá de Henares', 'Fuenlabrada', 'Leganés', 'Getafe', 'Alcorcón', 'Las Rozas'],
  },
  {
    name: 'Comunidad Valenciana',
    cities: ['Valencia', 'Alicante', 'Elche', 'Castellón', 'Torrevieja', 'Benidorm', 'Gandía', 'Torrent'],
  },
  {
    name: 'Andalucía',
    cities: ['Sevilla', 'Málaga', 'Granada', 'Córdoba', 'Jerez', 'Marbella', 'Cádiz', 'Almería'],
  },
];

const testimonials = [
  {
    name: 'María García',
    city: 'Barcelona',
    text: 'Instalamos suelo vinílico click en toda la casa. El equipo de VentaPVC fue puntual, limpio y muy profesional. El resultado es espectacular y nuestros hijos pueden jugar sin preocupaciones.',
    product: 'Vinílico Click',
    stars: 5,
  },
  {
    name: 'Carlos Rodríguez',
    city: 'Madrid',
    text: 'Pedimos muestras gratis, nos asesoraron por teléfono y en una semana teníamos el suelo SPC instalado en el salón. Calidad-precio inmejorable. Muy contentos con el aislamiento térmico.',
    product: 'Suelo SPC',
    stars: 5,
  },
  {
    name: 'Ana Martínez',
    city: 'Valencia',
    text: 'Renovamos la cocina y el baño con suelo PVC en rollo. Resistente al agua, fácil de limpiar y el diseño de madera queda muy natural. El envío llegó perfecto y a tiempo.',
    product: 'PVC en Rollo',
    stars: 5,
  },
];

export default function Home() {
  const totalLocations = locations.length;

  return (
    <>
      <Header />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-light py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent" />
          <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Suelos de PVC en España:
            <span className="mt-2 block text-accent">La Mayor Selección al Mejor Precio</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            Venta e instalación de suelos de PVC en toda España. Más de {products.length} productos Disstands
            para eventos, hogares, oficinas, colegios, hospitales y más. Envío rápido, precios de fábrica y más de {totalLocations} ciudades cubiertas.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/presupuesto"
              className="inline-flex items-center rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-accent-hover"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Pide Presupuesto Gratis
            </Link>
            <Link
              href="/suelos-pvc"
              className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ver Catálogo Completo
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70 md:gap-10">
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Desde 6,99&nbsp;€/m²
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Envío a toda España
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Instalación profesional
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Primeras marcas europeas
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CATEGORÍAS DE PRODUCTO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-alt py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
              Suelos PVC por Uso
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-light)]">
              Más de {products.length} productos organizados en 6 categorías. Encuentra la solución perfecta para tu proyecto.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const catProducts = getProductsByCategorySlug(cat.slug);
              const withPrices = catProducts.filter((p) => p.pricePerSqm != null);
              const minPrice = withPrices.length > 0 ? Math.min(...withPrices.map((p) => p.pricePerSqm!)) : null;
              return (
                <Link
                  key={cat.slug}
                  href={`/suelos-pvc/${cat.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/5 to-primary-light/10">
                    {cat.slug === 'eventos' && (
                      <svg className="h-16 w-16 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                      </svg>
                    )}
                    {cat.slug === 'domestico' && (
                      <svg className="h-16 w-16 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                    )}
                    {cat.slug === 'oficinas' && (
                      <svg className="h-16 w-16 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                    )}
                    {cat.slug === 'colegios' && (
                      <svg className="h-16 w-16 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                      </svg>
                    )}
                    {cat.slug === 'hospital' && (
                      <svg className="h-16 w-16 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    )}
                    {cat.slug === 'otros' && (
                      <svg className="h-16 w-16 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-[var(--color-text-light)]">
                      {cat.description.length > 120
                        ? cat.description.slice(0, 120).trim() + '...'
                        : cat.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-semibold text-accent">
                        {minPrice != null
                          ? `Desde ${minPrice.toLocaleString('es-ES', { minimumFractionDigits: 2 })}\u00A0€/m²`
                          : 'Consultar'}
                        {' · '}{catProducts.length} productos
                      </span>
                      <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                        Ver más →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Card extra: Instalación */}
            <Link
              href="/instalacion"
              className="group flex flex-col overflow-hidden rounded-xl bg-primary text-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="flex h-48 items-center justify-center bg-primary-light/30">
                <svg className="h-16 w-16 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m0 0L3.34 8.09A2.25 2.25 0 014.93 4.34l8.09 4.08m-1.6 6.75l6.75-1.6a2.25 2.25 0 001.6-3.66l-4.08-8.09A2.25 2.25 0 0012.93 1l-1.6 6.75" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                  Servicio de Instalación
                </h3>
                <p className="mt-2 flex-1 text-sm text-white/70">
                  Equipo profesional en Barcelona y red de instaladores certificados en toda España.
                  Presupuesto sin compromiso.
                </p>
                <div className="mt-4">
                  <span className="text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                    Más información →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          COBERTURA — PRINCIPALES CIUDADES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
              Suelos PVC en Toda España
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-light)]">
              Cubrimos más de {totalLocations} ciudades y barrios en toda España. Envío directo desde nuestro almacén de Barcelona.
            </p>
          </div>

          {/* Ciudades destacadas */}
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.isBcn ? city.slug : city.slug}`}
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-accent hover:shadow-md"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-primary">{city.name}</span>
                  <span className="block text-xs text-[var(--color-text-light)]">Ver suelos PVC</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Comunidades */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {communityGroups.map((group) => (
              <div key={group.name}>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
                  {group.name}
                </h3>
                <ul className="space-y-1.5">
                  {group.cities.map((city) => (
                    <li key={city} className="text-sm text-[var(--color-text-light)] hover:text-accent transition-colors">
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[var(--color-text-light)]">
              Y más de {totalLocations - 50} ciudades adicionales en toda España.{' '}
              <Link href="/contacto" className="font-medium text-accent hover:underline">
                Consulta tu ciudad
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TESTIMONIOS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-alt py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />
            <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--color-text-light)]">
              Más de 2.500 clientes satisfechos en toda España. Valoración media de 4,8/5.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.name} className="flex flex-col rounded-xl bg-white p-6 shadow-md">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="flex-1 text-[var(--color-text-light)]">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <p className="font-semibold text-primary">{t.name}</p>
                  <p className="text-sm text-[var(--color-text-light)]">
                    {t.city} · {t.product}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BLOG PREVIEW
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
              Guías y Consejos
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Cómo elegir el mejor suelo PVC para tu hogar',
                excerpt: 'Guía completa para seleccionar entre vinílico click, SPC, losetas y más opciones según tu espacio y presupuesto.',
                category: 'Guías',
              },
              {
                title: 'Suelo PVC vs Parquet: ¿Cuál es mejor?',
                excerpt: 'Comparativa detallada de precio, durabilidad, mantenimiento e instalación entre suelos PVC y parquet tradicional.',
                category: 'Comparativas',
              },
              {
                title: 'Instalar suelo vinílico click paso a paso',
                excerpt: 'Tutorial completo para instalar tú mismo suelo vinílico click sin necesidad de obras ni herramientas especiales.',
                category: 'Tutoriales',
              },
            ].map((post) => (
              <article
                key={post.title}
                className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary/5 to-primary-light/10">
                  <svg className="h-12 w-12 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-2 inline-block self-start rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-primary">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-[var(--color-text-light)]">{post.excerpt}</p>
                  <span className="mt-3 text-sm font-medium text-accent">Leer más →</span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Ver Todos los Artículos
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            ¿Listo para renovar tu suelo?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Pide tu presupuesto gratuito y sin compromiso. Te respondemos en menos de 24 horas con
            la mejor oferta personalizada para tu proyecto.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/presupuesto"
              className="inline-flex items-center rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-accent-hover"
            >
              Pide Presupuesto Gratis
            </Link>
            <a
              href="tel:+34934123456"
              className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              934 123 456
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Sin compromiso · Respuesta en 24h · Presupuesto gratuito · Envío a toda España
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
