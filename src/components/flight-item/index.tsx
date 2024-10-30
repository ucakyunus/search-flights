import { useMemo } from 'react';
import { Box, Divider, useTheme } from '@mui/material';

import { CabinOption } from '@/components/flight-item/cabin-option';
import { InfoDetail } from '@/components/flight-item/info-detail';
import { Duration } from '@/components/flight-item/duration';
import { DetailItem } from '@/components/flight-item/detail-item';
import { FareCategories } from '@/constants';

import type { Flight } from '@/types/flight';

export interface FlightItemProps {
  index: number;
  data: Flight;
  isPromotionActive: boolean;
  selectedFareOption: string | null;
  setSelectedFareOption: (value: string) => void;
}

export const FlightItem = (props: FlightItemProps) => {
  const { custom } = useTheme();

  const { data, index, isPromotionActive, selectedFareOption, setSelectedFareOption } = props;

  const { fareCategories } = data;

  const businessRadioValue = `${FareCategories.BUSINESS}-${index}`;
  const economyRadioValue = `${FareCategories.ECONOMY}-${index}`;
  const isBusinessSelected = selectedFareOption === businessRadioValue;
  const isEconomySelected = selectedFareOption === economyRadioValue;

  const flightItemDetailItems = useMemo(() => {
    if (!selectedFareOption) return [];

    if (selectedFareOption !== businessRadioValue && selectedFareOption !== economyRadioValue)
      return [];

    const [selectedCabinType] = selectedFareOption.split('-');

    const subcategories =
      selectedCabinType === FareCategories.BUSINESS
        ? fareCategories.BUSINESS.subcategories
        : fareCategories.ECONOMY.subcategories;

    return subcategories.sort((a, b) => a.order - b.order);
  }, [
    businessRadioValue,
    economyRadioValue,
    fareCategories.BUSINESS.subcategories,
    fareCategories.ECONOMY.subcategories,
    selectedFareOption,
  ]);

  const businessEcoFlyPrice = useMemo(
    () =>
      fareCategories.BUSINESS.subcategories.find((category) => {
        return category.order === 1;
      })?.price.amount as number,
    [fareCategories.BUSINESS.subcategories],
  );

  const economyEcoFlyPrice = useMemo(
    () =>
      fareCategories.ECONOMY.subcategories.find((category) => {
        return category.order === 1;
      })?.price.amount as number,
    [fareCategories.ECONOMY.subcategories],
  );

  const currency = useMemo(
    () => fareCategories.BUSINESS.subcategories[0].price.currency,
    [fareCategories.BUSINESS.subcategories],
  );

  const economyPriceShown = useMemo(() => {
    return isPromotionActive ? economyEcoFlyPrice / 2 : economyEcoFlyPrice;
  }, [economyEcoFlyPrice, isPromotionActive]);

  const businessPriceShown = useMemo(() => {
    return isPromotionActive ? businessEcoFlyPrice / 2 : businessEcoFlyPrice;
  }, [businessEcoFlyPrice, isPromotionActive]);

  return (
    <Box>
      <Box display='flex' gap={2}>
        <Box
          p={2}
          flex={1}
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          boxShadow={custom?.shadows![1]}
          sx={{ backgroundColor: 'white' }}
        >
          <Box display='flex' alignItems='center' flex={1}>
            <InfoDetail
              time={data.departureDateTimeDisplay}
              portCode={data.originAirport.code}
              cityName={data.originAirport.city.name}
            />

            <Divider
              sx={{
                width: '400px',
                height: '1px',
                backgroundColor: '#000',
                mx: 1,
              }}
            />

            <InfoDetail
              textAlign='right'
              time={data.arrivalDateTimeDisplay}
              portCode={data.destinationAirport.code}
              cityName={data.destinationAirport.city.name}
            />
          </Box>

          <Duration mr={3} time={data.flightDuration} />
        </Box>

        <CabinOption
          label='Economy'
          currency={currency}
          price={economyPriceShown}
          isSelected={isEconomySelected}
          onClick={() => setSelectedFareOption(economyRadioValue)}
          radioProps={{
            value: economyRadioValue,
            checked: isEconomySelected,
            onChange: () => setSelectedFareOption(economyRadioValue),
          }}
        />

        <CabinOption
          label='Business'
          currency={currency}
          price={businessPriceShown}
          isSelected={isBusinessSelected}
          onClick={() => setSelectedFareOption(businessRadioValue)}
          radioProps={{
            value: businessRadioValue,
            checked: isBusinessSelected,
            onChange: () => setSelectedFareOption(businessRadioValue),
          }}
        />
      </Box>

      {flightItemDetailItems.length > 0 ? (
        <Box display='flex' gap={2} p={2} mt={2} bgcolor={'white'}>
          {flightItemDetailItems.map((item, index) => (
            <DetailItem key={index} detail={item} isPromotionActive={isPromotionActive} />
          ))}
        </Box>
      ) : null}
    </Box>
  );
};
