import type { Metadata } from "next";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return [];
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} | Blog VentaPVC`,
    description: `Lee nuestro artículo sobre ${title.toLowerCase()}. Guías, consejos y toda la información que necesitas sobre suelos de PVC.`,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-text-light)] hover:text-accent transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Volver al Blog
        </Link>
      </nav>

      <article>
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h1>
          <div className="mt-4 h-1 w-20 rounded-full bg-accent" />
          <p className="mt-4 text-sm text-[var(--color-text-light)]">
            Publicado en el Blog de VentaPVC
          </p>
        </header>

        <section className="mt-8">
          <p className="text-lg leading-relaxed text-[var(--color-text-light)]">
            Este artículo está en preparación. Próximamente encontrarás aquí
            contenido detallado y útil sobre este tema relacionado con suelos de
            PVC.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">
            Contenido en Desarrollo
          </h2>
          <p className="mt-4 text-[var(--color-text-light)]">
            Nuestro equipo de redacción está trabajando en este artículo para
            ofrecerte la información más completa y actualizada. Si tienes alguna
            pregunta mientras tanto, no dudes en contactarnos.
          </p>
        </section>
      </article>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-xl font-bold text-primary">
          Artículos Relacionados
        </h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Próximamente mostraremos aquí artículos relacionados con este tema.
          Mientras tanto, puedes explorar nuestro{" "}
          <Link href="/blog" className="font-medium text-accent underline hover:text-accent-hover transition-colors">
            blog completo
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
