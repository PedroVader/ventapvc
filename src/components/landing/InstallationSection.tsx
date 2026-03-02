import Link from 'next/link';
import type { Location } from '@/types/location';
import { generateInstallationInfo } from '@/lib/generateContent';

type InstallationSectionProps = {
  location: Location;
};

const steps = [
  {
    number: 1,
    title: 'Presupuesto',
    description:
      'Solicita tu presupuesto gratuito online o por teléfono. Te asesoramos sobre el suelo ideal para tu vivienda y te enviamos un presupuesto cerrado sin compromiso.',
  },
  {
    number: 2,
    title: 'Visita técnica',
    description:
      'Un técnico cualificado visita tu vivienda para evaluar el subsuelo, tomar medidas exactas y confirmar los detalles del proyecto. Sin coste adicional.',
  },
  {
    number: 3,
    title: 'Instalación',
    description:
      'Nuestro equipo profesional instala tu nuevo suelo PVC en 1 a 3 días. Sin obras, sin escombros y con limpieza final incluida. Garantía de 2 años.',
  },
];

export default function InstallationSection({
  location,
}: InstallationSectionProps) {
  const installationHtml = generateInstallationInfo(location);

  return (
    <section id="instalacion" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            Instalación de Suelos PVC en {location.name}
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />
        </div>

        {/* Installation content */}
        <div
          className="prose prose-lg mx-auto mt-10 max-w-4xl text-[var(--color-text-light)] prose-headings:text-primary prose-p:leading-relaxed prose-strong:text-primary"
          dangerouslySetInnerHTML={{ __html: installationHtml }}
        />

        {/* 3-step process */}
        <div className="mx-auto mt-16 max-w-5xl">
          <h3 className="text-center text-xl font-bold text-primary sm:text-2xl">
            Nuestro proceso en 3 pasos
          </h3>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Connector line (visible on md+) */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute top-10 left-[calc(50%+2rem)] hidden h-0.5 w-[calc(100%-4rem)] bg-gradient-to-r from-accent to-accent/30 md:block"
                  />
                )}

                {/* Step number circle */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent text-2xl font-extrabold text-white shadow-lg shadow-accent/25">
                  {step.number}
                </div>

                {/* Step content */}
                <h4 className="mt-6 text-lg font-bold text-primary">
                  {step.title}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-light)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/presupuesto"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
          >
            Solicitar Presupuesto de Instalación
          </Link>

          <p className="mt-4 text-sm text-[var(--color-text-light)]">
            Presupuesto gratuito y sin compromiso. Respuesta en menos de 24
            horas.
          </p>
        </div>
      </div>
    </section>
  );
}
