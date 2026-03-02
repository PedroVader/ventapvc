import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Blog VentaPVC: Guías, Consejos y Tendencias en Suelos PVC
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        Bienvenido al blog de VentaPVC. Aquí encontrarás artículos detallados
        sobre los distintos tipos de suelos de PVC, guías paso a paso para la
        instalación, comparativas de productos y las últimas tendencias en
        diseño de interiores. Nuestro objetivo es ayudarte a tomar la mejor
        decisión para tu proyecto.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Artículos Recientes
        </h2>
        <p className="mt-4 text-zinc-600">
          Estamos preparando contenido de calidad para ayudarte con tu proyecto
          de suelos. Próximamente publicaremos guías de instalación, consejos de
          mantenimiento y comparativas entre distintos tipos de suelos PVC.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Categorías del Blog
        </h2>
        <ul className="mt-4 space-y-3">
          <li>
            <span className="font-medium text-zinc-900">
              Guías de Instalación
            </span>
            <p className="text-sm text-zinc-600">
              Paso a paso para instalar cada tipo de suelo de PVC.
            </p>
          </li>
          <li>
            <span className="font-medium text-zinc-900">Comparativas</span>
            <p className="text-sm text-zinc-600">
              SPC vs vinílico click, rollo vs losetas y más.
            </p>
          </li>
          <li>
            <span className="font-medium text-zinc-900">
              Mantenimiento y Cuidados
            </span>
            <p className="text-sm text-zinc-600">
              Cómo limpiar y conservar tus suelos en perfecto estado.
            </p>
          </li>
          <li>
            <span className="font-medium text-zinc-900">Tendencias</span>
            <p className="text-sm text-zinc-600">
              Colores, texturas y estilos que marcan tendencia este año.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Suscríbete a Nuestro Boletín
        </h2>
        <p className="mt-4 text-zinc-600">
          Recibe en tu correo los nuevos artículos, ofertas exclusivas y
          consejos de expertos. Sin spam, solo contenido útil para tu proyecto
          de suelos.
        </p>
      </section>
    </div>
  );
}
