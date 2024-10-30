import { Box, Typography } from '@mui/material';
import { ResultTypes } from '@/constants';
import { CheckCircle, Cancel } from '@mui/icons-material';

export interface MessageProps {
  state: ResultTypes;
}

export function Message({ state }: MessageProps) {
  const icon =
    state === ResultTypes.Success ? (
      <CheckCircle color='success' sx={{ fontSize: 30 }} />
    ) : (
      <Cancel color='error' sx={{ fontSize: 30 }} />
    );

  const messageText =
    state === ResultTypes.Success
      ? 'Kabin seciminiz tamamlandi.'
      : 'Kabin seciminiz tamamlanamadi.';

  return (
    <Box py={2} display='flex' borderBottom={1} alignItems='center' borderColor='secondary.light'>
      {icon}
      <Typography ml={1} fontSize={16} fontWeight={500} color='primary.dark'>
        {messageText}
      </Typography>
    </Box>
  );
}
