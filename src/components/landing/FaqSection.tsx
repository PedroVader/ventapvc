import type { Location } from '@/types/location';
import { generateFaqs } from '@/lib/generateContent';

export default function FaqSection({ location, faqs: externalFaqs }: { location: Location; faqs?: Array<{ question: string; answer: string }> }) {
  const faqs = externalFaqs ?? generateFaqs(location);

  return (
    <section id="faq" className="bg-bg-alt py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            Preguntas frecuentes sobre suelos PVC en {location.name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-light)]">
            Resolvemos las dudas mas habituales de nuestros clientes en{' '}
            {location.name} sobre suelos de PVC, precios, instalacion y envio.
          </p>
        </div>

        <dl className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 open:shadow-md"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer items-start gap-3 px-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bg-alt text-sm font-bold text-primary transition-colors group-open:bg-accent group-open:text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <dt>
                  <h3 className="text-base font-semibold text-primary sm:text-lg">
                    {faq.question}
                  </h3>
                </dt>
                <svg
                  className="ml-auto mt-1 h-5 w-5 shrink-0 text-[var(--color-text-light)] transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </summary>
              <dd className="px-6 pb-6 pt-0">
                <div className="ml-9 border-t border-gray-100 pt-4">
                  <p className="text-sm leading-relaxed text-[var(--color-text-light)] sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </dd>
            </details>
          ))}
        </dl>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
          <p className="text-[var(--color-text-light)]">
            ¿Tienes otra pregunta que no aparece aqui?
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contacto"
              className="inline-block rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Contactanos
            </a>
            <a
              href="tel:934123456"
              className="inline-block rounded-lg border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Llamar: 934 123 456
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
