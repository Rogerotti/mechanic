import React from 'react';
import clsx from 'clsx';
import { IDropdownProps } from './dropdown.type';
import { InputAdornment, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useStyles } from './dropdown.styles';

export const Dropdown: React.FC<IDropdownProps> = ({ label, items, className, icon: IconComponent, onChange }) => {
  const classes = useStyles();

  return (
    <Autocomplete
      className={clsx(className)}
      classes={{
        listbox: classes.autocompleteListbox,
        endAdornment: classes.endAndornment,
      }}
      options={items}
      color="secondary"
      onChange={onChange}
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
