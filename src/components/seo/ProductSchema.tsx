import type { Location } from '@/types/location';
import JsonLd from './JsonLd';

/**
 * Renders a Product JSON-LD schema for PVC flooring in the given location.
 *
 * Includes multiple price-based offers (range from 12.99 to 45.99 EUR),
 * brand information, availability status, and aggregate customer rating.
 */
export default function ProductSchema({
  location,
}: {
  location: Location;
}) {
  const canonicalUrl = location.isBcnCity
    ? `https://ventapvc.com/suelos-pvc-barcelona/${location.slug}`
    : `https://ventapvc.com/suelos-pvc/${location.slug}`;

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Suelos de PVC en ${location.name}`,
    description: `Amplia selección de suelos de PVC con instalación profesional en ${location.name}. Envío ${location.deliveryTime}.`,
    url: canonicalUrl,
    image: 'https://ventapvc.com/images/suelos-pvc.jpg',
    brand: {
      '@type': 'Brand',
      name: 'VentaPVC',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '12.99',
      highPrice: '45.99',
      offerCount: '150',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'VentaPVC.com',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '347',
    },
  };

  return <JsonLd data={data} />;
}
