import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nosotros: VentaPVC.com by Disstands",
  description:
    "Conoce VentaPVC.com, marca de Disstands especializada en la venta e instalación de suelos de PVC en toda España. Sede en Barcelona, envíos a toda la península.",
  alternates: {
    canonical: "/sobre-nosotros",
  },
};

export default function SobreNosotrosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Sobre Nosotros: VentaPVC.com by Disstands
      </h1>
      <div className="mt-4 h-1 w-20 rounded-full bg-accent" />

      <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-light)]">
        VentaPVC.com es la tienda online de suelos de PVC de Disstands, empresa
        con sede en Barcelona especializada en la distribución e instalación de
        pavimentos vinílicos. Nacimos con un objetivo claro: ofrecer suelos de
        PVC de alta calidad a precios justos, con asesoramiento profesional y
        un servicio de entrega rápido en toda España.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Nuestra Misión
        </h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Democratizar el acceso a suelos de PVC de calidad profesional.
          Creemos que renovar un suelo no debería ser un proceso complicado ni
          excesivamente costoso. Por eso trabajamos directamente con fabricantes
          europeos para eliminar intermediarios y ofrecer los mejores precios
          sin renunciar a la calidad.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Qué Nos Diferencia
        </h2>
        <ul className="mt-4 space-y-3 text-[var(--color-text-light)]">
          {[
            'Precios de fábrica gracias a acuerdos directos con fabricantes.',
            'Asesoramiento técnico personalizado antes, durante y después de la compra.',
            'Red de instaladores profesionales certificados en toda España.',
            'Envío rápido desde nuestro almacén en Barcelona.',
            'Muestras gratuitas para que compruebes la calidad antes de comprar.',
            'Garantía completa en todos nuestros productos.',
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
          Disstands: La Empresa Detrás de VentaPVC
        </h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Disstands es una empresa barcelonesa dedicada a la distribución de
          materiales de construcción y acabados para el hogar. Con años de
          experiencia en el sector, hemos identificado la creciente demanda de
          suelos de PVC de calidad y hemos creado VentaPVC.com como canal
          especializado para atenderla de forma eficiente.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Nuestros Valores
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { title: 'Transparencia', text: 'Precios claros, condiciones sin letra pequeña.' },
            { title: 'Calidad', text: 'Solo trabajamos con fabricantes que cumplen normativas europeas.' },
            { title: 'Cercanía', text: 'Atención humana y personalizada en cada consulta.' },
            { title: 'Sostenibilidad', text: 'Priorizamos productos reciclables y fabricantes con certificaciones medioambientales.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-light)]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-accent-hover"
        >
          Contactar con Nosotros
        </Link>
        <Link
          href="/presupuesto"
          className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Pedir Presupuesto
        </Link>
      </div>
    </div>
  );
}
