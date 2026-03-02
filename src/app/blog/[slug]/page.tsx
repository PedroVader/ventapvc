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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="mb-8">
        <Link
          href="/blog"
          className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
        >
          &larr; Volver al Blog
        </Link>
      </nav>

      <article>
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            {title}
          </h1>
          <p className="mt-4 text-sm text-zinc-500">
            Publicado en el Blog de VentaPVC
          </p>
        </header>

        <section className="mt-8">
          <p className="text-lg leading-8 text-zinc-600">
            Este artículo está en preparación. Próximamente encontrarás aquí
            contenido detallado y útil sobre este tema relacionado con suelos de
            PVC.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Contenido en Desarrollo
          </h2>
          <p className="mt-4 text-zinc-600">
            Nuestro equipo de redacción está trabajando en este artículo para
            ofrecerte la información más completa y actualizada. Si tienes alguna
            pregunta mientras tanto, no dudes en contactarnos.
          </p>
        </section>
      </article>

      <div className="mt-12 border-t border-zinc-200 pt-8">
        <h2 className="text-xl font-semibold text-zinc-900">
          Artículos Relacionados
        </h2>
        <p className="mt-4 text-zinc-600">
          Próximamente mostraremos aquí artículos relacionados con este tema.
          Mientras tanto, puedes explorar nuestro{" "}
          <Link href="/blog" className="font-medium text-zinc-900 underline">
            blog completo
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
