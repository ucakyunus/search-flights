import { Box, IconButton, IconButtonProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Remove, Add } from '@mui/icons-material';

import { CounterActions } from "@/constants";

export interface CounterButtonProps {
  count: number;
  min?: number;
  max?: number;
  onChange: (count: number) => void;
}

const IncrementButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  color: theme.palette.secondary.dark,
  width: 30,
  height: 30,
  padding: 0,
  borderRadius: 4
}));

export const CounterButton = ({ count, min = 1, max = 10, onChange }: CounterButtonProps) => {
  
  const handleCountChange = (action: CounterActions) => {
    const newCount =
      action === CounterActions.Increment ? count + 1 : count - 1;
    
    if (newCount >= min && newCount <= max) {
      onChange(newCount);
    }
  };
  
  return (
    <Box display="flex">
      <IncrementButton
        onClick={() => handleCountChange(CounterActions.Decrement)}
        sx={{
          bgcolor: count === min ? 'ButtonShadow' : 'secondary.light'
        }}
      >
        <Remove color="inherit" sx={{ fontSize: 20 }} />
      </IncrementButton>
      
      <Typography fontSize={14} px={2} lineHeight={2}>
        {count}
      </Typography>
      
      <IncrementButton
        onClick={() => handleCountChange(CounterActions.Increment)}
        sx={{
          bgcolor: count === max ? 'ButtonShadow' : 'secondary.light'
        }}
      >
        <Add color="inherit" sx={{ fontSize: 20 }} />
      </IncrementButton>
    </Box>
  );
};