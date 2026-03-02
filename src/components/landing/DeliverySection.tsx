import type { Location } from '@/types/location';
import { generateDeliveryInfo } from '@/lib/generateContent';

type DeliverySectionProps = {
  location: Location;
};

export default function DeliverySection({ location }: DeliverySectionProps) {
  const deliveryHtml = generateDeliveryInfo(location);

  return (
    <section id="envio" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            Envío de Suelos PVC a {location.name}
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />
        </div>

        {/* Delivery content */}
        <div
          className="prose prose-lg mx-auto mt-10 max-w-4xl text-[var(--color-text-light)] prose-headings:text-primary prose-h3:text-xl prose-h3:font-bold prose-p:leading-relaxed prose-strong:text-primary"
          dangerouslySetInnerHTML={{ __html: deliveryHtml }}
        />

        {/* Highlight box: delivery time + free shipping */}
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            {/* Delivery time icon + text */}
            <div className="flex flex-1 items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white"
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-lg font-bold text-primary">
                  Plazo de entrega en {location.name}
                </p>
                <p className="mt-1 text-2xl font-extrabold text-accent">
                  {location.deliveryTime}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-light)]">
                  Para productos en stock
                </p>
              </div>
            </div>

            {/* Divider */}
            <div
              aria-hidden="true"
              className="h-px w-full bg-accent/20 sm:h-auto sm:w-px sm:self-stretch"
            />

            {/* Free shipping threshold */}
            <div className="flex flex-1 items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white"
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
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </span>
              <div>
                <p className="text-lg font-bold text-primary">
                  Envío gratuito
                </p>
                <p className="mt-1 text-2xl font-extrabold text-accent">
                  Pedidos +500&nbsp;&euro;
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-light)]">
                  En península y Baleares
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust icons row */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Insured shipping */}
            <div className="flex items-center gap-4 rounded-lg border border-gray-100 bg-bg-alt p-5 shadow-sm">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </span>
              <div>
                <p className="font-bold text-primary">Envío asegurado</p>
                <p className="mt-0.5 text-sm text-[var(--color-text-light)]">
                  Tu pedido está cubierto ante cualquier incidencia durante el
                  transporte. Reposición inmediata sin coste.
                </p>
              </div>
            </div>

            {/* Real-time tracking */}
            <div className="flex items-center gap-4 rounded-lg border border-gray-100 bg-bg-alt p-5 shadow-sm">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </span>
              <div>
                <p className="font-bold text-primary">
                  Seguimiento en tiempo real
                </p>
                <p className="mt-0.5 text-sm text-[var(--color-text-light)]">
                  Recibe tu número de seguimiento por SMS y email. Rastrea tu
                  pedido en cada paso hasta la entrega en {location.name}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
