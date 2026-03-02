import type { Location } from '@/types/location';
import { bcnCityLocations } from './bcn-city';
import { bcnProvinceLocations } from './bcn-province';
import { cataloniaOtherLocations } from './catalonia-other';
import { madridLocations } from './madrid';
import { valenciaLocations } from './valencia';
import { andalusiaLocations } from './andalusia';
import { basqueLocations, galiciaLocations, asturiasLocations, cantabriaLocations } from './north-atlantic';
import { navarraLocations, laRiojaLocations, aragonLocations } from './north-interior';
import { castillaLeonLocations, castillaManchaLocations, extremaduraLocations } from './central';
import { murciaLocations, canariasLocations, balearesLocations, ceutaMelillaLocations } from './south-islands';

export const locations: Location[] = [
  ...bcnCityLocations,
  ...bcnProvinceLocations,
  ...cataloniaOtherLocations,
  ...madridLocations,
  ...valenciaLocations,
  ...andalusiaLocations,
  ...basqueLocations,
  ...galiciaLocations,
  ...asturiasLocations,
  ...cantabriaLocations,
  ...navarraLocations,
  ...laRiojaLocations,
  ...aragonLocations,
  ...castillaLeonLocations,
  ...castillaManchaLocations,
  ...extremaduraLocations,
  ...murciaLocations,
  ...canariasLocations,
  ...balearesLocations,
  ...ceutaMelillaLocations,
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getLocationsByRegion(region: string): Location[] {
  return locations.filter((loc) => loc.region === region);
}

export function getLocationsByProvince(province: string): Location[] {
  return locations.filter((loc) => loc.province === province);
}

export function getAllSlugs(): string[] {
  return locations.map((loc) => loc.slug);
}
