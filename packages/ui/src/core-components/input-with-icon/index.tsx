import React, { useEffect, useState } from 'react';
import { IInputWithIconProps } from './input-with-icon.type';
import { InputAdornment, TextField } from '@material-ui/core';
import { selectIconComponent } from '../../utils/icons';

export const InputWithIcon: React.FC<IInputWithIconProps> = ({
  inputClassName,
  className,
  icon,
  value,
  placeholder,
  onChange,
}) => {
  const Icon = selectIconComponent(icon);
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    if (currentValue !== value) {
      setCurrentValue(value);
    }
  }, [value]);

  return (
    <TextField
      className={className}
      variant="outlined"
      InputProps={{
        className: inputClassName,
        onChange,
        value: currentValue,
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
