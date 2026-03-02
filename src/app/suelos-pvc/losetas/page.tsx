import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Losetas de PVC: Diseño Modular para Cualquier Espacio",
  description:
    "Losetas de PVC modulares con sistema click o autoadhesivo. Infinitas combinaciones de diseño, fácil reposición y resistencia profesional para hogares y comercios.",
  alternates: {
    canonical: "/suelos-pvc/losetas",
  },
};

export default function LosetasPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Losetas de PVC: Diseño Modular para Cualquier Espacio
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        Las losetas de PVC ofrecen una flexibilidad de diseño que ningún otro
        formato puede igualar. Disponibles en formas cuadradas y rectangulares,
        permiten crear patrones personalizados combinando colores y texturas.
        Si una pieza se daña, se sustituye individualmente sin afectar al
        resto del pavimento.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Características Destacadas
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-600">
          <li>Formato modular: reposición pieza a pieza.</li>
          <li>Combinación libre de colores y acabados.</li>
          <li>Disponibles con sistema click o autoadhesivo.</li>
          <li>Resistentes al agua, al desgaste y a productos químicos.</li>
          <li>Aptas para tráfico comercial e industrial.</li>
          <li>Fácil transporte y almacenamiento.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Formatos Disponibles
        </h2>
        <p className="mt-4 text-zinc-600">
          Trabajamos con losetas de 30x30 cm, 45x45 cm y 60x60 cm, así como
          formatos rectangulares que imitan lamas de madera. Los espesores van
          desde 2 mm para uso doméstico ligero hasta 5 mm para entornos
          industriales. Todos los modelos incluyen tratamiento superficial
          antideslizante.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Diseños y Acabados
        </h2>
        <p className="mt-4 text-zinc-600">
          Nuestra colección de losetas incluye imitaciones de mármol, pizarra,
          cemento pulido y terrazo. También ofrecemos acabados lisos en colores
          sólidos para espacios minimalistas o comerciales que requieran un
          aspecto uniforme y profesional.
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
