import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso de VentaPVC.com. Condiciones generales de venta, envío, devoluciones y garantía de suelos de PVC.",
  alternates: {
    canonical: "/terminos-y-condiciones",
  },
};

export default function TerminosCondicionesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Términos y Condiciones
      </h1>
      <div className="mt-4 h-1 w-20 rounded-full bg-accent" />

      <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-light)]">
        Los presentes términos y condiciones regulan el uso del sitio web
        VentaPVC.com y las condiciones generales de compra de productos y
        servicios ofrecidos por Disstands S.L.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Identificación del Vendedor</h2>
        <div className="mt-4 rounded-xl border border-gray-200 bg-bg-alt p-6">
          <p className="font-semibold text-primary">Disstands S.L.</p>
          <p className="mt-1 text-[var(--color-text-light)]">Barcelona, España</p>
          <p className="mt-1 text-[var(--color-text-light)]">Email: ventas@disstands.com</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Condiciones de Compra</h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Los precios publicados en VentaPVC.com incluyen IVA salvo indicación
          expresa en contrario. Los gastos de envío se calcularán al realizar
          el pedido y se mostrarán antes de confirmar la compra. Todos los
          presupuestos tienen una validez de 30 días desde su emisión.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Envío y Entrega</h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Los plazos de entrega habituales son de 3 a 7 días laborables para
          península. Para Baleares, Canarias y zonas de difícil acceso, los
          plazos pueden ser superiores. El material viaja asegurado y con
          embalaje reforzado.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Devoluciones y Garantía</h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Dispones de 14 días naturales desde la recepción del pedido para
          ejercer tu derecho de desistimiento, conforme a la legislación
          vigente. El producto debe devolverse en su embalaje original y sin
          haber sido instalado. Los productos a medida o cortados a petición
          del cliente no admiten devolución.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Garantía del Producto</h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Todos nuestros productos cuentan con la garantía legal de 3 años
          conforme a la normativa europea. La garantía cubre defectos de
          fabricación pero no el desgaste natural, daños por uso inadecuado
          o instalación incorrecta.
        </p>
      </section>

      <p className="mt-12 text-sm text-[var(--color-text-light)]">
        Última actualización: marzo 2025
      </p>
    </div>
  );
}
