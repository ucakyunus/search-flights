import { Box, Button, Typography } from '@mui/material';
import { ListSortBy, ListSortTypes } from '@/constants';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export interface HeaderProps {
  onSortChange: (type: ListSortBy) => void;
  sortType: ListSortTypes;
}

export const FlightsHeader = ({ onSortChange, sortType }: HeaderProps) => {
  return (
    <Box
      p={1}
      display='flex'
      alignItems='center'
      justifyContent='flex-end'
      sx={{ backgroundColor: 'secondary.dark' }}
    >
      <Typography color='white' mr={2}>
        Sıralama Kriteri
      </Typography>
      <Button
        sx={{
          border: '1px solid #fff',
          mr: 2,
          borderRadius: '4px',
          backgroundColor: 'primary.dark',
          textTransform: 'none',
        }}
        variant='contained'
        onClick={() => onSortChange(ListSortBy.Price)}
      >
        Ekonomi Ücreti
        {sortType === ListSortTypes.PriceAscending && <ArrowUpwardIcon />}
        {sortType === ListSortTypes.PriceDescending && <ArrowDownwardIcon />}
      </Button>
      <Button
        sx={{
          border: '1px solid #fff',
          borderRadius: '4px',
          backgroundColor: 'primary.dark',
          textTransform: 'none',
        }}
        variant='contained'
        onClick={() => onSortChange(ListSortBy.DepartureTime)}
      >
        Kalkış Saati
        {sortType === ListSortTypes.DepartureTimeAscending && <ArrowUpwardIcon />}
        {sortType === ListSortTypes.DepartureTimeDescending && <ArrowDownwardIcon />}
      </Button>
    </Box>
  );
};
