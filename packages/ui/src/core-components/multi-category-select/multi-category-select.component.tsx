import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import { ICategoryListItem, IMultiCategorySelectProps } from './multi-category-select.types';
import { useStyles } from './multi-category-select.styles';
import { IListItem } from '../../types/core';

export const MultiCategorySelect: React.FC<IMultiCategorySelectProps> = ({
  label,
  placeholder,
  items,
  selectedValue,
  onChange,
}) => {
  const classes = useStyles();

  const [selectedItem, setSelectedItem] = useState<IListItem | ICategoryListItem | undefined>(selectedValue);

  useEffect(() => {
    if (selectedValue !== selectedItem) {
      setSelectedItem(selectedValue);
    }
  }, [selectedValue]);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const onChangeCallback = (_event: React.ChangeEvent<{}>, value: ICategoryListItem | IListItem) => {
    setSelectedItem(value);
    onChange?.(value);
  };

  return (
    <Autocomplete
      classes={{
        paper: classes.paper,
        endAdornment: classes.autocompleteEndAdornment,
        noOptions: classes.noOptionsLabel,
      }}
      disableClearable
      filterSelectedOptions
      onChange={onChangeCallback}
      value={selectedItem}
      options={items}
      noOptionsText="Brak opcji"
      getOptionLabel={(option) => option.value}
      ChipProps={{ color: 'secondary' }}
      renderInput={(params) => (
        <TextField
          classes={{
            root: classes.inputRoot,
          }}
          {...params}
          InputProps={{
            ...params.InputProps,
            classes: {
              root: classes.inputBase,
            },
          }}
          InputLabelProps={{
            ...params.InputLabelProps,
            classes: {
              focused: classes.inputLabel,
            },
          }}
          label={label}
          variant="outlined"
          placeholder={placeholder}
        />
      )}
    />
  );
};
