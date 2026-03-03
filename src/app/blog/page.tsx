import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog VentaPVC: Guías, Consejos y Tendencias en Suelos PVC",
  description:
    "Artículos, guías de instalación, comparativas y tendencias en suelos de PVC. Todo lo que necesitas saber para elegir, instalar y mantener tu suelo vinílico.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Blog VentaPVC: Guías, Consejos y Tendencias en Suelos PVC
      </h1>
      <div className="mt-4 h-1 w-20 rounded-full bg-accent" />

      <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-light)]">
        Bienvenido al blog de VentaPVC. Aquí encontrarás artículos detallados
        sobre los distintos tipos de suelos de PVC, guías paso a paso para la
        instalación, comparativas de productos y las últimas tendencias en
        diseño de interiores. Nuestro objetivo es ayudarte a tomar la mejor
        decisión para tu proyecto.
      </p>

      {/* Article grid */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Artículos Recientes
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              {/* Gradient placeholder header */}
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 px-6">
                <span className="text-center text-sm font-semibold text-primary/60">
                  {article.category}
                </span>
              </div>

              <div className="p-6">
                <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                  {article.category}
                </span>
                <h3 className="mt-2 font-bold text-primary transition-colors group-hover:text-accent line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-light)] line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-text-light)]">
                  <time dateTime={article.publishedDate}>
                    {new Date(article.publishedDate).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <span>{article.readingTime} min de lectura</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-xl bg-primary p-8 text-center text-white sm:p-12">
        <h2 className="text-2xl font-bold sm:text-3xl">
          ¿Tienes un Proyecto en Mente?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Nuestros expertos en suelos PVC te asesoran de forma gratuita.
          Solicita presupuesto y recibe recomendaciones personalizadas en menos de 24 horas.
        </p>
        <Link
          href="/presupuesto"
          className="mt-8 inline-flex items-center rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-accent-hover"
        >
          Pide Presupuesto Gratis
        </Link>
      </section>
    </div>
  );
}
