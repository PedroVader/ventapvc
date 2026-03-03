import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticleBySlug, getAllArticleSlugs } from '@/data/blog';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.publishedDate,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  // JSON-LD: Article
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    author: {
      '@type': 'Organization',
      name: 'VentaPVC.com by Disstands',
      url: 'https://ventapvc.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'VentaPVC.com',
      url: 'https://ventapvc.com',
    },
    mainEntityOfPage: `https://ventapvc.com/blog/${article.slug}`,
  };

  // JSON-LD: BreadcrumbList
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ventapvc.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://ventapvc.com/blog' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://ventapvc.com/blog/${article.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[var(--color-text-light)]">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-accent transition-colors">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-primary">{article.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header>
          <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            {article.category}
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-[var(--color-text-light)]">
            <time dateTime={article.publishedDate}>
              {new Date(article.publishedDate).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime} min de lectura</span>
          </div>
          <div className="mt-4 h-1 w-20 rounded-full bg-accent" />
        </header>

        {/* Article content */}
        <div
          className="prose-ventapvc mt-10"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA */}
        <section className="mt-16 rounded-xl bg-primary p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            ¿Necesitas Ayuda con tu Proyecto?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Nuestros expertos en suelos PVC te asesoran de forma gratuita. Cuéntanos
            tu proyecto y recibe un presupuesto personalizado en menos de 24 horas.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/presupuesto"
              className="inline-flex items-center rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-accent-hover"
            >
              Pide Presupuesto Gratis
            </Link>
            <Link
              href="/suelos-pvc"
              className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ver Catálogo de Suelos
            </Link>
          </div>
        </section>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-primary">
              Artículos Relacionados
            </h2>
            <div className="mt-2 h-1 w-20 rounded-full bg-accent" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((ra) => (
                <Link
                  key={ra.slug}
                  href={`/blog/${ra.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <span className="text-xs font-semibold text-accent">{ra.category}</span>
                  <h3 className="mt-2 font-bold text-primary transition-colors group-hover:text-accent line-clamp-2">
                    {ra.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-light)] line-clamp-3">
                    {ra.excerpt}
                  </p>
                  <p className="mt-3 text-sm text-[var(--color-text-light)]">
                    {ra.readingTime} min de lectura
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
