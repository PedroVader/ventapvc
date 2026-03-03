import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Pide Presupuesto Gratis para Suelos PVC",
  description:
    "Solicita un presupuesto gratuito y sin compromiso para suelos de PVC. Respondemos en menos de 24 horas con precio cerrado para material e instalación.",
  alternates: {
    canonical: "/presupuesto",
  },
};

export default function PresupuestoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Pide Presupuesto Gratis para Suelos PVC
      </h1>
      <div className="mt-4 h-1 w-20 rounded-full bg-accent" />

      <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-light)]">
        Obtén un presupuesto personalizado y sin compromiso para tu proyecto de
        suelos de PVC. Solo necesitamos unos datos básicos sobre tu espacio y
        te respondemos en menos de 24 horas laborables con un precio cerrado que
        incluye material, transporte e instalación si la necesitas.
      </p>

      {/* Formulario de presupuesto */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Formulario de Presupuesto
        </h2>
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <ContactForm formName="presupuesto" showProjectFields />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Nuestro Compromiso
        </h2>
        <ul className="mt-4 space-y-3 text-[var(--color-text-light)]">
          {[
            'Respuesta en menos de 24 horas laborables.',
            'Precio cerrado sin costes ocultos.',
            'Asesoramiento técnico incluido.',
            'Sin compromiso de compra.',
            'Envío de muestras gratuitas bajo petición.',
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

      {/* Contact alternatives */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          ¿Prefieres Contacto Directo?
        </h2>
        <div className="mt-4 rounded-xl border border-gray-200 bg-bg-alt p-6 text-center">
          <p className="text-[var(--color-text-light)]">
            Escríbenos a{" "}
            <a href="mailto:ventas@disstands.com" className="font-medium text-accent underline hover:text-accent-hover transition-colors">ventas@disstands.com</a>
            {" "}o{" "}
            <a href="mailto:moquetas@disstands.com" className="font-medium text-accent underline hover:text-accent-hover transition-colors">moquetas@disstands.com</a>
          </p>
          <p className="mt-2 text-sm text-[var(--color-text-light)]">
            o llámanos al teléfono de atención al cliente
          </p>
        </div>
      </section>
    </div>
  );
}
