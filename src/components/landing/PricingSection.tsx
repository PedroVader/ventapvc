import Link from 'next/link';
import type { Location } from '@/types/location';
import { categories, getProductsByCategorySlug } from '@/data/products';

type PricingSectionProps = {
  location: Location;
};

function formatPrice(value: number): string {
  return value.toLocaleString('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function PricingSection({ location }: PricingSectionProps) {
  return (
    <section id="precios" className="bg-bg-alt">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            Precios de Suelos PVC en {location.name}
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-light)]">
            Consulta nuestros precios actualizados con envío a {location.name}.
            Todos los precios incluyen IVA.
          </p>
        </div>

        {/* Price table by category */}
        <div className="mx-auto mt-12 max-w-4xl overflow-x-auto rounded-xl shadow-lg">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="bg-primary text-white">
                <th
                  scope="col"
                  className="px-6 py-4 text-sm font-semibold tracking-wide"
                >
                  Categoría
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-sm font-semibold tracking-wide text-center"
                >
                  Productos
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-sm font-semibold tracking-wide text-right"
                >
                  Precio Mín
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-sm font-semibold tracking-wide text-right"
                >
                  Precio Máx
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, index) => {
                const catProducts = getProductsByCategorySlug(cat.slug);
                const withPrices = catProducts.filter((p) => p.pricePerSqm != null);
                const minPrice = withPrices.length > 0
                  ? Math.min(...withPrices.map((p) => p.pricePerSqm!))
                  : null;
                const maxPrice = withPrices.length > 0
                  ? Math.max(...withPrices.map((p) => p.pricePerSqm!))
                  : null;

                return (
                  <tr
                    key={cat.slug}
                    className={`border-b border-gray-200 transition-colors hover:bg-primary/5 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-bg-alt'
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-primary">
                      <Link
                        href={`/suelos-pvc/${cat.slug}`}
                        className="transition-colors hover:text-accent"
                      >
                        {cat.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-[var(--color-text-light)]">
                      {catProducts.length}
                    </td>
                    <td className="px-6 py-4 text-sm text-right text-[var(--color-text-light)]">
                      {minPrice != null
                        ? `${formatPrice(minPrice)}\u00A0€/m²`
                        : 'Consultar'}
                    </td>
                    <td className="px-6 py-4 text-sm text-right text-[var(--color-text-light)]">
                      {maxPrice != null
                        ? `${formatPrice(maxPrice)}\u00A0€/m²`
                        : 'Consultar'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="mx-auto mt-6 max-w-4xl text-center text-sm text-[var(--color-text-light)]">
          Precios por m&sup2; IVA incluido. Instalación desde 8&euro;/m&sup2;.
          Los precios pueden variar según modelo, acabado y cantidad. Solicita
          presupuesto personalizado para tu proyecto en {location.name}.
        </p>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/presupuesto"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
          >
            Solicita Presupuesto Personalizado
          </Link>
        </div>
      </div>
    </section>
  );
}
