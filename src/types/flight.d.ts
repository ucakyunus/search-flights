import {
  Currency,
  FareCategories,
  ListSortBy,
  ListSortTypes,
  Status,
  BrandCode,
} from '@/constants';

type Airport = {
  name: string;
  code: string;
  city: {
    code: string;
    name: string;
  };
  country: {
    code: string;
    name: string;
  };
};

type FarePrice = {
  amount: number;
  currency: Currency;
};

export type FareSubcategory = {
  brandCode: BrandCode;
  price: FarePrice;
  order: number;
  status: Status;
  rights: string[];
};

export type FareCategory = {
  [FareCategories.BUSINESS]: {
    subcategories: FareSubcategory[];
  };
  [FareCategories.ECONOMY]: {
    subcategories: FareSubcategory[];
  };
};

export type Flight = {
  originAirport: Airport;
  destinationAirport: Airport;
  arrivalDateTimeDisplay: string;
  departureDateTimeDisplay: string;
  flightDuration: string;
  fareCategories: FareCategory;
};

export type FlightsData = {
  flights: Flight[];
};

export type SearchQuery = {
  departure: string;
  arrival: string;
};

export type SortOptions = {
  sortBy: ListSortBy;
  sortType: ListSortTypes;
};
