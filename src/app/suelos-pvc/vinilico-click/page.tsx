import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Suelos Vinílicos Click: Instalación Fácil sin Obras",
  description:
    "Suelos vinílicos con sistema click para instalar sin adhesivos ni obras. Resistentes al agua, fáciles de colocar y con acabados que imitan madera y piedra natural.",
  alternates: {
    canonical: "/suelos-pvc/vinilico-click",
  },
};

export default function VinilicoClickPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Suelos Vinílicos Click: Instalación Fácil sin Obras
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        Los suelos vinílicos click son la solución preferida para quienes buscan
        renovar su suelo de forma rápida y limpia. Gracias a su sistema de
        ensamblaje machihembrado, las lamas encajan entre sí sin necesidad de
        pegamento, clavos ni herramientas especiales. Puedes instalarlos sobre
        el pavimento existente y empezar a disfrutar de tu nuevo suelo en pocas
        horas.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Características Principales
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-600">
          <li>Sistema de ensamblaje click sin adhesivos.</li>
          <li>Instalación flotante sobre el suelo existente.</li>
          <li>Resistencia al agua y a la humedad.</li>
          <li>Capa de uso de alta durabilidad contra arañazos.</li>
          <li>Acabados realistas que imitan madera, piedra y hormigón.</li>
          <li>Compatible con suelo radiante en la mayoría de modelos.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Usos Recomendados
        </h2>
        <p className="mt-4 text-zinc-600">
          Los suelos vinílicos click son ideales para salones, dormitorios,
          pasillos y oficinas. Muchos modelos cuentan con certificación para
          zonas húmedas, lo que permite su uso en cocinas y baños. Su capacidad
          de absorción acústica también los hace perfectos para viviendas con
          vecinos debajo.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Cómo se Instala
        </h2>
        <p className="mt-4 text-zinc-600">
          La instalación es sencilla: prepara una superficie limpia y nivelada,
          coloca una base aislante si es necesario y ve encajando las lamas fila
          a fila. No se necesitan herramientas profesionales, basta con un
          cúter, una regla y un martillo de goma. Toda la información detallada
          la encontrarás en nuestra guía de instalación.
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
