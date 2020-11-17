import React from 'react';
import { IInputWithIconProps } from './input-with-icon.type';
import { InputAdornment, TextField } from '@material-ui/core';
import { selectIconComponent } from '../../utils/icons';

export const InputWithIcon: React.FC<IInputWithIconProps> = ({ inputClassName,className, icon, placeholder, onChange }) => {
  const Icon = selectIconComponent(icon);
  return (
    <TextField
      className={className}
      variant="outlined"
      InputProps={{
        className: inputClassName,
        onChange,
        placeholder,
        startAdornment: (
          <InputAdornment position="start">
            <Icon />
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};
