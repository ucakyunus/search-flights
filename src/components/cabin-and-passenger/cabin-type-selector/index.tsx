import React from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

import { FareCategories } from '@/constants';

export interface CabinTypeSelectorProps {
  value: FareCategories;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CabinTypeSelector = ({ value, onChange }: CabinTypeSelectorProps) => {
  return (
    <RadioGroup
      row
      aria-labelledby='cabin-type'
      name='cabin-type'
      value={value}
      onChange={onChange}
    >
      <FormControlLabel
        value={FareCategories.ECONOMY}
        control={<Radio color='info' />}
        label='Economy Class'
        color='primary'
      />
      <FormControlLabel
        value={FareCategories.BUSINESS}
        control={<Radio color='info' />}
        label='Business Class'
      />
    </RadioGroup>
  );
};
