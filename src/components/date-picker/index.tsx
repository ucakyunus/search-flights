import { IconButton, IconButtonProps, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { styled } from '@mui/material/styles';

const StyledIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: 'white',
  borderRadius: 0,
  width: 90,
  border: `1px solid ${theme.palette.secondary.dark}`,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.common.white}`,
  },
}));

export const DatePicker = () => {
  return (
    <StyledIconButton size={'large'}>
      <Typography fontSize={14} mr={1.5}>
        Tarih
      </Typography>
      <CalendarMonthIcon fontSize='large' />
    </StyledIconButton>
  );
};
