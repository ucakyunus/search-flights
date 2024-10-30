import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Alert, AlertTitle, Box, GlobalStyles, Typography, useTheme } from '@mui/material';
import { FlightLand, FlightTakeoff } from '@mui/icons-material';

import { Autocomplete } from '@/components/autocomplete';
import { CabinAndPassenger } from '@/components/cabin-and-passenger';
import { SubmitButton } from '@/components/submit-button';
import { getLocations } from '@/service/locations';
import { validate } from '@/service/flights';
import { FareCategories } from '@/constants';

import type { ReturnLocation } from '@/types/location';
import type { SearchQuery } from '@/types/flight';
import { DatePicker } from '@/components/date-picker';
import { useLocaleStorage } from '@/hooks/useLocalStorage.ts';

const HomePage = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();

  const { setSearchState } = useLocaleStorage();

  const [alertContent, setAlertContent] = useState<string | null>(null);
  const [personCount, setPersonCount] = useState(1);
  const [cabinType, setCabinType] = useState(FareCategories.ECONOMY);
  const [departure, setDeparture] = useState<ReturnLocation | null>(null);
  const [arrival, setArrival] = useState<ReturnLocation | null>(null);

  const { data: cities, isLoading } = useQuery({
    initialData: [],
    queryKey: ['locations'],
    queryFn: getLocations,
  });

  const mutation = useMutation({
    mutationFn: validate,
    onError: (error) => {
      setAlertContent(error.message);
    },
    onSuccess: (isValid) => {
      if (isValid) {
        const payload = {
          departure: {
            code: departure?.code || '',
            title: departure?.title || '',
          },
          arrival: {
            code: arrival?.code || '',
            title: arrival?.title || '',
          },
          personCount,
          cabinType,
        };

        setSearchState(payload);
        navigate('/flights', { state: payload });
      } else {
        setAlertContent('Aranan uçuş bulunamadı');
      }
    },
  });

  const onClickSubmitHandler = async () => {
    if (!departure || !arrival) {
      setAlertContent(
        departure
          ? 'Lütfen nereye gitmek istediğinizi seçin'
          : 'Lütfen nereden gitmek istediğinizi seçin',
      );
      return;
    }

    const searchQuery = {
      departure: departure.code,
      arrival: arrival.code,
    } as SearchQuery;

    mutation.mutate(searchQuery);
  };

  if (isLoading) return null;

  return (
    <Box
      mt='10vh'
      display='flex'
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
    >
      <GlobalStyles
        styles={{
          body: { backgroundColor: palette.primary.main, color: '#fff !important' },
        }}
      />

      <Typography component='h1' fontSize={32} fontWeight={300}>
        Merhaba
      </Typography>
      <Typography component='h2' fontSize={26} fontWeight={300}>
        Nereyi keşfetmek istersiniz?
      </Typography>

      <Box p={2} mt={2} gap={1} display='flex' width={'100%'} sx={{ bgcolor: 'primary.light' }}>
        <Autocomplete
          id={'origin-cities-autocomplete'}
          options={cities}
          value={departure}
          onChange={(_, v) => {
            setAlertContent(null);
            setDeparture(v);
          }}
          aria-label={'Nereden'}
          placeholder={'Nereden'}
          startAdornment={<FlightTakeoff sx={{ fontSize: 32 }} />}
        />

        <Autocomplete
          id={'destination-cities-autocomplete'}
          options={cities}
          value={arrival}
          onChange={(_, v) => {
            setAlertContent(null);
            setArrival(v);
          }}
          aria-label={'Nereye'}
          placeholder={'Nereye'}
          startAdornment={<FlightLand sx={{ fontSize: 32 }} />}
        />

        <DatePicker />

        <CabinAndPassenger
          cabinType={cabinType}
          personCount={personCount}
          onCabinType={setCabinType}
          onPersonCount={setPersonCount}
        />

        <SubmitButton size={'large'} type={'submit'} sx={{ p: 0 }} onClick={onClickSubmitHandler} />
      </Box>

      {!!alertContent && (
        <Alert severity='error' onClose={() => setAlertContent(null)} sx={{ mt: 4, width: '100%' }}>
          <AlertTitle>Hata</AlertTitle>
          {alertContent}
        </Alert>
      )}
    </Box>
  );
};

export default HomePage;
