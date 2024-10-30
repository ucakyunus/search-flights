import fs from 'fs';
import path from 'path';

// * NOTE: This is a temporary solution to avoid the error
// * NOTE: this is only debug mode error
const ListSortTypes = {
  PriceAscending: 'PriceAscending',
  PriceDescending: 'PriceDescending',
  DepartureTimeAscending: 'DepartureTimeAscending',
  DepartureTimeDescending: 'DepartureTimeDescending',
};

const ListSortBy = {
  DepartureTime: 'DepartureTime',
  Price: 'Price',
};

const BrandCode = {
  ECO_FLY: 'ecoFly',
  EXTRA_FLY: 'extraFly',
  PRIME_FLY: 'primeFly',
};

const parseTime = (time) => {
  return Number(time.departureDateTimeDisplay.replace(':', ''))
};

const getPrice = (flight) =>
  flight.fareCategories?.ECONOMY?.subcategories.find(
    (sub) => sub.brandCode === BrandCode.ECO_FLY
  )?.price?.amount || 0;

const readJsonFile = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

const filterFlights = (req) => {
  const { departure, arrival } = req.query;
  const flightsDataPath = path.resolve('src/assets/datas/flights.json');
  const flightsData = readJsonFile(flightsDataPath);
  
  if (!Array.isArray(flightsData.flights)) {
    throw new Error('Invalid flights data format');
  }
  
  return flightsData.flights.filter(
    (flight) =>
      (!departure || flight.originAirport.code === departure) &&
      (!arrival || flight.destinationAirport.code === arrival)
  );
};

export function validateFlights(req, res) {
  try {
    const flights = filterFlights(req);
    
    if (flights.length > 0) {
      return res.status(200).json({ message: 'Flights found' });
    }
    return res.status(404).json({ message: 'No flights found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export function getFlights(req, res) {
  const { sortBy, sortType } = req.query;
  
  try {
    const flights = filterFlights(req);
    
    if (sortBy) {
      flights.sort((a, b) => {
       
        
        if (sortBy === ListSortBy.Price) {
          if (sortType === ListSortTypes.PriceAscending) {
            return getPrice(a) - getPrice(b);
          }
          
          if (sortType === ListSortTypes.PriceDescending) {
            return getPrice(b) - getPrice(a);
          }
        }
        
        if (sortBy === ListSortBy.DepartureTime) {
          if (sortType === ListSortTypes.DepartureTimeAscending) {
            return parseTime(a) - parseTime(b);
          }
          
          if (sortType === ListSortTypes.DepartureTimeDescending) {
            return parseTime(b) - parseTime(a);
          }
        }
      });
    }
    
    res.json(flights);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}