import React from 'react';
import { useStyles } from './loader.styles';

export const Loader: React.FC<any> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
