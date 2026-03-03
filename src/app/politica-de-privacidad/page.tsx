import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de VentaPVC.com. Información sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
  alternates: {
    canonical: "/politica-de-privacidad",
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Política de Privacidad
      </h1>
      <div className="mt-4 h-1 w-20 rounded-full bg-accent" />

      <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-light)]">
        En VentaPVC.com (marca de Disstands S.L.) nos comprometemos a proteger
        tu privacidad. Esta política describe cómo recopilamos, usamos y
        protegemos tus datos personales conforme al Reglamento General de
        Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos
        y Garantía de los Derechos Digitales (LOPDGDD).
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Responsable del Tratamiento</h2>
        <div className="mt-4 rounded-xl border border-gray-200 bg-bg-alt p-6">
          <p className="font-semibold text-primary">Disstands S.L.</p>
          <p className="mt-1 text-[var(--color-text-light)]">Barcelona, España</p>
          <p className="mt-1 text-[var(--color-text-light)]">Email: ventas@disstands.com</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Datos que Recopilamos</h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Podemos recopilar los siguientes datos personales cuando utilizas
          nuestro sitio web o te pones en contacto con nosotros: nombre y
          apellidos, dirección de correo electrónico, número de teléfono,
          dirección postal, datos de navegación y cookies técnicas.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Finalidad del Tratamiento</h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Tus datos se utilizan para: gestionar consultas y solicitudes de
          presupuesto, procesar pedidos y envíos, prestar servicio de atención
          al cliente, enviar comunicaciones comerciales (solo con tu
          consentimiento) y cumplir con obligaciones legales.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Tus Derechos</h2>
        <p className="mt-4 text-[var(--color-text-light)]">
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          limitación, portabilidad y oposición enviando un correo electrónico
          a ventas@disstands.com. Responderemos en un plazo máximo de 30 días.
        </p>
      </section>

      <p className="mt-12 text-sm text-[var(--color-text-light)]">
        Última actualización: marzo 2025
      </p>
    </div>
  );
}
