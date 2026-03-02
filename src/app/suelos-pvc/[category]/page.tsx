import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  categories,
  getCategoryBySlug,
  getProductsByCategorySlug,
} from '@/data/products';

type Params = { category: string };

export function generateStaticParams(): Params[] {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const category = getCategoryBySlug(params.category);
  if (!category) return {};

  const products = getProductsByCategorySlug(category.slug);
  const title = `Suelos PVC ${category.name}: ${products.length} Productos | VentaPVC`;
  const description = category.description;

  return {
    title,
    description,
    alternates: { canonical: `/suelos-pvc/${category.slug}` },
    openGraph: { title, description },
  };
}

export default function CategoryPage({ params }: { params: Params }) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  const products = getProductsByCategorySlug(category.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[var(--color-text-light)]">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/suelos-pvc" className="hover:text-accent transition-colors">Suelos PVC</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-primary">{category.name}</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Suelos PVC para {category.name}
      </h1>

      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--color-text-light)]">
        {category.description}
      </p>

      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />

      {/* Products grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/suelos-pvc/${category.slug}/${product.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
          >
            <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-primary/5 to-primary-light/10">
              <svg
                className="h-16 w-16 text-primary/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                />
              </svg>
              {product.priceDisplay && (
                <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-sm font-bold text-white shadow">
                  {product.priceDisplay}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold text-primary transition-colors group-hover:text-accent">
                {product.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-light)]">
                {product.shortDescription}
              </p>
              <ul className="mt-4 space-y-1">
                {product.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-[var(--color-text-light)]">
                    <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                {product.priceDisplay ? (
                  <span className="text-base font-bold text-accent">{product.priceDisplay}</span>
                ) : (
                  <span className="text-sm text-[var(--color-text-light)]">Consultar precio</span>
                )}
                <span className="text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                  Ver producto →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-xl bg-primary p-8 text-center text-white sm:p-12">
        <h2 className="text-2xl font-bold sm:text-3xl">
          ¿Necesitas asesoramiento para {category.name}?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Nuestro equipo de especialistas te ayuda a elegir el suelo PVC perfecto para tu proyecto.
          Presupuesto gratuito y sin compromiso.
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
            934 123 456
          </a>
        </div>
      </div>
    </div>
  );
}
