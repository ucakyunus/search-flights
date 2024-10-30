import { BASE_URL } from '@/service/index';
import axios from 'axios';
import { Location, ReturnLocation } from '@/types/location';

export const getLocations = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/locations`);

    if (response?.data?.length > 0) {
      return response.data.map((location: Location) => ({
        label: `${location.city.name} (${location.port.code})`,
        title: location.city.name,
        value: location.ports.length > 0 ? location.ports.join('-') : location.port.code,
        code: location.port.code,
      })) as ReturnLocation[];
    }

    return [];
  } catch (error) {
    console.error('Error fetching locations:', error);
    return [];
  }
};
