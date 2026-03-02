import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Suelos de PVC: Tipos, Precios y Guía Completa",
  description:
    "Descubre todos los tipos de suelos de PVC: vinílico click, rollo, SPC, losetas y autoadhesivo. Comparativa de precios, características y guía de compra actualizada.",
  alternates: {
    canonical: "/suelos-pvc",
  },
};

const subcategories = [
  {
    href: "/suelos-pvc/vinilico-click",
    name: "Vinílico Click",
    description:
      "Instalación rápida sin adhesivos. Ideal para reformas sin obras.",
  },
  {
    href: "/suelos-pvc/rollo",
    name: "PVC en Rollo",
    description:
      "La opción más económica. Perfecto para grandes superficies.",
  },
  {
    href: "/suelos-pvc/spc",
    name: "Suelos SPC",
    description:
      "Núcleo de piedra caliza. Máxima resistencia al agua y estabilidad dimensional.",
  },
  {
    href: "/suelos-pvc/losetas",
    name: "Losetas de PVC",
    description:
      "Diseño modular con infinitas combinaciones. Fácil reposición pieza a pieza.",
  },
  {
    href: "/suelos-pvc/autoadhesivo",
    name: "PVC Autoadhesivo",
    description:
      "Solo despega y pega. La forma más sencilla de renovar tu suelo.",
  },
];

export default function SuelosPvcPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Suelos de PVC: Tipos, Precios y Guía Completa
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        Los suelos de PVC se han convertido en una de las opciones más populares
        para hogares y locales comerciales en toda España. Combinan una
        resistencia excepcional al agua y al desgaste con una instalación
        sencilla y un mantenimiento mínimo. En VentaPVC te ofrecemos todas las
        variantes disponibles para que encuentres la solución perfecta para tu
        espacio.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Tipos de Suelos PVC
        </h2>
        <p className="mt-4 text-zinc-600">
          Cada tipo de suelo de PVC tiene características únicas que lo hacen
          más adecuado para distintos usos y presupuestos. Explora las
          categorías para encontrar el que mejor se adapta a tu proyecto.
        </p>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {subcategories.map((cat) => (
            <li key={cat.href}>
              <Link
                href={cat.href}
                className="block rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
              >
                <h3 className="text-lg font-semibold text-zinc-900">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">{cat.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Ventajas de los Suelos de PVC
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-600">
          <li>Impermeables: aptos para cocinas, baños y zonas húmedas.</li>
          <li>Instalación rápida sin necesidad de obras.</li>
          <li>Gran variedad de diseños que imitan madera, piedra o cemento.</li>
          <li>Mantenimiento sencillo con limpieza habitual.</li>
          <li>Precio competitivo respecto a otros materiales de alta gama.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Precios Orientativos
        </h2>
        <p className="mt-4 text-zinc-600">
          El precio del suelo de PVC varía según el tipo, el grosor y el acabado
          seleccionado. En general, los suelos en rollo son la opción más
          asequible, mientras que los suelos SPC representan la gama más alta en
          prestaciones y durabilidad. Solicita tu presupuesto personalizado sin
          compromiso.
        </p>
      </section>
    </div>
  );
}
