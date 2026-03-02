import type { Location } from '@/types/location';
import {
  generateWhyPvc,
  generateClimateRecommendation,
} from '@/lib/generateContent';

type WhyPvcSectionProps = {
  location: Location;
};

export default function WhyPvcSection({ location }: WhyPvcSectionProps) {
  const whyPvcHtml = generateWhyPvc(location);
  const climateRec = generateClimateRecommendation(location.climate);

  return (
    <section id="por-que-pvc" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
          ¿Por qué elegir suelos de PVC en {location.name}?
        </h2>

        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />

        {/* Main content from generateWhyPvc */}
        <div
          className="prose prose-lg mx-auto mt-10 max-w-4xl text-[var(--color-text-light)] prose-headings:text-primary prose-h2:text-xl prose-h2:font-bold prose-h2:sm:text-2xl prose-p:leading-relaxed prose-li:leading-relaxed prose-strong:text-primary"
          dangerouslySetInnerHTML={{ __html: whyPvcHtml }}
        />

        {/* Climate recommendation box */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-xl border border-primary/10 bg-bg-alt p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </span>

              <div>
                <h3 className="text-lg font-bold text-primary sm:text-xl">
                  Nuestra recomendación para {location.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-accent sm:text-base">
                  {climateRec.recommended}
                </p>

                <p className="mt-3 leading-relaxed text-[var(--color-text-light)]">
                  {climateRec.reason}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
