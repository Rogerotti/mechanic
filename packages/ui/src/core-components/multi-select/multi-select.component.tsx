import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import { IMultiSelectProps } from './multi-select.types';
import { useStyles } from './multi-select.styles';
import { IListItem } from '../../types/core';

export const MultiSelect: React.FC<IMultiSelectProps> = ({ label, placeholder, items, selectedValues, onChange }) => {
  const classes = useStyles();

  const [selectedItems, setSelectedItems] = useState<IListItem[] | undefined>(selectedValues);

  useEffect(() => {
    if (selectedValues !== selectedItems) {
      setSelectedItems(selectedValues);
    }
  }, [selectedValues]);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const onChangeCallback = (_event: React.ChangeEvent<{}>, values: IMultiSelectProps['items']) => {
    setSelectedItems(values);
    onChange?.(values);
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
      value={selectedItems}
      multiple
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
