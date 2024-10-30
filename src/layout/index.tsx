import React from 'react';
import { Box, Container } from '@mui/material';
import { Header } from '@/components/header';

interface MainLayoutProps {
  children: React.ReactNode;
  bgColor?: 'dark' | 'light';
}

export const MainLayout = ({ children, bgColor }: MainLayoutProps) => {
  return (
    <Box height={'100vh'}>
      <Header bgColor={bgColor ?? 'light'} />
      <Container fixed maxWidth='lg'>
        {children}
      </Container>
    </Box>
  );
};
