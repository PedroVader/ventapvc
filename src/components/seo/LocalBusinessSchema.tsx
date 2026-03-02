import type { Location } from '@/types/location';
import JsonLd from './JsonLd';

/**
 * Renders a LocalBusiness JSON-LD schema for the given location.
 *
 * Includes headquarters address in Barcelona, area served based on the
 * location, geo coordinates, aggregate rating, and opening hours.
 */
export default function LocalBusinessSchema({
  location,
}: {
  location: Location;
}) {
  const canonicalUrl = location.isBcnCity
    ? `https://ventapvc.com/suelos-pvc-barcelona/${location.slug}`
    : `https://ventapvc.com/suelos-pvc/${location.slug}`;

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${canonicalUrl}#localbusiness`,
    name: 'VentaPVC.com',
    description: location.metaDescription,
    url: canonicalUrl,
    telephone: '+34 93 000 00 00',
    priceRange: '€€',
    image: 'https://ventapvc.com/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle de la Indústria 42',
      addressLocality: 'Barcelona',
      postalCode: '08025',
      addressRegion: 'Barcelona',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: [
      {
        '@type': 'City',
        name: location.name,
      },
      {
        '@type': 'AdministrativeArea',
        name: location.province,
      },
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Disstands',
      url: 'https://disstands.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '347',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
  };

  return <JsonLd data={data} />;
}
