import type { Location } from '@/types/location';

interface Testimonial {
  quote: string;
  name: string;
  city: string;
  product: string;
  rating: number;
}

function generateTestimonials(location: Location): Testimonial[] {
  const { name, province, nearbyCities, introVariant } = location;

  const city1 = name;
  const city2 =
    nearbyCities.length > 0
      ? nearbyCities[0]
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase())
      : province;
  const city3 =
    nearbyCities.length > 1
      ? nearbyCities[1]
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase())
      : province;

  const testimonialSets: Testimonial[][] = [
    // Set 1
    [
      {
        quote: `Renovamos el suelo de todo el piso en ${city1} y el resultado es espectacular. El equipo de VentaPVC nos asesoro de maravilla y la instalacion fue rapida y limpia. En dos dias teniamos el suelo nuevo sin haber sacado un solo mueble de casa. Lo recomiendo al 100 %.`,
        name: 'Maria Garcia Lopez',
        city: city1,
        product: 'SPC click roble natural',
        rating: 5,
      },
      {
        quote: `Buscaba un suelo resistente para la cocina y el bano de mi vivienda en ${city2} y me recomendaron el SPC impermeable. Llevo mas de un ano y esta como el primer dia. Ni una marca, ni una mancha. El precio fue mucho mejor que en otras tiendas de la zona.`,
        name: 'Carlos Fernandez Ruiz',
        city: city2,
        product: 'SPC impermeable para cocina y bano',
        rating: 5,
      },
      {
        quote: `Tenia un presupuesto ajustado para reformar mi local comercial en ${city3} y en VentaPVC me ofrecieron el PVC en rollo, que era justo lo que necesitaba. La relacion calidad-precio es insuperable. El envio llego en el plazo prometido y la calidad del material es excelente.`,
        name: 'Ana Martinez Serrano',
        city: city3,
        product: 'PVC en rollo efecto madera',
        rating: 5,
      },
    ],
    // Set 2
    [
      {
        quote: `Despues de comparar muchas opciones, eleji VentaPVC para mi piso en ${city1}. El asesoramiento fue clave: me explicaron las diferencias entre cada tipo y me enviaron muestras gratis a casa. El suelo quedo perfecto y la instalacion fue impecable.`,
        name: 'Javier Rodriguez Perez',
        city: city1,
        product: 'Vinilico click efecto roble',
        rating: 5,
      },
      {
        quote: `Instalamos suelo PVC en toda la vivienda de ${city2}, incluidos banos y cocina. La verdad es que estamos encantados. Es calido, bonito y no necesita ningun mantenimiento especial. Los ninos juegan en el suelo y no hay ni un rasguño. Muy contenta con la compra.`,
        name: 'Laura Sanchez Moreno',
        city: city2,
        product: 'SPC premium acabado piedra',
        rating: 5,
      },
      {
        quote: `Lo que mas me gusto fue la transparencia en el presupuesto. Sin costes ocultos ni sorpresas. El equipo de instalacion llego puntual a mi vivienda de ${city3}, trabajo limpio y se llevo todos los restos. El suelo es una pasada, parece madera natural de verdad.`,
        name: 'Pedro Gomez Navarro',
        city: city3,
        product: 'SPC efecto madera envejecida',
        rating: 5,
      },
    ],
    // Set 3
    [
      {
        quote: `Renove la cocina y el salon de mi piso en ${city1} con suelo SPC y no puedo estar mas contenta. Es resistente al agua, facilisimo de limpiar y tiene un acabado precioso. Mis amigas no se creen que no sea madera real. Servicio y producto de diez.`,
        name: 'Isabel Diaz Romero',
        city: city1,
        product: 'SPC click roble blanqueado',
        rating: 5,
      },
      {
        quote: `Tenia dudas sobre comprar online, pero el trato de VentaPVC me convencio. Me atendieron por videollamada, me ensenaron los materiales y me aconsejaron el mejor suelo para mi casa en ${city2}. El resultado supero mis expectativas. Repetire seguro.`,
        name: 'Miguel Angel Torres Vega',
        city: city2,
        product: 'Vinilico click efecto cemento',
        rating: 5,
      },
      {
        quote: `Puse suelo de PVC autoadhesivo en el estudio de mi vivienda de ${city3} yo mismo siguiendo las instrucciones de VentaPVC. Fue muy facil y el resultado es profesional. Ahorre mucho dinero en instalacion y quedo genial. Gran experiencia de compra.`,
        name: 'Sofia Ruiz Castillo',
        city: city3,
        product: 'PVC autoadhesivo efecto madera',
        rating: 5,
      },
    ],
    // Set 4
    [
      {
        quote: `Tenemos un perro grande y dos gatos, y el suelo PVC que nos instalaron en ${city1} resiste todo: arañazos, agua del bebedero, barro... Lo fregamos con una mopa y queda impecable. Ha sido la mejor decision para nuestra reforma.`,
        name: 'Fernando Jimenez Ramos',
        city: city1,
        product: 'SPC alta resistencia mascota-proof',
        rating: 5,
      },
      {
        quote: `Compramos un piso para reformar en ${city2} y decidimos poner PVC en toda la vivienda. El ahorro respecto al parquet fue enorme y el resultado estetico es practicamente identico. El equipo de instalacion fue muy profesional y lo dejo todo perfecto.`,
        name: 'Marta Lopez Hernandez',
        city: city2,
        product: 'SPC click roble natural',
        rating: 5,
      },
      {
        quote: `Necesitaba reformar mi restaurante en ${city3} sin cerrar muchos dias. Con el suelo PVC comercial que me puso VentaPVC, en solo dos dias tenia el local renovado y funcionando. Resistente, bonito y facil de limpiar. Justo lo que necesitaba.`,
        name: 'Antonio Medina Ortiz',
        city: city3,
        product: 'PVC comercial alta resistencia',
        rating: 5,
      },
    ],
    // Set 5
    [
      {
        quote: `Cambiamos el terrazo de nuestro piso de los anos 70 en ${city1} por suelo PVC click y fue como mudarse a una casa nueva. La instalacion fue directamente sobre el terrazo, sin obras ni polvo. Es calido, moderno y facilisimo de mantener.`,
        name: 'Carmen Alvarez Prieto',
        city: city1,
        product: 'Vinilico click efecto roble claro',
        rating: 5,
      },
      {
        quote: `Lo que mas valoro de VentaPVC es que cumplen lo que prometen. Me dijeron que el envio a ${city2} llegaba en ${location.deliveryTime} y asi fue. El material es de primera calidad y el precio imbatible. Ya les he recomendado a tres vecinos.`,
        name: 'Roberto Navarro Gimenez',
        city: city2,
        product: 'SPC efecto piedra gris',
        rating: 5,
      },
      {
        quote: `Pedi muestras gratis para mi reforma en ${city3} y me llegaron rapidisimo. Pude ver los colores con la luz de mi casa y elegir con calma. Al final me decidi por el SPC y estoy encantada. La textura es increible, parece madera de verdad.`,
        name: 'Elena Castro Reyes',
        city: city3,
        product: 'SPC premium textura sincronizada',
        rating: 5,
      },
    ],
  ];

  const setIndex =
    ((introVariant - 1) % testimonialSets.length + testimonialSets.length) %
    testimonialSets.length;
  return testimonialSets[setIndex];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Valoracion: ${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection({
  location,
}: {
  location: Location;
}) {
  const testimonials = generateTestimonials(location);

  return (
    <section id="opiniones" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            Lo que dicen nuestros clientes en {location.province}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-light)]">
            Mas de 2.500 clientes satisfechos en toda Espana avalan nuestra
            calidad de producto y servicio. Estas son algunas de sus opiniones.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <StarRating rating={testimonial.rating} />

              <blockquote className="mt-4 flex-1">
                <p className="text-sm leading-relaxed text-[var(--color-text-light)] sm:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-sm text-[var(--color-text-light)]">
                  {testimonial.city}
                </p>
                <p className="mt-1 inline-block rounded-full bg-bg-alt px-3 py-1 text-xs font-medium text-primary">
                  {testimonial.product}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-bg-alt px-5 py-2.5">
            <span className="text-lg font-bold text-primary">4,8</span>
            <StarRating rating={5} />
            <span className="text-sm text-[var(--color-text-light)]">
              de media en mas de 2.500 valoraciones
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
