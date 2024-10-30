import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Radio, Button, RadioProps, Typography, ButtonProps, useTheme } from '@mui/material';
import styled from '@emotion/styled';

export interface CabinOptionProps extends ButtonProps {
  price: number;
  label: string;
  currency: string;
  radioProps?: RadioProps;
  isSelected?: boolean;
}

export const CabinOption = ({
  price,
  label,
  currency,
  radioProps,
  isSelected = false,
  ...rest
}: CabinOptionProps) => {
  const { custom } = useTheme();

  const StyledButton = styled(Button)({
    boxShadow: custom?.shadows![1],
    width: 200,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    ...(isSelected && {
      ':after': {
        content: '""',
        position: 'absolute',
        bottom: -16,
        left: 0,
        width: '100%',
        height: 16,
        backgroundColor: 'white',
      },
      ':hover': {
        backgroundColor: 'white',
      },
    }),
  });

  return (
    <StyledButton {...rest}>
      <Radio {...radioProps} />

      <Typography
        ml={-0.5}
        color='gray'
        fontSize={8}
        fontWeight={600}
        sx={{ textDecoration: 'underline' }}
      >
        {label}
      </Typography>

      <Box display='flex' flexDirection='column' alignItems='start' ml={1}>
        <Typography fontSize={8} color='gray'>
          Yolcu Basina
        </Typography>
        <Typography fontSize={14} fontWeight={600}>
          {currency} {price}
        </Typography>
      </Box>

      <ExpandMoreIcon sx={{ marginLeft: 'auto' }} />
    </StyledButton>
  );
};
