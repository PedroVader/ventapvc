import type { Location } from '@/types/location';
import { ClimateType } from '@/types/location';

interface RoomRecommendation {
  room: string;
  icon: string;
  product: string;
  reason: string;
}

function getRoomRecommendations(climate: ClimateType): RoomRecommendation[] {
  const base: RoomRecommendation[] = [
    {
      room: 'Salon',
      icon: '\uD83D\uDECB\uFE0F',
      product: '',
      reason: '',
    },
    {
      room: 'Cocina',
      icon: '\uD83C\uDF73',
      product: '',
      reason: '',
    },
    {
      room: 'Bano',
      icon: '\uD83D\uDEC1',
      product: '',
      reason: '',
    },
    {
      room: 'Dormitorio',
      icon: '\uD83D\uDECF\uFE0F',
      product: '',
      reason: '',
    },
    {
      room: 'Terraza',
      icon: '\u2600\uFE0F',
      product: '',
      reason: '',
    },
    {
      room: 'Local comercial',
      icon: '\uD83C\uDFEA',
      product: '',
      reason: '',
    },
  ];

  switch (climate) {
    case ClimateType.MEDITERRANEAN:
      base[0] = {
        room: 'Salon',
        icon: '\uD83D\uDECB\uFE0F',
        product: 'SPC click de 5-6 mm',
        reason:
          'Estabilidad total frente al calor del verano y la humedad costera. Acabados de roble claro que aportan luminosidad.',
      };
      base[1] = {
        room: 'Cocina',
        icon: '\uD83C\uDF73',
        product: 'SPC con capa de uso de 0,55 mm',
        reason:
          'Resistencia maxima a manchas, agua y trafico intenso. Superficie antideslizante R10 para mayor seguridad.',
      };
      base[2] = {
        room: 'Bano',
        icon: '\uD83D\uDEC1',
        product: 'Vinilico click 100 % impermeable',
        reason:
          'No desarrolla moho ni hongos con la humedad constante. Instalacion rapida sin necesidad de obra.',
      };
      base[3] = {
        room: 'Dormitorio',
        icon: '\uD83D\uDECF\uFE0F',
        product: 'Vinilico click con base acustica',
        reason:
          'Pisada calida y silenciosa. Proteccion UV para dormitorios con mucha luz natural.',
      };
      base[4] = {
        room: 'Terraza',
        icon: '\u2600\uFE0F',
        product: 'Losetas PVC exterior R11',
        reason:
          'Resistentes al sol directo, salitre y cambios de temperatura. Superficie antideslizante incluso mojada.',
      };
      base[5] = {
        room: 'Local comercial',
        icon: '\uD83C\uDFEA',
        product: 'SPC comercial de 0,55 mm',
        reason:
          'Capa de uso reforzada para alto trafico. Resistente a sillas con ruedas y tacones.',
      };
      break;

    case ClimateType.CONTINENTAL:
      base[0] = {
        room: 'Salon',
        icon: '\uD83D\uDECB\uFE0F',
        product: 'SPC de 6-7 mm con base IXPE',
        reason:
          'Maximo aislamiento termico contra el frio invernal. Compatible con suelo radiante hasta 35 grados C.',
      };
      base[1] = {
        room: 'Cocina',
        icon: '\uD83C\uDF73',
        product: 'SPC impermeable de 5,5 mm',
        reason:
          'Soporta cambios bruscos de temperatura sin deformarse. Facil de limpiar y resistente a manchas.',
      };
      base[2] = {
        room: 'Bano',
        icon: '\uD83D\uDEC1',
        product: 'SPC con barrera antihumedad',
        reason:
          'Impermeable total en un entorno donde la condensacion invernal es frecuente. No se agrieta con el frio.',
      };
      base[3] = {
        room: 'Dormitorio',
        icon: '\uD83D\uDECF\uFE0F',
        product: 'Vinilico click de 6 mm con aislante',
        reason:
          'Pisada calida incluso sin calefaccion. Reduce la sensacion de frio al levantarte en invierno.',
      };
      base[4] = {
        room: 'Terraza',
        icon: '\u2600\uFE0F',
        product: 'Losetas PVC resistentes a heladas',
        reason:
          'No se agrietan con las heladas ni se dilatan con el calor estival. Faciles de reponer.',
      };
      base[5] = {
        room: 'Local comercial',
        icon: '\uD83C\uDFEA',
        product: 'SPC comercial de 7 mm',
        reason:
          'Estabilidad dimensional ante los contrastes termicos de abrir y cerrar el negocio. Gran resistencia al trafico.',
      };
      break;

    case ClimateType.OCEANIC:
      base[0] = {
        room: 'Salon',
        icon: '\uD83D\uDECB\uFE0F',
        product: 'SPC con barrera antihumedad',
        reason:
          'Proteccion total contra la humedad ambiental constante del norte. No desarrolla moho ni se deforma.',
      };
      base[1] = {
        room: 'Cocina',
        icon: '\uD83C\uDF73',
        product: 'SPC impermeable con acabado R10',
        reason:
          'Resistencia total al agua y la humedad. Superficie antideslizante para los dias de lluvia.',
      };
      base[2] = {
        room: 'Bano',
        icon: '\uD83D\uDEC1',
        product: 'Vinilico click antibacteriano',
        reason:
          'Impermeable y antibacteriano: la combinacion perfecta contra el moho en climas muy humedos.',
      };
      base[3] = {
        room: 'Dormitorio',
        icon: '\uD83D\uDECF\uFE0F',
        product: 'SPC de 6 mm con base acustica',
        reason:
          'Pisada calida y aislamiento contra el frio humedo. Acabados claros que compensan la falta de luz.',
      };
      base[4] = {
        room: 'Terraza',
        icon: '\u2600\uFE0F',
        product: 'Losetas PVC antideslizantes R11',
        reason:
          'Superficie segura incluso con lluvia constante. Resistentes al musgo y la humedad permanente.',
      };
      base[5] = {
        room: 'Local comercial',
        icon: '\uD83C\uDFEA',
        product: 'SPC comercial antihumedad',
        reason:
          'Resiste las entradas constantes de agua con paraguas y botas mojadas. Antideslizante de serie.',
      };
      break;

    case ClimateType.SUBTROPICAL:
      base[0] = {
        room: 'Salon',
        icon: '\uD83D\uDECB\uFE0F',
        product: 'SPC con proteccion UV reforzada',
        reason:
          'Resiste mas de 2.800 horas de sol anuales sin decolorarse. No acumula calor como la ceramica.',
      };
      base[1] = {
        room: 'Cocina',
        icon: '\uD83C\uDF73',
        product: 'Vinilico click impermeable',
        reason:
          'Facil limpieza de arena y salitre que entran del exterior. Resistente a manchas y al uso diario.',
      };
      base[2] = {
        room: 'Bano',
        icon: '\uD83D\uDEC1',
        product: 'SPC antibacteriano impermeable',
        reason:
          'Ideal para el ambiente humedo del bano en climas calidos. No retiene olores ni desarrolla hongos.',
      };
      base[3] = {
        room: 'Dormitorio',
        icon: '\uD83D\uDECF\uFE0F',
        product: 'Vinilico click con tratamiento UV',
        reason:
          'Mantiene los colores intactos con la alta radiacion solar. Pisada fresca y confortable.',
      };
      base[4] = {
        room: 'Terraza',
        icon: '\u2600\uFE0F',
        product: 'Losetas PVC exterior UV',
        reason:
          'Especiales para el sol intenso de las islas. Resistentes al salitre, arena y brisa marina.',
      };
      base[5] = {
        room: 'Local comercial',
        icon: '\uD83C\uDFEA',
        product: 'SPC comercial UV reforzado',
        reason:
          'Proteccion UV premium para escaparates con luz directa. Ideal para locales turisticos de alto trafico.',
      };
      break;

    case ClimateType.MOUNTAIN:
      base[0] = {
        room: 'Salon',
        icon: '\uD83D\uDECB\uFE0F',
        product: 'SPC de 7-8 mm con base IXPE',
        reason:
          'Maximo aislamiento termico contra el frio extremo. Compatible con estufas de pellets y suelo radiante.',
      };
      base[1] = {
        room: 'Cocina',
        icon: '\uD83C\uDF73',
        product: 'SPC impermeable de 6 mm',
        reason:
          'Resiste el agua de la nieve fundida y los cambios bruscos de temperatura al cocinar.',
      };
      base[2] = {
        room: 'Bano',
        icon: '\uD83D\uDEC1',
        product: 'SPC con barrera antihumedad',
        reason:
          'Impermeable y estable ante las grandes oscilaciones termicas. No se agrieta con el frio.',
      };
      base[3] = {
        room: 'Dormitorio',
        icon: '\uD83D\uDECF\uFE0F',
        product: 'SPC de 8 mm con doble aislante',
        reason:
          'La pisada mas calida del mercado para levantarte sin frio. Reduce la perdida de calor por el suelo.',
      };
      base[4] = {
        room: 'Terraza',
        icon: '\u2600\uFE0F',
        product: 'Losetas PVC antiheladas',
        reason:
          'Soportan nieve, hielo y deshielo sin agrietarse. Superficie antideslizante para condiciones invernales.',
      };
      base[5] = {
        room: 'Local comercial',
        icon: '\uD83C\uDFEA',
        product: 'SPC comercial de 7 mm',
        reason:
          'Resiste las botas de nieve, el agua y el alto trafico invernal. Aislamiento termico para ahorrar en calefaccion.',
      };
      break;

    case ClimateType.SEMIARID:
      base[0] = {
        room: 'Salon',
        icon: '\uD83D\uDECB\uFE0F',
        product: 'SPC con capa de uso de 0,55 mm',
        reason:
          'Estable con temperaturas superiores a 40 grados C. No retiene polvo ni arena del ambiente.',
      };
      base[1] = {
        room: 'Cocina',
        icon: '\uD83C\uDF73',
        product: 'SPC resistente al calor',
        reason:
          'Soporta el calor acumulado sin deformarse. Superficie facil de limpiar del polvo ambiental.',
      };
      base[2] = {
        room: 'Bano',
        icon: '\uD83D\uDEC1',
        product: 'Vinilico click impermeable',
        reason:
          'Ideal para un oasis de frescor en el hogar. No se reseca ni agrieta como la madera con la baja humedad.',
      };
      base[3] = {
        room: 'Dormitorio',
        icon: '\uD83D\uDECF\uFE0F',
        product: 'Vinilico click con proteccion UV',
        reason:
          'No se decolora con la intensa radiacion solar. Pisada mas fresca que el parquet en verano.',
      };
      base[4] = {
        room: 'Terraza',
        icon: '\u2600\uFE0F',
        product: 'Losetas PVC UV reforzado',
        reason:
          'Maxima resistencia al sol extremo y al polvo. Superficie que no quema al pisar descalzo.',
      };
      base[5] = {
        room: 'Local comercial',
        icon: '\uD83C\uDFEA',
        product: 'SPC comercial de 0,55 mm',
        reason:
          'No acumula tierra ni arena del ambiente. Resistente al alto trafico y facil de mantener impecable.',
      };
      break;
  }

  return base;
}

