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
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Instalación de Suelos PVC: Servicio Profesional
      </h1>
      <div className="mt-4 h-1 w-20 rounded-full bg-accent" />

      <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-light)]">
        En VentaPVC no solo vendemos suelos, también los instalamos.
        Contamos con una red de instaladores profesionales certificados en
        toda España. Nos encargamos de todo el proceso: medición, preparación
        del soporte, instalación y limpieza final. Tú solo tienes que
        disfrutar del resultado.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Nuestro Servicio Incluye
        </h2>
        <ul className="mt-4 space-y-3 text-[var(--color-text-light)]">
          {[
            'Visita técnica y medición del espacio sin compromiso.',
            'Asesoramiento personalizado sobre el tipo de suelo más adecuado.',
            'Preparación y nivelación del soporte existente.',
            'Instalación profesional con herramientas especializadas.',
            'Colocación de rodapiés y perfiles de transición.',
            'Limpieza completa al finalizar la obra.',
            'Garantía de instalación de hasta 5 años.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Zonas de Cobertura
        </h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Ofrecemos servicio de instalación en toda la península ibérica. Nuestra
          sede central se encuentra en Barcelona, pero contamos con equipos de
          instaladores en las principales ciudades: Madrid, Valencia, Sevilla,
          Málaga, Zaragoza, Bilbao y muchas más. Consulta la disponibilidad en
          tu zona.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Proceso de Trabajo
        </h2>
        <div className="mt-6 space-y-4">
          {[
            { step: '1. Contacto', text: 'Cuéntanos tu proyecto y te asesoramos sobre la mejor opción.' },
            { step: '2. Medición', text: 'Un técnico visita tu espacio para tomar medidas exactas.' },
            { step: '3. Presupuesto', text: 'Recibes un presupuesto cerrado, sin sorpresas.' },
            { step: '4. Instalación', text: 'Nuestro equipo realiza la instalación en la fecha acordada.' },
            { step: '5. Garantía', text: 'Disfrutas de tu nuevo suelo con total tranquilidad.' },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                {item.step.charAt(0)}
              </span>
              <div>
                <span className="font-semibold text-primary">{item.step.slice(3)}</span>
                <p className="mt-1 text-sm text-[var(--color-text-light)]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <Link
          href="/presupuesto"
          className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-accent-hover"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
          Solicitar Presupuesto de Instalación
        </Link>
      </div>
    </div>
  );
}
