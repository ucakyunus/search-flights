import { Box, FormControl, FormLabel, Popover, PopoverProps, Typography } from '@mui/material';

import { CabinTypeSelector } from '@/components/cabin-and-passenger/cabin-type-selector';
import { CounterButton } from '@/components/counter-button';
import { FareCategories } from '@/constants';
import styles from '@/assets/styles/cabin-selector-popover.module.scss';

export interface CabinSelectorPopoverProps extends Omit<PopoverProps, 'open'> {
  onPersonCount: (count: number) => void;
  onCabinType: (cabinType: FareCategories) => void;
  personCount: number;
  cabinType: FareCategories;
}

export const CabinSelectorPopover = ({
  personCount,
  cabinType,
  onPersonCount,
  onCabinType,
  anchorEl,
  ...rest
}: CabinSelectorPopoverProps) => {
  return (
    <Popover
      id='cabin-type-popover'
      open={!!anchorEl}
      anchorEl={anchorEl}
      className={styles.popover}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      slotProps={{
        paper: {
          className: styles.popoverPaper,
          sx: { overflow: 'visible' },
        },
      }}
      {...rest}
    >
      <Box>
        <FormControl>
          <FormLabel id='cabin-type' sx={{ fontSize: 14 }}>
            Kabin ve yolcu secimi
          </FormLabel>

          <CabinTypeSelector
            value={cabinType}
            onChange={(event) => onCabinType(event.target.value as FareCategories)}
          />
        </FormControl>

        <Box display='flex' alignItems='center' justifyContent='space-between' mt={2}>
          <Typography fontSize={13} fontWeight={500}>
            Yolcu
          </Typography>
          <CounterButton onChange={onPersonCount} count={personCount} />
        </Box>
      </Box>
    </Popover>
  );
};
