import { Box, Typography } from '@mui/material';

import { Message } from '@/components/result/message';
import { ResultTypes } from '@/constants';

export interface SuccessProps {
  amount: number;
  currency: string;
}

const Success = ({ amount, currency }: SuccessProps) => {
  const price = `${currency} ${amount} `;

  return (
    <Box>
      <Message state={ResultTypes.Success} />
      <Box display='flex' alignItems='center' justifyContent='space-between' pt={2}>
        <Typography fontSize={26} fontWeight={300} color='secondary.main'>
          Toplam Tutar
        </Typography>
        <Typography fontSize={26} color='darkcyan'>
          {price}
        </Typography>
      </Box>
    </Box>
  );
};

export default Success;
