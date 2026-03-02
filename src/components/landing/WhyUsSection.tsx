import type { Location } from '@/types/location';

interface BenefitCard {
  title: string;
  description: string;
  icon: string;
}

function getBenefits(location: Location): BenefitCard[] {
  const isBcn = location.isBcnCity || location.isBcnMetro;

  return [
    {
      title: 'Precios de fabrica',
      description:
        'Trabajamos directamente con los principales fabricantes europeos (Gerflor, Tarkett, Forbo) sin intermediarios. Esto nos permite ofrecerte precios desde 6,99 euros/m2 con la misma calidad que encontrarias en tiendas especializadas a un coste muy superior.',
      icon: '\uD83C\uDFF7\uFE0F',
    },
    {
      title: `Envio en ${location.deliveryTime}`,
      description: isBcn
        ? `Entrega rapida y asegurada desde nuestro almacen de Barcelona. Al estar en ${location.name}, recibes tu pedido en ${location.deliveryTime}. Envio gratuito para pedidos superiores a ${location.isBcnCity ? '300' : '400'} euros.`
        : `Envio rapido y asegurado desde nuestro almacen central de Barcelona directamente a ${location.name}. Transporte especializado en pavimentos con seguimiento en tiempo real. Portes gratuitos para pedidos superiores a 500 euros.`,
      icon: '\uD83D\uDE9A',
    },
    {
      title: 'Instalacion profesional',
      description: isBcn
        ? `Equipo de instaladores propios con sede en Barcelona. Trabajan a diario en ${location.name} y conocen a la perfeccion las viviendas de tu zona. Visita tecnica gratuita y presupuesto cerrado sin sorpresas.`
        : `Red de instaladores profesionales certificados en la provincia de ${location.province}. Formados directamente por los fabricantes con mas de 5 anos de experiencia. Garantia de 2 anos sobre la mano de obra.`,
      icon: '\uD83D\uDD27',
    },
    {
      title: 'Asesoramiento gratuito',
      description: isBcn
        ? `Nuestros expertos estan a tu disposicion por telefono, email, videollamada o presencialmente en nuestro showroom de Barcelona. Te ayudamos a elegir el suelo perfecto para tu vivienda en ${location.name} sin ningun compromiso.`
        : `Expertos en pavimentos vinilicos a tu disposicion por telefono, email y videollamada. Te asesoramos sobre el suelo ideal para tu vivienda en ${location.name} y te preparamos un presupuesto detallado en menos de 48 horas.`,
      icon: '\uD83D\uDCAC',
    },
    {
      title: 'Garantia de calidad',
      description:
        'Trabajamos exclusivamente con primeras marcas europeas que cumplen todas las normativas CE y certificaciones de emisiones (A+ y FloorScore). Garantia de fabricante de 10 a 25 anos segun el producto. Tu inversion esta protegida.',
      icon: '\u2705',
    },
    {
      title: 'Muestras gratis',
      description: isBcn
        ? `Solicita hasta 5 muestras gratuitas que recibes en ${location.name} en 24-48 horas, o visitanos en nuestro showroom de Barcelona para ver mas de 200 modelos en persona. Asi puedes decidir con total seguridad.`
        : `Te enviamos hasta 5 muestras gratuitas de los modelos que te interesen directamente a tu domicilio en ${location.name}. Comprueba colores, texturas y calidades con la luz real de tu vivienda antes de tomar la decision.`,
      icon: '\uD83D\uDCE6',
    },
  ];
}

export default function WhyUsSection({ location }: { location: Location }) {
  const benefits = getBenefits(location);

  return (
    <section id="por-que-elegirnos" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            ¿Por que comprar suelos PVC en VentaPVC.com?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--color-text-light)]">
            Somos especialistas en pavimentos vinilicos con almacen propio en
            Barcelona y envio a toda Espana. Estas son las razones por las que
            miles de clientes confian en nosotros.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-bg-alt text-2xl" aria-hidden="true">
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-primary">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-light)]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/presupuesto"
            className="inline-block rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Solicita tu presupuesto gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
