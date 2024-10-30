import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

import { BrandCode, ResultTypes, Status } from '@/constants';

import type { FareSubcategory } from '@/types/flight';

export interface DetailItemProps {
  detail: FareSubcategory;
  isPromotionActive: boolean;
}

export const DetailItem = ({ detail, isPromotionActive }: DetailItemProps) => {
  const { status, price, brandCode, rights } = detail;

  const navigate = useNavigate();

  const isAvailable = status === Status.AVAILABLE;
  const isEcoFly = brandCode === BrandCode.ECO_FLY;

  const isButtonDisabled = isPromotionActive && !isEcoFly;

  const newPrice = isEcoFly && isPromotionActive ? price.amount / 2 : price.amount;

  const onSelectHandler = () => {
    const state = isAvailable
      ? {
          status: ResultTypes.Success,
          amount: newPrice,
          currency: price.currency,
        }
      : { status: ResultTypes.Failure };

    navigate('/result', { state });
  };

  return (
    <Box
      width={400}
      display='flex'
      minHeight={300}
      alignItems='stretch'
      flexDirection='column'
      sx={{ backgroundColor: 'white' }}
    >
      <Box
        p={1}
        height={60}
        display='flex'
        alignItems='flex-start'
        bgcolor='secondary.light'
        justifyContent='space-between'
      >
        <Typography fontSize={16} fontWeight={600} textTransform='capitalize'>
          {brandCode}
        </Typography>

        <Box display={'flex'} gap={1}>
          {isPromotionActive && isEcoFly && (
            <Box
              display='flex'
              alignItems='flex-start'
              sx={{ textDecoration: 'line-through', opacity: 0.4 }}
            >
              <Typography fontSize={12}>{price.currency}</Typography>
              <Typography fontSize={16} ml={0.5}>
                {price.amount}
              </Typography>
            </Box>
          )}
          <Box display='flex' alignItems='flex-start'>
            <Typography fontSize={12}>{price.currency} </Typography>
            <Typography fontSize={16} ml={0.5}>
              {newPrice}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box flex={1} border={1} borderColor='secondary.light'>
        {rights.map((right, index) => (
          <Typography
            p={1}
            key={index}
            fontSize={12}
            borderBottom={1}
            borderColor='secondary.light'
          >
            {right}
          </Typography>
        ))}
      </Box>
      <Button
        fullWidth
        size='large'
        color='error'
        variant='contained'
        onClick={onSelectHandler}
        disabled={isButtonDisabled}
      >
        Uçuşu Seç
      </Button>
    </Box>
  );
};
