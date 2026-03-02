import Link from 'next/link';
import type { Location } from '@/types/location';
import { categories, getProductsByCategorySlug } from '@/data/products';

type CatalogSectionProps = {
  location: Location;
};

export default function CatalogSection({ location }: CatalogSectionProps) {
  return (
    <section id="catalogo" className="bg-bg-alt">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            Catálogo de Suelos PVC para {location.name}
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-light)]">
            Todos nuestros productos están disponibles con envío directo a{' '}
            {location.name} en un plazo de {location.deliveryTime}.
          </p>
        </div>

        {/* Category grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const catProducts = getProductsByCategorySlug(cat.slug);
            return (
              <Link
                key={cat.slug}
                href={`/suelos-pvc/${cat.slug}`}
                className="group flex flex-col rounded-xl bg-white shadow-md transition-shadow duration-200 hover:shadow-lg"
              >
                {/* Category header */}
                <div className="relative h-40 w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="flex h-full items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="h-16 w-16 text-primary/20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                      />
                    </svg>
                  </div>

                  {/* Product count badge */}
                  <span className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-sm font-bold text-white shadow">
                    {catProducts.length} productos
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-primary group-hover:text-primary-light sm:text-xl">
                    {cat.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-light)]">
                    {cat.description.length > 160
                      ? cat.description.substring(0, 160).trim() + '...'
                      : cat.description}
                  </p>

                  {/* Product names preview */}
                  <ul className="mt-4 space-y-1">
                    {catProducts.slice(0, 3).map((product) => (
                      <li
                        key={product.slug}
                        className="flex items-start gap-2 text-xs text-[var(--color-text-light)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{product.name}{product.priceDisplay ? ` — ${product.priceDisplay}` : ''}</span>
                      </li>
                    ))}
                    {catProducts.length > 3 && (
                      <li className="text-xs text-accent font-medium ml-5">
                        +{catProducts.length - 3} más
                      </li>
                    )}
                  </ul>

                  {/* CTA */}
                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-xs text-[var(--color-text-light)]">
                        Categoría
                      </p>
                      <p className="text-base font-bold text-primary">
                        {cat.name}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors group-hover:text-accent-hover">
                      Ver productos
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
