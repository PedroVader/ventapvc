import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  products,
  getProductBySlug,
  getCategoryBySlug,
  getProductsByCategorySlug,
} from '@/data/products';

type Props = { params: Promise<{ category: string; product: string }> };

export function generateStaticParams() {
  return products.map((p) => ({
    category: p.categorySlug,
    product: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product) return {};

  const category = getCategoryBySlug(product.categorySlug);
  const title = `${product.name} — Suelo PVC ${category?.name ?? ''} | Precio y Ficha Técnica`;
  const description = `${product.shortDescription} Ficha técnica, precio y características del ${product.name} de Disstands. Envío a toda España.`;

  return {
    title,
    description,
    alternates: { canonical: `/suelos-pvc/${product.categorySlug}/${product.slug}` },
    openGraph: { title, description, type: 'website' },
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

export default async function ProductPage({ params }: Props) {
  const { category: categorySlug, product: productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product || product.categorySlug !== categorySlug) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  if (!category) notFound();

  const relatedProducts = getProductsByCategorySlug(category.slug).filter(
    (p) => p.slug !== product.slug,
  );

  // JSON-LD: Product
  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: product.brand },
    category: `Suelos PVC > ${category.name}`,
    ...(product.pricePerSqm && {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: product.pricePerSqm,
        unitCode: 'MTK',
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'VentaPVC.com by Disstands' },
      },
    }),
  };

  // JSON-LD: BreadcrumbList
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ventapvc.com' },
      { '@type': 'ListItem', position: 2, name: 'Suelos PVC', item: 'https://ventapvc.com/suelos-pvc' },
      { '@type': 'ListItem', position: 3, name: category.name, item: `https://ventapvc.com/suelos-pvc/${category.slug}` },
      { '@type': 'ListItem', position: 4, name: product.name, item: `https://ventapvc.com/suelos-pvc/${category.slug}/${product.slug}` },
    ],
  };

  // JSON-LD: FAQ (from category, shown on product pages too)
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[var(--color-text-light)]">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-accent transition-colors">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/suelos-pvc" className="hover:text-accent transition-colors">Suelos PVC</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={`/suelos-pvc/${category.slug}`} className="hover:text-accent transition-colors">{category.name}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-primary">{product.name}</li>
          </ol>
        </nav>

        {/* Product header */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product image */}
          <div className="overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-primary-light/10">
            <img
              src={product.image}
              alt={product.name}
              width={800}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product info */}
          <div>
            <Link
              href={`/suelos-pvc/${category.slug}`}
              className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent hover:bg-accent/20 transition-colors"
            >
              {/* Heroicon: tag */}
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
              </svg>
              {category.name}
            </Link>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-[var(--color-text-light)]">
              {product.brand} — Suelo PVC profesional
            </p>

            {product.priceDisplay && (
              <p className="mt-4 flex items-center gap-2 text-2xl font-bold text-accent">
                {/* Heroicon: currency-euro */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
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
                {/* Heroicon: document-text */}
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                Solicitar Presupuesto
              </Link>
              <a
                href="mailto:ventas@disstands.com"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 text-base font-bold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                {/* Heroicon: envelope */}
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                ventas@disstands.com
              </a>
            </div>
          </div>
        </div>

        {/* Specs and features */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Technical specs */}
          <section>
            <h2 className="flex items-center gap-2 text-xl font-bold text-primary">
              {/* Heroicon: clipboard-document-list */}
              <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
              </svg>
              Especificaciones Técnicas
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
            <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full">
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
          </section>

          {/* Features */}
          <section>
            <h2 className="flex items-center gap-2 text-xl font-bold text-primary">
              {/* Heroicon: sparkles */}
              <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
              Características Principales
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
            <ul className="mt-6 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-[var(--color-text-light)]">
                  {/* Heroicon: check-circle */}
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Ideal for */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-bold text-primary">
            {/* Heroicon: building-office */}
            <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
            </svg>
            Ideal Para
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
          <div className="mt-6 flex flex-wrap gap-3">
            {product.bestFor.map((use) => (
              <span
                key={use}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
              >
                {/* Heroicon: check-badge */}
                <svg className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                </svg>
                {use}
              </span>
            ))}
          </div>
        </section>

        {/* FAQ section — always expanded */}
        {category.faqs.length > 0 && (
          <section aria-labelledby="product-faq-heading" className="mt-16">
            <h2 id="product-faq-heading" className="text-2xl font-bold text-primary sm:text-3xl">
              Preguntas Frecuentes
            </h2>
            <div className="mt-2 h-1 w-20 rounded-full bg-accent" />
            <div className="mt-8 space-y-6">
              {category.faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6">
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
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-primary">
              Otros Productos de {category.name}
            </h2>
            <div className="mt-2 h-1 w-20 rounded-full bg-accent" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.slice(0, 3).map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/suelos-pvc/${category.slug}/${rp.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <h3 className="truncate font-bold text-primary transition-colors group-hover:text-accent">
                    {rp.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-light)] line-clamp-2">
                    {rp.shortDescription}
                  </p>
                  {rp.priceDisplay && (
                    <p className="mt-3 text-sm font-bold text-accent">{rp.priceDisplay}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-16 rounded-xl bg-primary p-8 text-center text-white sm:p-12">
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
        </section>
      </article>
    </>
  );
}
