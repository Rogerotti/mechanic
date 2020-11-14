import React from 'react';
import { IInputWithIconProps } from './input-with-icon.type';
import { InputAdornment, TextField } from '@material-ui/core';
import { selectIconComponent } from '../../utils/icons';

export const InputWithIcon: React.FC<IInputWithIconProps> = ({ icon }) => {
  const Icon = selectIconComponent(icon);
  return (
    <TextField
      id="input-with-icon-textfield"
      label="test"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon />
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};
