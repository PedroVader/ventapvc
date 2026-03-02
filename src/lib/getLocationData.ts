import type { Location, LocationRegion } from '@/types/location';
import { locations } from '@/data/locations';

/**
 * Busca una ubicacion por su slug.
 *
 * @param slug - El slug unico de la ubicacion (p. ej. "eixample", "madrid-centro")
 * @returns El objeto Location correspondiente, o undefined si no se encuentra
 *
 * @example
 * const loc = getLocationBySlug('eixample');
 * // { slug: 'eixample', name: 'Eixample', ... }
 */
export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

/**
 * Devuelve todas las ubicaciones que pertenecen a barrios de Barcelona ciudad.
 * Filtra por la propiedad `isBcnCity === true`.
 *
 * @returns Array de Location con todos los barrios de Barcelona ciudad
 */
export function getBcnCityLocations(): Location[] {
  return locations.filter((location) => location.isBcnCity);
}

/**
 * Devuelve todas las ubicaciones que NO pertenecen a Barcelona ciudad.
 * Filtra por la propiedad `isBcnCity === false`.
 *
 * @returns Array de Location con todas las ubicaciones fuera de Barcelona ciudad
 */
export function getNonBcnLocations(): Location[] {
  return locations.filter((location) => !location.isBcnCity);
}

/**
 * Filtra ubicaciones por region.
 *
 * @param region - La region por la que filtrar (p. ej. LocationRegion.MADRID)
 * @returns Array de Location que pertenecen a la region indicada
 *
 * @example
 * import { LocationRegion } from '@/types/location';
 * const madridLocs = getLocationsByRegion(LocationRegion.MADRID);
 */
export function getLocationsByRegion(region: LocationRegion): Location[] {
  return locations.filter((location) => location.region === region);
}

/**
 * Resuelve los slugs de ciudades cercanas a objetos Location completos.
 * Busca cada slug del array `nearbyCities` de la ubicacion dada y devuelve
 * solo aquellos que se encuentren en el listado de ubicaciones.
 *
 * @param location - La ubicacion de referencia
 * @returns Array de Location con las ciudades cercanas encontradas
 *
 * @example
 * const eixample = getLocationBySlug('eixample');
 * if (eixample) {
 *   const nearby = getNearbyLocations(eixample);
 *   // [{ slug: 'sant-antoni', ... }, { slug: 'la-sagrada-familia', ... }, ...]
 * }
 */
export function getNearbyLocations(location: Location): Location[] {
  return location.nearbyCities
    .map((slug) => locations.find((loc) => loc.slug === slug))
    .filter((loc): loc is Location => loc !== undefined);
}

/**
 * Devuelve un array con todos los slugs de todas las ubicaciones.
 * Util para generar rutas estaticas con generateStaticParams en Next.js.
 *
 * @returns Array de strings con todos los slugs disponibles
 *
 * @example
 * // En un page.tsx de Next.js:
 * export async function generateStaticParams() {
 *   return getAllSlugs().map((slug) => ({ slug }));
 * }
 */
export function getAllSlugs(): string[] {
  return locations.map((location) => location.slug);
}
