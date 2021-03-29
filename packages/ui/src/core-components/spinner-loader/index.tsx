import React from 'react';

import { useStyles } from './spinner-loader.styles';
import { ISpinnerLoaderProps, SpinnerLoaderStylesProps } from './spinner-loader.types';

export const SpinnerLoader: React.FC<ISpinnerLoaderProps> = ({ scale }) => {
  const styleProps: SpinnerLoaderStylesProps = {
    scale: scale ?? 1.0,
  };
  const classes = useStyles(styleProps)();

  return <div className={classes.loader}>Loading...</div>;
};

export default SpinnerLoader;
