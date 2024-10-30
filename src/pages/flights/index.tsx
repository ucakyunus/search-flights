import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Box, Chip, Typography } from '@mui/material';

import { PromotionSwitch } from '@/components/promotion-switch';
import { FlightsContainer } from '@/components/flights-container';
import { useLocaleStorage } from '@/hooks/useLocalStorage';
import { getFlights } from '@/service/flights';
import { isEmptyObject } from '@/utils/helper';
import { FlightsHeader } from '@/components/flights-header';
import { ListSortTypes, ListSortBy } from '@/constants';
import { Flight } from '@/types/flight';
import { FlightItem } from '@/components/flight-item';

const FlightsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    searchState,
    setPromotionState,
    isPromotionActive: _isPromotionActive,
  } = useLocaleStorage();

  const [isPromotionActive, setIsPromotionActive] = useState<boolean>(_isPromotionActive);
  const [sortBy, setSortBy] = useState<ListSortBy>(ListSortBy.DepartureTime);
  const [sortType, setSortType] = useState<ListSortTypes>(ListSortTypes.DepartureTimeAscending);
  const [selectedFareOption, setSelectedFareOption] = useState<string>('');

  const searchQuery = useMemo(() => {
    return isEmptyObject(location.state) ? searchState : location.state;
  }, [location.state, searchState]);

  const sortOptions = useMemo(() => {
    return {
      sortBy,
      sortType,
    };
  }, [sortBy, sortType]);

  const { data: flights } = useQuery({
    initialData: [],
    queryKey: ['flights', searchQuery, sortOptions],
    queryFn: () =>
      getFlights({
        searchQuery: {
          ...searchQuery,
          departure: searchQuery.departure.code,
          arrival: searchQuery.arrival.code,
        },
        sortOptions,
      }),
    enabled: !isEmptyObject(searchQuery),
  });

  const { departure, arrival, personCount } = searchQuery || {};

  const handlePromotionChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsPromotionActive(event.target.checked);
      setPromotionState(event.target.checked);
    },
    [setPromotionState],
  );

  const handleSortOptionChange = (sortValue: ListSortBy) => {
    setSortBy(sortValue);

    switch (sortValue) {
      case ListSortBy.DepartureTime:
        if (sortType === ListSortTypes.DepartureTimeAscending) {
          setSortType(ListSortTypes.DepartureTimeDescending);
        } else {
          setSortType(ListSortTypes.DepartureTimeAscending);
        }
        break;
      case ListSortBy.Price:
        if (sortType === ListSortTypes.PriceAscending) {
          setSortType(ListSortTypes.PriceDescending);
        } else {
          setSortType(ListSortTypes.PriceAscending);
        }
        break;
      default:
        break;
    }

    if (selectedFareOption) {
      setSelectedFareOption('');
    }
  };

  useEffect(() => {
    if (!location.state && !searchState) {
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <Box mt={2}>
      <Chip
        label='Uçus'
        color='error'
        size='medium'
        sx={{ borderRadius: 0, fontSize: 12, px: 2 }}
      />

      <Typography mt={2} variant='h2' component='h1' fontSize={26} textTransform='capitalize'>
        {departure.title} - {arrival.title}, {personCount} Yolcu
      </Typography>

      <PromotionSwitch checked={isPromotionActive} onChange={handlePromotionChangeHandler} />

      <Box>
        <FlightsHeader onSortChange={handleSortOptionChange} sortType={sortType} />

        <FlightsContainer>
          {flights.map((flight: Flight, index: number) => (
            <FlightItem
              key={index}
              data={flight}
              index={index}
              isPromotionActive={isPromotionActive}
              selectedFareOption={selectedFareOption}
              setSelectedFareOption={setSelectedFareOption}
            />
          ))}
        </FlightsContainer>
      </Box>
    </Box>
  );
};

export default FlightsPage;
