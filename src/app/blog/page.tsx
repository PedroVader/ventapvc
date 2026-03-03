import type { Metadata } from "next";

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

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Artículos Recientes
        </h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Estamos preparando contenido de calidad para ayudarte con tu proyecto
          de suelos. Próximamente publicaremos guías de instalación, consejos de
          mantenimiento y comparativas entre distintos tipos de suelos PVC.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Categorías del Blog
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { title: 'Guías de Instalación', text: 'Paso a paso para instalar cada tipo de suelo de PVC.' },
            { title: 'Comparativas', text: 'SPC vs vinílico click, rollo vs losetas y más.' },
            { title: 'Mantenimiento y Cuidados', text: 'Cómo limpiar y conservar tus suelos en perfecto estado.' },
            { title: 'Tendencias', text: 'Colores, texturas y estilos que marcan tendencia este año.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-light)]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Suscríbete a Nuestro Boletín
        </h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Recibe en tu correo los nuevos artículos, ofertas exclusivas y
          consejos de expertos. Sin spam, solo contenido útil para tu proyecto
          de suelos.
        </p>
      </section>
    </div>
  );
}
