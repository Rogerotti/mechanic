import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { InputAdornment, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { IDropdownProps } from './dropdown.type';
import { useStyles } from './dropdown.styles';
import Loader from '@core-components/loader';
import { IListItemGrouped } from '../../types/core';

export const Dropdown: React.FC<IDropdownProps> = ({
  label,
  selectedValue,
  isLoading,
  items,
  className,
  groupByValue,
  icon: IconComponent,
  onChange,
}) => {
  const classes = useStyles();
  const [currentSelectedValue, setCurrentSelectedValue] = useState<IListItemGrouped | undefined>(selectedValue);

  useEffect(() => {
    if (!isLoading && selectedValue !== currentSelectedValue && items.some((item) => item === selectedValue)) {
      setCurrentSelectedValue(currentSelectedValue);
    } else if (!isLoading && selectedValue !== currentSelectedValue && selectedValue === null) {
      setCurrentSelectedValue(null);
    }
  }, [selectedValue]);

  useEffect(() => {
    if (!isLoading && items.some((item) => item === selectedValue)) {
      setCurrentSelectedValue(currentSelectedValue);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && items.some((item) => item.id === selectedValue?.id)) {
      setCurrentSelectedValue(selectedValue);
    }
  }, [items]);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const onChangeCallback = (event: React.ChangeEvent<{}>, value: IListItemGrouped): void => {
    setCurrentSelectedValue(value);
    if (!isLoading) {
      onChange?.(event, value);
    }
  };

  return (
    <Autocomplete
      className={clsx(className)}
      classes={{
        listbox: classes.autocompleteListbox,
        endAdornment: classes.endAdornment,
        groupLabel: classes.groupLabel,
      }}
      disabled={isLoading}
      value={currentSelectedValue}
      options={items}
      color="secondary"
      onChange={onChangeCallback}
      filterSelectedOptions={true}
      groupBy={groupByValue ? (option) => option.groupValue : undefined}
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
