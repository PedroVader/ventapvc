import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Suelos PVC Autoadhesivos: Instala Tú Mismo",
  description:
    "Suelos de PVC autoadhesivos: despega, coloca y listo. La forma más rápida y sencilla de renovar cualquier suelo. Sin herramientas, sin experiencia previa.",
  alternates: {
    canonical: "/suelos-pvc/autoadhesivo",
  },
};

export default function AutoadhesivoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Suelos PVC Autoadhesivos: Instala Tú Mismo
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        Los suelos de PVC autoadhesivos son la forma más sencilla de transformar
        un espacio. Cada lama o loseta lleva un adhesivo de alta adherencia en
        su parte posterior: solo tienes que retirar el film protector y colocar
        la pieza sobre el suelo existente. No necesitas herramientas
        especiales, experiencia previa ni contratar a un profesional.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Ventajas del Autoadhesivo
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-600">
          <li>Instalación inmediata sin adhesivos adicionales.</li>
          <li>No se necesitan herramientas ni experiencia.</li>
          <li>Se coloca directamente sobre el suelo existente.</li>
          <li>Perfil ultrafino: no interfiere con puertas ni marcos.</li>
          <li>Ideal para reformas rápidas y viviendas de alquiler.</li>
          <li>Variedad de acabados en madera, piedra y cemento.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Preparación de la Superficie
        </h2>
        <p className="mt-4 text-zinc-600">
          Para garantizar una buena adherencia, la superficie debe estar limpia,
          seca, lisa y libre de polvo o grasa. En suelos porosos o irregulares
          se recomienda aplicar una imprimación previa. Sobre baldosas en buen
          estado se puede instalar directamente, siempre que las juntas no sean
          superiores a 2 mm de profundidad.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Dónde Utilizar Suelos Autoadhesivos
        </h2>
        <p className="mt-4 text-zinc-600">
          Estos suelos son perfectos para dormitorios, salones, despachos y
          zonas de paso moderado. También se utilizan con frecuencia en
          apartamentos turísticos y pisos de alquiler por su facilidad de
          instalación y retirada. Para zonas húmedas, recomendamos verificar que
          el modelo elegido cuente con tratamiento impermeable en todas sus capas.
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
