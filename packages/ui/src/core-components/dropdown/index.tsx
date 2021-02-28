import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { IDropdownProps } from './dropdown.type';
import { InputAdornment, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useStyles } from './dropdown.styles';
import { IListItem } from '../../types/core';

export const Dropdown: React.FC<IDropdownProps> = ({
  label,
  selectedValue,
  items,
  className,
  icon: IconComponent,
  onChange,
}) => {
  const classes = useStyles();
  const [selectedCity, setSelectedCity] = useState<IListItem | undefined>(selectedValue);
  useEffect(() => {
    if (selectedValue !== selectedCity && items.some((item) => item === selectedValue)) {
      setSelectedCity(selectedCity);
    }
  }, [selectedValue]);
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
        endAdornment: classes.endAndornment,
      }}
      value={selectedCity}
      options={items}
      color="secondary"
      onChange={onChangeCallback}
      getOptionSelected={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.value}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          color="secondary"
          InputProps={{
            ...params.InputProps,
            startAdornment: IconComponent ? (
              <InputAdornment className={classes.startAndornment} position="end">
                {IconComponent}
              </InputAdornment>
            ) : null,
          }}
        />
      )}
    />
  );
};
