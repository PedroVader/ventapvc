import type { Location } from '@/types/location';
import JsonLd from './JsonLd';

/**
 * Renders a BreadcrumbList JSON-LD schema for the given location.
 *
 * Two breadcrumb patterns are supported:
 *
 * - Standard locations:
 *     Home > Suelos PVC > {Community} > {City}
 *
 * - Barcelona city neighborhoods (isBcnCity):
 *     Home > Suelos PVC Barcelona > {Barrio}
 */
export default function BreadcrumbSchema({
  location,
}: {
  location: Location;
}) {
  const items: Array<{ name: string; url: string }> = [];

  if (location.isBcnCity) {
    items.push(
      { name: 'Inicio', url: 'https://ventapvc.com' },
      {
        name: 'Suelos PVC Barcelona',
        url: 'https://ventapvc.com/suelos-pvc-barcelona',
      },
      {
        name: location.name,
        url: `https://ventapvc.com/suelos-pvc-barcelona/${location.slug}`,
      },
    );
  } else {
    const communitySlug = location.community
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-');

    items.push(
      { name: 'Inicio', url: 'https://ventapvc.com' },
      { name: 'Suelos PVC', url: 'https://ventapvc.com/suelos-pvc' },
      {
        name: location.community,
        url: `https://ventapvc.com/suelos-pvc/${communitySlug}`,
      },
      {
        name: location.name,
        url: `https://ventapvc.com/suelos-pvc/${location.slug}`,
      },
    );
  }

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={data} />;
}
