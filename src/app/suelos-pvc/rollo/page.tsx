import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Suelos PVC en Rollo: Económicos y Versátiles",
  description:
    "Suelos de PVC en rollo al mejor precio. Solución económica, impermeable y de fácil instalación para viviendas, comercios y naves industriales.",
  alternates: {
    canonical: "/suelos-pvc/rollo",
  },
};

export default function RolloPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Suelos PVC en Rollo: Económicos y Versátiles
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        El suelo de PVC en rollo es la alternativa más económica para cubrir
        grandes superficies de forma rápida. Se suministra en rollos de
        distintos anchos y se puede recortar a medida, lo que minimiza el
        desperdicio y facilita la instalación en espacios de cualquier forma.
        Disponible en una amplia gama de diseños y espesores.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Ventajas del PVC en Rollo
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-600">
          <li>Precio por metro cuadrado muy competitivo.</li>
          <li>Instalación rápida con o sin adhesivo.</li>
          <li>Superficie continua sin juntas visibles.</li>
          <li>Totalmente impermeable, ideal para zonas húmedas.</li>
          <li>Aislamiento acústico y térmico incorporado.</li>
          <li>Disponible en anchos de 2, 3 y 4 metros.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Aplicaciones Habituales
        </h2>
        <p className="mt-4 text-zinc-600">
          Los suelos en rollo se utilizan habitualmente en viviendas de alquiler,
          locales comerciales, gimnasios, guarderías y naves logísticas. Su
          resistencia al tránsito elevado y al agua los convierte en una opción
          práctica y duradera para entornos de uso intensivo.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Espesores y Calidades
        </h2>
        <p className="mt-4 text-zinc-600">
          Ofrecemos rollos de PVC desde 1,5 mm hasta 4 mm de espesor. A mayor
          grosor, mayor durabilidad y mejor absorción acústica. Los modelos
          comerciales cuentan con capas de uso reforzadas para soportar tráfico
          intenso y mobiliario pesado.
        </p>
      </section>

      <div className="mt-12">
        <Link
          href="/suelos-pvc"
          className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
        >
          &larr; Volver a Suelos de PVC
        </Link>
      </div>
    </div>
  );
}
