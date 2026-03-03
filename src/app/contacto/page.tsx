import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contacto VentaPVC: Atención al Cliente",
  description:
    "Contacta con VentaPVC para resolver tus dudas sobre suelos de PVC. Atención personalizada por teléfono, email y formulario. Estamos en Barcelona.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Contacto VentaPVC: Atención al Cliente
      </h1>
      <div className="mt-4 h-1 w-20 rounded-full bg-accent" />

      <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-light)]">
        Estamos aquí para ayudarte con cualquier consulta sobre nuestros suelos
        de PVC, tu pedido o nuestro servicio de instalación. Nuestro equipo de
        atención al cliente responde de lunes a viernes en horario comercial.
        Elige el canal que más te convenga.
      </p>

      {/* Formulario de contacto */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Formulario de Contacto
        </h2>
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <ContactForm formName="contacto" />
        </div>
      </section>

      {/* Canales de contacto */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Otros Canales de Contacto
        </h2>
        <ul className="mt-6 space-y-6">
          <li className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
              <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Correo Electrónico
            </h3>
            <p className="mt-2 text-[var(--color-text-light)]">
              <a href="mailto:ventas@disstands.com" className="font-medium text-primary underline hover:text-accent transition-colors">
                ventas@disstands.com
              </a>{" "}
              (ventas y presupuestos)
            </p>
          </li>
          <li className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
              <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              Teléfono
            </h3>
            <p className="mt-2 text-[var(--color-text-light)]">
              Llámanos en horario de lunes a viernes, de 9:00 a 18:00 h.
              Atención directa sin contestadores automáticos.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Nuestra Ubicación
        </h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          VentaPVC es una marca de Disstands, con sede en Barcelona. Aunque
          nuestra tienda es principalmente online y realizamos envíos a toda
          España, puedes visitarnos con cita previa para ver muestras de
          nuestros productos.
        </p>
        <div className="mt-6 rounded-xl border border-gray-200 bg-bg-alt p-6">
          <p className="font-semibold text-primary">Disstands / VentaPVC</p>
          <p className="mt-1 text-[var(--color-text-light)]">Barcelona, España</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Horario de Atención
        </h2>
        <ul className="mt-4 space-y-2 text-[var(--color-text-light)]">
          <li>
            <span className="font-medium text-primary">Lunes a Viernes:</span>{" "}
            9:00 - 18:00 h
          </li>
          <li>
            <span className="font-medium text-primary">
              Sábados, Domingos y Festivos:
            </span>{" "}
            Cerrado
          </li>
        </ul>
      </section>

      <div className="mt-12">
        <Link
          href="/presupuesto"
          className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-accent-hover"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
          Solicitar Presupuesto Gratis
        </Link>
      </div>
    </div>
  );
}
