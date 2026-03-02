import type { Location } from '@/types/location';
import { getLocationBySlug } from '@/data/locations';
import Link from 'next/link';

function getLocationUrl(loc: Location): string {
  if (loc.isBcnCity) {
    return `/suelos-pvc-barcelona/${loc.slug}`;
  }
  return `/suelos-pvc-${loc.slug}`;
}

export default function NearbySection({ location }: { location: Location }) {
  const nearbyLocations = location.nearbyCities
    .map((slug) => getLocationBySlug(slug))
    .filter((loc): loc is Location => loc !== undefined);

  if (nearbyLocations.length === 0) {
    return null;
  }

  return (
    <section id="ciudades-cercanas" className="bg-bg-alt py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            Suelos PVC en ciudades cercanas a {location.name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-light)]">
            Tambien ofrecemos venta, envio e instalacion de suelos de PVC en
            estas localidades cercanas a {location.name}.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 sm:pb-0 md:grid md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
          {nearbyLocations.map((nearby) => (
            <Link
              key={nearby.slug}
              href={getLocationUrl(nearby)}
              prefetch={true}
              className="group flex min-w-[200px] shrink-0 flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-accent/30 hover:shadow-md md:min-w-0"
            >
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-alt text-sm transition-colors group-hover:bg-accent group-hover:text-white"
                  aria-hidden="true"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <h3 className="text-base font-semibold text-primary transition-colors group-hover:text-accent">
                  {nearby.name}
                </h3>
              </div>

              <p className="text-sm text-[var(--color-text-light)]">
                {nearby.province}
              </p>

              <p className="mt-2 text-xs text-[var(--color-text-light)]">
                Envio en {nearby.deliveryTime}
              </p>

              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:text-accent-hover">
                Ver suelos PVC
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
