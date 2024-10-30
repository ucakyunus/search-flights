import { Box, BoxProps, Typography } from '@mui/material';

export interface DurationProps extends BoxProps {
  time: string;
}

export const Duration = ({ time, ...rest }: DurationProps) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent={'center'}
      {...rest}
    >
      <Typography color='gray' noWrap>
        Uçuş Süresi
      </Typography>
      <Typography fontWeight={600}>{time}</Typography>
    </Box>
  );
};