export default function RoomGuideSection({ location }: { location: Location }) {
  const rooms = getRoomRecommendations(location.climate);

  return (
    <section id="guia-estancias" className="bg-bg-alt py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            Suelos PVC ideales para cada estancia en {location.name}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--color-text-light)]">
            Cada habitacion tiene necesidades diferentes. Te recomendamos el tipo
            de suelo PVC que mejor funciona en cada espacio de tu vivienda, adaptado
            al clima de {location.name}.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          {rooms.map((room) => (
            <article
              key={room.room}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6"
            >
              <div className="mb-3 text-3xl sm:text-4xl" aria-hidden="true">
                {room.icon}
              </div>
              <h3 className="mb-1 text-lg font-semibold text-primary sm:text-xl">
                {room.room}
              </h3>
              <p className="mb-2 text-sm font-medium text-accent sm:text-base">
                {room.product}
              </p>
              <p className="mt-auto text-sm leading-relaxed text-[var(--color-text-light)]">
                {room.reason}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[var(--color-text-light)]">
            ¿No sabes cual es el mejor suelo para tu estancia?{' '}
            <a
              href="/presupuesto"
              className="font-semibold text-accent underline decoration-accent/30 transition-colors hover:text-accent-hover hover:decoration-accent-hover"
            >
              Pidenos asesoramiento gratuito
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
