import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Suelos SPC: Máxima Resistencia y Estabilidad",
  description:
    "Suelos SPC con núcleo de piedra caliza. Máxima estabilidad dimensional, resistencia al agua y compatibilidad con suelo radiante. Ideales para uso residencial y comercial.",
  alternates: {
    canonical: "/suelos-pvc/spc",
  },
};

export default function SpcPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Suelos SPC: Máxima Resistencia y Estabilidad
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        Los suelos SPC (Stone Plastic Composite) representan la evolución más
        avanzada de los suelos vinílicos. Su núcleo rígido de piedra caliza y
        polímero les confiere una estabilidad dimensional excepcional, lo que
        significa que no se dilatan ni se contraen con los cambios de
        temperatura. Son la opción premium dentro de los suelos de PVC.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Por Qué Elegir SPC
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-600">
          <li>Núcleo rígido de piedra caliza: sin dilataciones.</li>
          <li>100 % resistente al agua, apto para cualquier estancia.</li>
          <li>Compatible con calefacción por suelo radiante.</li>
          <li>Capa de uso de alta resistencia (0,3 mm a 0,7 mm).</li>
          <li>Base acústica integrada en muchos modelos.</li>
          <li>Instalación click rápida y sin adhesivos.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          SPC frente a Vinílico Convencional
        </h2>
        <p className="mt-4 text-zinc-600">
          Mientras que el vinílico convencional tiene un núcleo flexible, el SPC
          incorpora un núcleo rígido que aporta mayor resistencia a la
          indentación y a las marcas de muebles pesados. Además, su estabilidad
          permite instalarlo en superficies de hasta 200 m² sin juntas de
          dilatación, algo impensable con otros suelos flotantes.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Uso Residencial y Comercial
        </h2>
        <p className="mt-4 text-zinc-600">
          Los suelos SPC son ideales tanto para viviendas como para locales
          comerciales de tráfico medio-alto. Cuentan con clasificaciones de uso
          que van de AC4 a AC6, lo que garantiza su durabilidad durante décadas
          incluso en zonas de paso intenso.
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
