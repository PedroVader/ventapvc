import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  products,
  categories,
  getProductBySlug,
  getCategoryBySlug,
} from '@/data/products';

type Params = { category: string; product: string };

export function generateStaticParams(): Params[] {
  return products.map((p) => ({
    category: p.categorySlug,
    product: p.slug,
  }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const product = getProductBySlug(params.product);
  if (!product) return {};

  const category = getCategoryBySlug(product.categorySlug);
  const title = `${product.name} — Suelo PVC ${category?.name ?? ''} | VentaPVC`;
  const description = product.shortDescription;

  return {
    title,
    description,
    alternates: { canonical: `/suelos-pvc/${product.categorySlug}/${product.slug}` },
    openGraph: { title, description },
  };
}

function SpecRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <tr className="border-b border-gray-100">
      <td className="px-4 py-3 text-sm font-medium text-primary">{label}</td>
      <td className="px-4 py-3 text-sm text-[var(--color-text-light)]">{value}</td>
    </tr>
  );
}

export default function ProductPage({ params }: { params: Params }) {
  const product = getProductBySlug(params.product);
  if (!product || product.categorySlug !== params.category) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  if (!category) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    brand: { '@type': 'Brand', name: product.brand },
    category: `Suelos PVC > ${category.name}`,
    ...(product.pricePerSqm && {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: product.pricePerSqm,
        unitCode: 'MTK',
        availability: 'https://schema.org/InStock',
      },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[var(--color-text-light)]">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/suelos-pvc" className="hover:text-accent transition-colors">Suelos PVC</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={`/suelos-pvc/${category.slug}`} className="hover:text-accent transition-colors">
                {category.name}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-primary">{product.name}</li>
          </ol>
        </nav>

        {/* Product header */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image placeholder */}
          <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/5 to-primary-light/10 p-12">
            <svg
              className="h-32 w-32 text-primary/20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={0.75}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
              />
            </svg>
          </div>

          {/* Product info */}
          <div>
            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {category.name}
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-[var(--color-text-light)]">
              {product.brand}
            </p>

            {product.priceDisplay && (
              <p className="mt-4 text-2xl font-bold text-accent">
                {product.priceDisplay}
              </p>
            )}

            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-light)]">
              {product.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/presupuesto"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-bold text-white shadow-lg transition-colors hover:bg-accent-hover"
              >
                Solicitar Presupuesto
              </Link>
              <a
                href="tel:+34934123456"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 text-base font-bold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Llamar: 934 123 456
              </a>
            </div>
          </div>
        </div>

        {/* Specs and features */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Technical specs */}
          <div>
            <h2 className="text-xl font-bold text-primary">Especificaciones Técnicas</h2>
            <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-accent" />
            <table className="mt-6 w-full">
              <tbody>
                <SpecRow label="Espesor total" value={product.specs.thickness} />
                <SpecRow label="Capa de uso" value={product.specs.wearLayer} />
                <SpecRow label="Ancho de rollo" value={product.specs.width} />
                <SpecRow label="Largo de rollo" value={product.specs.rollLength} />
                <SpecRow label="Formato" value={product.specs.format} />
                <SpecRow label="Reacción al fuego" value={product.specs.fireRating} />
                <SpecRow label="Resistencia al deslizamiento" value={product.specs.slipResistance} />
                <SpecRow label="Reducción acústica" value={product.specs.acoustics} />
              </tbody>
            </table>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-bold text-primary">Características</h2>
            <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-accent" />
            <ul className="mt-6 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-[var(--color-text-light)]">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Best for */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-primary">Ideal Para</h2>
          <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-accent" />
          <div className="mt-6 flex flex-wrap gap-3">
            {product.bestFor.map((use) => (
              <span
                key={use}
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
              >
                {use}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-xl bg-primary p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            ¿Interesado en {product.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Solicita muestras gratuitas, consulta disponibilidad o pide presupuesto personalizado.
            Te respondemos en menos de 24 horas.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/presupuesto"
              className="inline-flex items-center rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-accent-hover"
            >
              Pide Presupuesto Gratis
            </Link>
            <Link
              href={`/suelos-pvc/${category.slug}`}
              className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ver más productos de {category.name}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
