export interface Fair {
  organizerId: string;
  organizerName: string;
  organizerAddress: string;
  organizerPhone: string;
  organizerFax: string | null;
  activityId: string;
  activityName: string;
  regionName: string;
  regionId: string;
  townId: string;
  municipalityName: string;
  municipalityId: string;
  firstYear: string;
  fieldId: string;
  fieldName: string;
  products: string;
  email: string;
  web: string | null;
  periodicityId: string;
  periodicityName: string;
  sectorId: string;
  sectorName: string;
  location: string;
  calendarsId: string;
  nexhibitors: string | null;
  nvisitors: string | null;
  surface: string | null;
  date: string;
  endDate: string;
  iniDate: string;
  images: string[];
  description: string[];
}

export interface RegionGroup {
  regionName: string;
  regionId: string;
  fairs: Fair[];
}
