import React, { useMemo, useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import ManIcon from '@mui/icons-material/Man';
import AddIcon from '@mui/icons-material/Add';

import { CabinSelectorPopover } from '@/components/cabin-and-passenger/cabin-selector-popover';
import { FareCategories } from '@/constants';

export interface CabinAndPassengerProps {
  onPersonCount: (count: number) => void;
  onCabinType: (cabinType: FareCategories) => void;
  personCount: number;
  cabinType: FareCategories;
}

export const CabinAndPassenger = ({
  personCount,
  cabinType,
  onPersonCount,
  onCabinType,
}: CabinAndPassengerProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const icon = useMemo(() => {
    if (personCount > 3) {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {[...Array(3)].map((_, index) => (
            <ManIcon key={index} sx={{ width: 20 }} />
          ))}
          <AddIcon fontSize='small' sx={{ width: 20 }} />
        </div>
      );
    }

    return (
      <div style={{ display: 'flex' }}>
        {[...Array(personCount)].map((_, index) => (
          <ManIcon key={index} />
        ))}
      </div>
    );
  }, [personCount]);

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          backgroundColor: 'secondary.dark',
          color: 'white',
          borderRadius: 0,
          width: 90,
          border: `1px solid ${'secondary.dark'}`,
          '&:hover': {
            backgroundColor: 'primary.main',
            border: `1px solid ${'common.white'}`,
          },
        }}
      >
        {icon}
        <Typography py={0.3} px={0.6} fontSize={14} position='absolute' top={0} right={0}>
          {personCount}
        </Typography>
      </IconButton>

      {anchorEl ? (
        <CabinSelectorPopover
          anchorEl={anchorEl}
          onClose={handleClose}
          cabinType={cabinType}
          personCount={personCount}
          onCabinType={onCabinType}
          onPersonCount={onPersonCount}
        />
      ) : null}
    </>
  );
};
