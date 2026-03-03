import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Envío a Domicilio de Suelos PVC en Toda España",
  description:
    "Envío rápido de suelos de PVC a toda España. Entrega a pie de obra, seguimiento del pedido y embalaje protector. Consulta plazos y tarifas de envío.",
  alternates: {
    canonical: "/envio",
  },
};

export default function EnvioPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Envío a Domicilio de Suelos PVC en Toda España
      </h1>
      <div className="mt-4 h-1 w-20 rounded-full bg-accent" />

      <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-light)]">
        Enviamos suelos de PVC a toda la península ibérica e islas. Nuestro
        almacén se encuentra en Barcelona, lo que nos permite ofrecer plazos de
        entrega competitivos y un embalaje cuidado para que tu pedido llegue en
        perfecto estado.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Condiciones de Envío
        </h2>
        <ul className="mt-4 space-y-3 text-[var(--color-text-light)]">
          {[
            'Entrega a pie de obra o domicilio en toda España.',
            'Plazo de entrega habitual: 3-7 días laborables.',
            'Embalaje reforzado para proteger el material durante el transporte.',
            'Seguimiento del pedido en tiempo real.',
            'Envío gratuito en pedidos superiores a un mínimo (consultar).',
            'Posibilidad de entrega urgente bajo petición.',
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
          Zonas de Entrega
        </h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Realizamos envíos a toda la España peninsular, Baleares y Canarias.
          Los plazos pueden variar según la zona de entrega. Para envíos a
          islas o zonas de difícil acceso, consulta disponibilidad y tarifas
          con nuestro equipo comercial.
        </p>
      </section>

      <div className="mt-12">
        <Link
          href="/presupuesto"
          className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-accent-hover"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
          Solicitar Presupuesto con Envío
        </Link>
      </div>
    </div>
  );
}
