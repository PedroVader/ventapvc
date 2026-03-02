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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Sobre Nosotros: VentaPVC.com by Disstands
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        VentaPVC.com es la tienda online de suelos de PVC de Disstands, empresa
        con sede en Barcelona especializada en la distribución e instalación de
        pavimentos vinílicos. Nacimos con un objetivo claro: ofrecer suelos de
        PVC de alta calidad a precios justos, con asesoramiento profesional y
        un servicio de entrega rápido en toda España.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Nuestra Misión
        </h2>
        <p className="mt-4 text-zinc-600">
          Democratizar el acceso a suelos de PVC de calidad profesional.
          Creemos que renovar un suelo no debería ser un proceso complicado ni
          excesivamente costoso. Por eso trabajamos directamente con fabricantes
          europeos para eliminar intermediarios y ofrecer los mejores precios
          sin renunciar a la calidad.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Qué Nos Diferencia
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-600">
          <li>
            Precios de fábrica gracias a acuerdos directos con fabricantes.
          </li>
          <li>
            Asesoramiento técnico personalizado antes, durante y después de la
            compra.
          </li>
          <li>
            Red de instaladores profesionales certificados en toda España.
          </li>
          <li>
            Envío rápido desde nuestro almacén en Barcelona.
          </li>
          <li>
            Muestras gratuitas para que compruebes la calidad antes de comprar.
          </li>
          <li>
            Garantía completa en todos nuestros productos.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Disstands: La Empresa Detrás de VentaPVC
        </h2>
        <p className="mt-4 text-zinc-600">
          Disstands es una empresa barcelonesa dedicada a la distribución de
          materiales de construcción y acabados para el hogar. Con años de
          experiencia en el sector, hemos identificado la creciente demanda de
          suelos de PVC de calidad y hemos creado VentaPVC.com como canal
          especializado para atenderla de forma eficiente.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Nuestros Valores
        </h2>
        <ul className="mt-4 space-y-4 text-zinc-600">
          <li>
            <span className="font-medium text-zinc-900">Transparencia:</span>{" "}
            Precios claros, condiciones sin letra pequeña.
          </li>
          <li>
            <span className="font-medium text-zinc-900">Calidad:</span>{" "}
            Solo trabajamos con fabricantes que cumplen normativas europeas.
          </li>
          <li>
            <span className="font-medium text-zinc-900">Cercanía:</span>{" "}
            Atención humana y personalizada en cada consulta.
          </li>
          <li>
            <span className="font-medium text-zinc-900">Sostenibilidad:</span>{" "}
            Priorizamos productos reciclables y fabricantes con certificaciones
            medioambientales.
          </li>
        </ul>
      </section>

      <div className="mt-12 flex gap-4">
        <Link
          href="/contacto"
          className="inline-block rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
        >
          Contactar con Nosotros
        </Link>
        <Link
          href="/presupuesto"
          className="inline-block rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
        >
          Pedir Presupuesto
        </Link>
      </div>
    </div>
  );
}
