import type { Location } from '@/types/location';

const BASE_URL = 'https://ventapvc.com';

/**
 * Genera la URL canonica para una pagina de ubicacion.
 * Las paginas de barrios de Barcelona ciudad siguen el patron:
 *   /suelos-pvc-barcelona/{slug}
 * El resto de ubicaciones siguen el patron:
 *   /suelos-pvc-{slug}
 *
 * @param location - Objeto Location con los datos de la ubicacion
 * @returns URL canonica completa (p. ej. "https://ventapvc.com/suelos-pvc-barcelona/eixample")
 */
export function generateCanonicalUrl(location: Location): string {
  if (location.isBcnCity) {
    return `${BASE_URL}/suelos-pvc-barcelona/${location.slug}`;
  }

  return `${BASE_URL}/suelos-pvc-${location.slug}`;
}

/**
 * Genera el objeto de alternates para los metadatos de Next.js.
 * Incluye la URL canonica y el idioma es-ES apuntando a la misma URL.
 *
 * @param location - Objeto Location con los datos de la ubicacion
 * @returns Objeto compatible con Next.js Metadata.alternates
 */
export function generateAlternates(location: Location): {
  canonical: string;
  languages: Record<string, string>;
} {
  const canonical = generateCanonicalUrl(location);

  return {
    canonical,
    languages: {
      'es-ES': canonical,
    },
  };
}

/**
 * Genera los metadatos de Open Graph para una pagina de ubicacion.
 * Incluye titulo, descripcion, URL, tipo de pagina, locale e imagen por defecto.
 *
 * @param location - Objeto Location con los datos de la ubicacion
 * @param title - Titulo para la etiqueta og:title
 * @param description - Descripcion para la etiqueta og:description
 * @returns Objeto compatible con Next.js Metadata.openGraph
 */
export function generateOpenGraph(
  location: Location,
  title: string,
  description: string,
): {
  title: string;
  description: string;
  url: string;
  siteName: string;
  locale: string;
  type: 'website';
  images: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
  }>;
} {
  const url = generateCanonicalUrl(location);

  return {
    title,
    description,
    url,
    siteName: 'VentaPVC.com',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og/suelos-pvc-${location.slug}.jpg`,
        width: 1200,
        height: 630,
        alt: `Suelos de PVC en ${location.name} - VentaPVC.com`,
      },
    ],
  };
}
