import axios from 'axios';
import { BASE_URL } from '@/service';
import type { SearchQuery, SortOptions } from '@/types/flight';

export const validate = async (searchQuery: SearchQuery) => {
  try {
    const response = await axios.get(`${BASE_URL}/flights/validate`, {
      params: {
        departure: searchQuery.departure,
        arrival: searchQuery.arrival,
      },
    });

    return response.status === 200;
  } catch (error) {
    console.error('Error validating search query:', error);
    return false;
  }
};

export const getFlights = async ({
  searchQuery,
  sortOptions,
}: {
  searchQuery: SearchQuery;
  sortOptions?: SortOptions;
}) => {
  try {
    const response = await axios.get(`${BASE_URL}/flights`, {
      params: {
        departure: searchQuery.departure,
        arrival: searchQuery.arrival,
        sortBy: sortOptions?.sortBy,
        sortType: sortOptions?.sortType,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    return [];
  }
};
