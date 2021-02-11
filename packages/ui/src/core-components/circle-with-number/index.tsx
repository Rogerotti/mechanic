import React from 'react';
import clsx from 'clsx';
import { ICircleWithNumberProps } from './circle-with-number.types';
import { useStyles } from './circle-with-number.styles';

export const CircleWithNumber: React.FC<ICircleWithNumberProps> = ({ number }) => {
  const classes = useStyles();
  return <div className={clsx(classes.shape, classes.shapeCircle)}>{number}</div>;
};
