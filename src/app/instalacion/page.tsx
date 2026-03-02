import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instalación de Suelos PVC: Servicio Profesional",
  description:
    "Servicio profesional de instalación de suelos de PVC en toda España. Instaladores certificados, garantía incluida y presupuesto sin compromiso.",
  alternates: {
    canonical: "/instalacion",
  },
};

export default function InstalacionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Instalación de Suelos PVC: Servicio Profesional
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        En VentaPVC no solo vendemos suelos, también los instalamos.
        Contamos con una red de instaladores profesionales certificados en
        toda España. Nos encargamos de todo el proceso: medición, preparación
        del soporte, instalación y limpieza final. Tú solo tienes que
        disfrutar del resultado.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Nuestro Servicio Incluye
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-600">
          <li>Visita técnica y medición del espacio sin compromiso.</li>
          <li>Asesoramiento personalizado sobre el tipo de suelo más adecuado.</li>
          <li>Preparación y nivelación del soporte existente.</li>
          <li>Instalación profesional con herramientas especializadas.</li>
          <li>Colocación de rodapiés y perfiles de transición.</li>
          <li>Limpieza completa al finalizar la obra.</li>
          <li>Garantía de instalación de hasta 5 años.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Zonas de Cobertura
        </h2>
        <p className="mt-4 text-zinc-600">
          Ofrecemos servicio de instalación en toda la península ibérica. Nuestra
          sede central se encuentra en Barcelona, pero contamos con equipos de
          instaladores en las principales ciudades: Madrid, Valencia, Sevilla,
          Málaga, Zaragoza, Bilbao y muchas más. Consulta la disponibilidad en
          tu zona.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Proceso de Trabajo
        </h2>
        <ul className="mt-4 space-y-4 text-zinc-600">
          <li>
            <span className="font-medium text-zinc-900">1. Contacto:</span>{" "}
            Cuéntanos tu proyecto y te asesoramos sobre la mejor opción.
          </li>
          <li>
            <span className="font-medium text-zinc-900">2. Medición:</span>{" "}
            Un técnico visita tu espacio para tomar medidas exactas.
          </li>
          <li>
            <span className="font-medium text-zinc-900">3. Presupuesto:</span>{" "}
            Recibes un presupuesto cerrado, sin sorpresas.
          </li>
          <li>
            <span className="font-medium text-zinc-900">4. Instalación:</span>{" "}
            Nuestro equipo realiza la instalación en la fecha acordada.
          </li>
          <li>
            <span className="font-medium text-zinc-900">5. Garantía:</span>{" "}
            Disfrutas de tu nuevo suelo con total tranquilidad.
          </li>
        </ul>
      </section>

      <div className="mt-12">
        <Link
          href="/presupuesto"
          className="inline-block rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
        >
          Solicitar Presupuesto de Instalación
        </Link>
      </div>
    </div>
  );
}
