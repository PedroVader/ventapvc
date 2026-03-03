import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Contacto VentaPVC: Atención al Cliente
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        Estamos aquí para ayudarte con cualquier consulta sobre nuestros suelos
        de PVC, tu pedido o nuestro servicio de instalación. Nuestro equipo de
        atención al cliente responde de lunes a viernes en horario comercial.
        Elige el canal que más te convenga.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Canales de Contacto
        </h2>
        <ul className="mt-6 space-y-6">
          <li>
            <h3 className="text-lg font-semibold text-zinc-900">
              Correo Electrónico
            </h3>
            <p className="mt-1 text-zinc-600">
              Escríbenos a{" "}
              <a href="mailto:ventas@disstands.com" className="font-medium text-zinc-900 underline hover:text-accent transition-colors">
                ventas@disstands.com
              </a>{" "}
              (ventas y presupuestos) o a{" "}
              <a href="mailto:moquetas@disstands.com" className="font-medium text-zinc-900 underline hover:text-accent transition-colors">
                moquetas@disstands.com
              </a>{" "}
              (asesoramiento técnico sobre pavimentos) y te responderemos en menos de 24 horas laborables.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold text-zinc-900">Teléfono</h3>
            <p className="mt-1 text-zinc-600">
              Llámanos en horario de lunes a viernes, de 9:00 a 18:00 h.
              Atención directa sin contestadores automáticos.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold text-zinc-900">
              Formulario de Contacto
            </h3>
            <p className="mt-1 text-zinc-600">
              El formulario interactivo estará disponible próximamente en esta
              misma página.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Nuestra Ubicación
        </h2>
        <p className="mt-4 text-zinc-600">
          VentaPVC es una marca de Disstands, con sede en Barcelona. Aunque
          nuestra tienda es principalmente online y realizamos envíos a toda
          España, puedes visitarnos con cita previa para ver muestras de
          nuestros productos.
        </p>
        <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
          <p className="font-medium text-zinc-900">Disstands / VentaPVC</p>
          <p className="mt-1 text-zinc-600">Barcelona, España</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Horario de Atención
        </h2>
        <ul className="mt-4 space-y-2 text-zinc-600">
          <li>
            <span className="font-medium text-zinc-900">Lunes a Viernes:</span>{" "}
            9:00 - 18:00 h
          </li>
          <li>
            <span className="font-medium text-zinc-900">
              Sábados, Domingos y Festivos:
            </span>{" "}
            Cerrado
          </li>
        </ul>
      </section>

      <div className="mt-12">
        <Link
          href="/presupuesto"
          className="inline-block rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
        >
          Solicitar Presupuesto Gratis
        </Link>
      </div>
    </div>
  );
}
