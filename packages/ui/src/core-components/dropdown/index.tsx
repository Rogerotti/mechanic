import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { InputAdornment, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { IDropdownProps } from './dropdown.type';
import { useStyles } from './dropdown.styles';
import { IListItem } from '../../types/core';
import Loader from '@core-components/loader';

export const Dropdown: React.FC<IDropdownProps> = ({
  label,
  selectedValue,
  isLoading,
  items,
  className,
  icon: IconComponent,
  onChange,
}) => {
  const classes = useStyles();
  const selectedCountryInListOfCountries = items.find((item) => item.id === selectedValue?.id);
  const [selectedCity, setSelectedCity] = useState<IListItem | undefined>(selectedCountryInListOfCountries);

  useEffect(() => {
    if (selectedValue !== selectedCity && items.some((item) => item === selectedValue)) {
      setSelectedCity(selectedCity);
    }
  }, [selectedValue]);

  useEffect(() => {
    if (items.some((item) => item.id === selectedValue?.id)) {
      setSelectedCity(selectedValue);
    }
  }, [items]);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const onChangeCallback = (event: React.ChangeEvent<{}>, value: IListItem): void => {
    setSelectedCity(value);
    onChange?.(event, value);
  };

  return (
    <Autocomplete
      className={clsx(className)}
      classes={{
        listbox: classes.autocompleteListbox,
        endAdornment: classes.endAdornment,
      }}
      disabled={isLoading}
      value={isLoading ? null : selectedCity}
      options={items}
      color="secondary"
      onChange={onChangeCallback}
      getOptionSelected={(option, value) => option?.id === value?.id}
      getOptionLabel={(option) => option.value}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          color="secondary"
          disabled={isLoading}
          InputProps={{
            ...params.InputProps,
            startAdornment:
              IconComponent || isLoading ? (
                <InputAdornment className={classes.startAdornment} position="end">
                  {IconComponent && IconComponent}
                  {isLoading && <Loader />}
                </InputAdornment>
              ) : null,
          }}
        />
      )}
    />
  );
};
