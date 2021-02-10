import React from 'react';
import MuiButton from '@material-ui/core/Button';
import { IButtonProps } from './button.types';

export const Button: React.FC<IButtonProps> = ({ text, rounded = false, ...rest }) => {
  return (
    <MuiButton style={{ borderRadius: rounded ? 16 : 0 }} {...rest}>
      {text}
    </MuiButton>
  );
};
