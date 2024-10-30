import React, { Suspense } from 'react';
import { Box, LinearProgress } from "@mui/material";

export default function withSuspense<P>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode
) {
  return function WithSuspense(props: React.PropsWithChildren<P>) {
    const loading = (
      <Box display="flex" alignItems="center" justifyContent="center" mt={10}>
        <LinearProgress />
      </Box>
    )
    
    return (
      <Suspense fallback={fallback ? fallback : loading}>
        <Component {...props} />
      </Suspense>
    );
  };
}