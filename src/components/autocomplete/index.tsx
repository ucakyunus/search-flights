import React, { forwardRef } from 'react';
import {
  Autocomplete as MUIAutocomplete,
  AutocompleteProps as MUIAutocompleteProps,
  InputAdornment,
  TextField,
} from '@mui/material';
import { ReturnLocation } from '@/types/location';

export interface AutocompleteProps
  extends Omit<MUIAutocompleteProps<ReturnLocation, false, false, false>, 'renderInput'> {
  startAdornment?: React.ReactNode;
  placeholder?: string;
}

export const Autocomplete = forwardRef(
  ({ placeholder, startAdornment, ...rest }: AutocompleteProps, forwardedRef) => {
    return (
      <MUIAutocomplete
        clearIcon={null}
        noOptionsText='Sonuç bulunamadı'
        sx={{ width: '100%', bgcolor: 'white' }}
        getOptionLabel={(option) => option.label}
        getOptionKey={(option) => option.value}
        renderInput={(params) => (
          <div style={{ height: '100%' }}>
            <TextField
              {...params}
              sx={{
                height: '100%',
                '.MuiOutlinedInput-root': {
                  height: '100%',
                },
              }}
              placeholder={placeholder}
              variant='outlined'
              inputRef={forwardedRef}
              slotProps={{
                input: {
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position='start' sx={{ color: 'primary.dark' }}>
                      {startAdornment}
                    </InputAdornment>
                  ),
                  sx: {
                    fontSize: '1.3rem',
                  },
                },
              }}
              fullWidth
            />
          </div>
        )}
        {...rest}
      />
    );
  },
);
