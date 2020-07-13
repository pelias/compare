// from: https://github.com/pelias/documentation/blob/master/search.md#filter-by-data-type
export const PeliasLayerNames = [
  'venue',
  'address',
  'street',
  'neighbourhood',
  'borough',
  'localadmin',
  'locality',
  'county',
  'macrocounty',
  'region',
  'macroregion',
  'country',
  'coarse',
  'postalcode',
  'intersection',
] as const;

export type PeliasLayerNameType = typeof PeliasLayerNames[number];

interface PeliasQuery {
  enableDebug?: boolean;
  text?: string;
  size?: number;
  private?: boolean;
  lang?: {
      name: string;
      iso6391: string;
      iso6393: string;
      defaulted: boolean;
  };
  'focus.point.lat'?: number;
  'focus.point.lon'?: number;
  querySize?: number;
  parser?: string;
  parsed_text?: {
      housenumber?: string;
      street?: string;
      city?: string;
      locality?: string;
      postalcode?: string;
      region?: string;
      state?: string;
      postcode?: string;
      cross_street?: string;
      country?: string;
      county?: string;
      borough?: string;
      subject?: string;
      admin?: string;
      place?: string;
  };
}

export interface PeliasResponse extends GeoJSON.FeatureCollection{
  url: string;
  geocoding: {
    version: string;
    attribution: string;
    query: PeliasQuery;
    engine: any;
    debug?: Record<string, any>[];
  };
  features: PeliasFeature[];
}

interface PeliasFeature extends GeoJSON.Feature {
  properties: PeliasFeatureProperties;
  debug: any;
}

export interface PeliasFeatureProperties {
  accuracy?: string;
  addendum?: any;
  borough?: string;
  confidence?: number;
  continent?: string;
  contitnent_gid?: string;
  country?: string;
  country_a?: string;
  country_gid?: string;
  county?: string;
  county_a?: string;
  county_gid?: string;
  distance?: number;
  gid?: string;
  housenumber?: string;
  id?: string;
  label?: string;
  layer?: PeliasLayerNameType;
  localadmin?: string;
  localadmin_gid?: string;
  locality?: string;
  locality_gid?: string;
  macroregion?: string;
  macroregion_gid?: string;
  match_type?: 'exact' | 'interpolated' | 'fallback';
  name?: string;
  neighbourhood?: string;
  neighbourhood_gid?: string;
  postalcode?: string;
  region?: string;
  region_a?: string;
  region_gid?: string;
  street?: string;
  souce_id?: string;
  source?: string;
}
