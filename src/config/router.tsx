import withSuspense from '@/components/lazy';
import Home from '@/pages/home';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/layout';

// eslint-disable-next-line react-refresh/only-export-components
const Result = withSuspense(React.lazy(() => import('@/pages/result')));

// eslint-disable-next-line react-refresh/only-export-components
const Flights = withSuspense(React.lazy(() => import('@/pages/flights')));

// eslint-disable-next-line react-refresh/only-export-components
const HomeWithLayout = (
  <MainLayout bgColor={'dark'}>
    <Home />
  </MainLayout>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: HomeWithLayout,
  },
  {
    path: '/flights',
    element: (
      <MainLayout>
        <Flights />
      </MainLayout>
    ),
  },
  {
    path: '/result',
    element: (
      <MainLayout>
        <Result />
      </MainLayout>
    ),
  },
  {
    path: '*',
    element: HomeWithLayout,
  },
]);

export default router;
