import { Box, BoxProps, Typography } from '@mui/material';

export interface InfoDetailProps extends BoxProps {
  time: string;
  portCode: string;
  cityName: string;
}

export const InfoDetail = ({ time, portCode, cityName, ...rest }: InfoDetailProps) => {
  return (
    <Box {...rest}>
      <Typography fontSize={14} fontWeight={600}>
        {time}
      </Typography>
      <Typography fontSize={14} color='gray'>
        {portCode}
      </Typography>
      <Typography fontSize={10} color='gray'>
        {cityName}
      </Typography>
    </Box>
  );
};
