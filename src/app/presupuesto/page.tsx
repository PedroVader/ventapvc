import type { Metadata } from "next";

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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Pide Presupuesto Gratis para Suelos PVC
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        Obtén un presupuesto personalizado y sin compromiso para tu proyecto de
        suelos de PVC. Solo necesitamos unos datos básicos sobre tu espacio y
        te respondemos en menos de 24 horas laborables con un precio cerrado que
        incluye material, transporte e instalación si la necesitas.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Qué Necesitamos para Presupuestarte
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-600">
          <li>Superficie aproximada en metros cuadrados.</li>
          <li>Tipo de estancia (vivienda, local comercial, oficina, etc.).</li>
          <li>Tipo de suelo deseado (click, SPC, rollo, losetas o autoadhesivo).</li>
          <li>Si necesitas servicio de instalación profesional.</li>
          <li>Población y código postal de entrega.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Formulario de Presupuesto
        </h2>
        <p className="mt-4 text-zinc-600">
          El formulario interactivo estará disponible próximamente. Mientras
          tanto, puedes enviarnos tu solicitud directamente por correo
          electrónico o llamarnos por teléfono para recibir atención inmediata.
        </p>
        <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-8 text-center">
          <p className="text-lg font-medium text-zinc-900">
            Escríbenos a info@ventapvc.com
          </p>
          <p className="mt-2 text-zinc-600">
            o llámanos al teléfono de atención al cliente
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Nuestro Compromiso
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-600">
          <li>Respuesta en menos de 24 horas laborables.</li>
          <li>Precio cerrado sin costes ocultos.</li>
          <li>Asesoramiento técnico incluido.</li>
          <li>Sin compromiso de compra.</li>
          <li>Envío de muestras gratuitas bajo petición.</li>
        </ul>
      </section>
    </div>
  );
}
