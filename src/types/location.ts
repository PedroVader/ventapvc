export interface Location {
  slug: string;
  name: string;
  province: string;
  community: string;
  region: LocationRegion;
  isBcnCity: boolean;
  isBcnMetro: boolean;
  isCatalonia: boolean;
  climate: ClimateType;
  housingType: string;
  population: number;
  deliveryTime: string;
  nearbyCities: string[];
  metaDescription: string;
  introVariant: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export enum LocationRegion {
  BCN_CITY = 'barcelona-ciudad',
  BCN_PROVINCE = 'provincia-barcelona',
  CATALONIA_OTHER = 'resto-cataluna',
  MADRID = 'comunidad-madrid',
  VALENCIA = 'comunidad-valenciana',
  ANDALUSIA = 'andalucia',
  BASQUE = 'pais-vasco',
  GALICIA = 'galicia',
  CASTILLA_LEON = 'castilla-leon',
  CASTILLA_MANCHA = 'castilla-la-mancha',
  ARAGON = 'aragon',
  MURCIA = 'murcia',
  CANARIAS = 'canarias',
  BALEARES = 'baleares',
  ASTURIAS = 'asturias',
  CANTABRIA = 'cantabria',
  NAVARRA = 'navarra',
  LA_RIOJA = 'la-rioja',
  EXTREMADURA = 'extremadura',
  CEUTA_MELILLA = 'ceuta-melilla',
}

export enum ClimateType {
  MEDITERRANEAN = 'mediterráneo',
  CONTINENTAL = 'continental',
  OCEANIC = 'oceánico',
  SUBTROPICAL = 'subtropical',
  MOUNTAIN = 'montaña',
  SEMIARID = 'semiárido',
}
