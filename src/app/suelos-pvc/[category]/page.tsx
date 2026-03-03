import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  categories,
  getCategoryBySlug,
  getProductsByCategorySlug,
} from '@/data/products';

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: `/suelos-pvc/${category.slug}` },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategorySlug(category.slug);

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ventapvc.com' },
      { '@type': 'ListItem', position: 2, name: 'Suelos PVC', item: 'https://ventapvc.com/suelos-pvc' },
      { '@type': 'ListItem', position: 3, name: category.name, item: `https://ventapvc.com/suelos-pvc/${category.slug}` },
    ],
  };

  const faqLd = category.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: category.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

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

        {/* H1 + intro */}
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Suelos PVC para {category.name}: {products.length} Productos Disstands
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--color-text-light)]">
            {category.longDescription}
          </p>
          <div className="mt-6 h-1 w-20 rounded-full bg-accent" />
        </header>

        {/* Products grid */}
        <section aria-labelledby="productos-heading" className="mt-12">
          <h2 id="productos-heading" className="sr-only">Productos de {category.name}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/suelos-pvc/${category.slug}/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-primary-light/10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={250}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.priceDisplay && (
                    <span className="absolute right-3 top-3 max-w-[60%] truncate rounded-full bg-accent px-3 py-1 text-sm font-bold text-white shadow">
                      {product.priceDisplay}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="truncate text-lg font-bold text-primary transition-colors group-hover:text-accent">
                    {product.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-light)] line-clamp-3">
                    {product.shortDescription}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {product.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[var(--color-text-light)]">
                        {/* Heroicon: check */}
                        <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg>
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-4">
                    {product.priceDisplay ? (
                      <span className="min-w-0 truncate text-base font-bold text-accent">{product.priceDisplay}</span>
                    ) : (
                      <span className="text-sm text-[var(--color-text-light)]">Consultar precio</span>
                    )}
                    <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                      Ver producto
                      {/* Heroicon: arrow-right */}
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ section — always expanded */}
        {category.faqs.length > 0 && (
          <section aria-labelledby="faq-heading" className="mt-16">
            <h2 id="faq-heading" className="text-2xl font-bold text-primary sm:text-3xl">
              Preguntas Frecuentes sobre Suelos PVC para {category.name}
            </h2>
            <div className="mt-2 h-1 w-20 rounded-full bg-accent" />
            <div className="mt-8 space-y-6">
              {category.faqs.map((faq) => (
                <article key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="flex items-start gap-3 text-lg font-semibold text-primary">
                    {/* Heroicon: question-mark-circle */}
                    <svg className="mt-0.5 h-6 w-6 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    {faq.question}
                  </h3>
                  <p className="mt-3 pl-9 text-[var(--color-text-light)] leading-relaxed">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-16 rounded-xl bg-primary p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            ¿Necesitas asesoramiento para suelos PVC de {category.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Nuestro equipo técnico te ayuda a elegir el pavimento PVC ideal para tu proyecto.
            Presupuesto gratuito, muestras sin coste y respuesta en menos de 24 horas.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/presupuesto"
              className="inline-flex items-center rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-accent-hover"
            >
              {/* Heroicon: document-text */}
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              Pide Presupuesto Gratis
            </Link>
            <a
              href="mailto:ventas@disstands.com"
              className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {/* Heroicon: envelope */}
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              ventas@disstands.com
            </a>
            <a
              href="mailto:moquetas@disstands.com"
              className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {/* Heroicon: envelope */}
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              moquetas@disstands.com
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
