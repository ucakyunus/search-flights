import React from 'react';
import { Box } from '@mui/material';

export interface FlightsContainerProps {
  children: React.ReactNode;
}

export const FlightsContainer = ({ children }: FlightsContainerProps) => {
  return (
    <Box
      p={2}
      gap={2}
      border={1}
      display='flex'
      flexDirection='column'
      borderColor='secondary.light'
      sx={{ backgroundColor: '#f9f9f9' }}
    >
      {children}
    </Box>
  );
};
