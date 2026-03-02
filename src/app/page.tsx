import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { products } from '@/data/products';
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
            Venta e instalación de suelos de PVC en toda España. Vinílico click, SPC, losetas, rollo y
            autoadhesivo. Envío rápido, precios de fábrica y más de {totalLocations} ciudades cubiertas.
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
              Tipos de Suelos PVC
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-light)]">
              Encuentra el suelo perfecto para tu hogar o negocio. Todas las opciones disponibles con envío a toda España.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/suelos-pvc/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/5 to-primary-light/10">
                  {product.slug === 'vinilico-click' && (
                    <svg className="h-16 w-16 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>
                  )}
                  {product.slug === 'rollo' && (
                    <svg className="h-16 w-16 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                  )}
                  {product.slug === 'spc' && (
                    <svg className="h-16 w-16 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  )}
                  {product.slug === 'losetas' && (
                    <svg className="h-16 w-16 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                  )}
                  {product.slug === 'autoadhesivo' && (
                    <svg className="h-16 w-16 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 00-.668-.668 1.65 1.65 0 00-1.647 1.647v.992M6.9 7.575V12m6.27 4.318V4.575" />
                    </svg>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-[var(--color-text-light)]">
                    {product.description.length > 120
                      ? product.description.slice(0, 120).trim() + '…'
                      : product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-accent">
                      Desde {product.priceRange.min.toLocaleString('es-ES', { minimumFractionDigits: 2 })}&nbsp;€/m²
                    </span>
                    <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                      Ver más →
                    </span>
                  </div>
                </div>
              </Link>
            ))}

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
