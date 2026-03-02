import clsx from 'clsx';

export type PriceProduct = {
  name: string;
  priceMin: number;
  priceMax: number;
  unit: string;
};

type PriceTableProps = {
  products: PriceProduct[];
  className?: string;
};

function formatPrice(value: number): string {
  return value.toLocaleString('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function PriceTable({ products, className }: PriceTableProps) {
  return (
    <div className={clsx('overflow-x-auto rounded-lg shadow-md', className)}>
      <table className="w-full min-w-[480px] border-collapse text-left">
        <thead>
          <tr className="bg-primary text-white">
            <th
              scope="col"
              className="px-6 py-4 text-sm font-semibold tracking-wide"
            >
              Producto
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-semibold tracking-wide text-right"
            >
              Precio mínimo
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-semibold tracking-wide text-right"
            >
              Precio máximo
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-semibold tracking-wide text-right"
            >
              Unidad
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.name}
              className={clsx(
                'border-b border-gray-200 transition-colors hover:bg-primary/5',
                index % 2 === 0 ? 'bg-white' : 'bg-bg-alt',
              )}
            >
              <td className="px-6 py-4 text-sm font-medium text-primary">
                {product.name}
              </td>
              <td className="px-6 py-4 text-sm text-right text-[#4A5568]">
                {formatPrice(product.priceMin)} €
              </td>
              <td className="px-6 py-4 text-sm text-right text-[#4A5568]">
                {formatPrice(product.priceMax)} €
              </td>
              <td className="px-6 py-4 text-sm text-right text-[#4A5568]">
                {product.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
