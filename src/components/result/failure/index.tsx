import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Message } from '@/components/result/message';
import { ResultTypes } from '@/constants';

const Failure = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/');
  };

  return (
    <Box display='flex' flexDirection='column'>
      <Message state={ResultTypes.Failure} />

      <Button
        onClick={onClickHandler}
        variant='contained'
        color='error'
        sx={{ py: 1, px: 4, fontSize: 12, mt: 2, ml: 'auto' }}
      >
        Başa Dön
      </Button>
    </Box>
  );
};

export default Failure;
