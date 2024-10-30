import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResultTypes } from '@/constants';
import withSuspense from '@/components/lazy';
import { Box } from '@mui/material';

const Failure = withSuspense(React.lazy(() => import('@/components/result/failure')));
const Success = withSuspense(React.lazy(() => import('@/components/result/success')));

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, [location, navigate]);

  if (!location.state || typeof location.state === 'undefined') {
    return null;
  }

  const { status, amount, currency } = location.state;

  return (
    <Box mt={6}>
      {status === ResultTypes.Success ? (
        <Success amount={amount} currency={currency} />
      ) : (
        <Failure />
      )}
    </Box>
  );
};

export default Result;
