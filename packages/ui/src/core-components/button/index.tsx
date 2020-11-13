import React from 'react';
import MuiButton from '@material-ui/core/Button';
import { IButtonProps } from './button.types';

export const Button: React.FC<IButtonProps> = ({ text }) => {
  return <MuiButton size="large">{text}</MuiButton>;
};
