import React from 'react';

import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { CircleWithNumber } from '../circle-with-number';
import { IStepCardProps } from './step-card.types';

import { useStyles } from './step-card.styles';

export const StepCard: React.FC<IStepCardProps> = ({ number, icon, header, subHeader }) => {
  const classes = useStyles();

  //
  return (
    <Box position="relative" bgcolor="white" width={350} minHeight={350} borderRadius={10}>
      <Box position="absolute" top={-25} left={150}>
        <CircleWithNumber number={number} />
      </Box>

      <Box display="flex" paddingTop={10} justifyContent="center">
        {icon && <img className={classes.image} src={icon} />}
      </Box>
      <Box mt={5} textAlign="center">
        <Typography variant="h4" color="secondary">
          {header}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {subHeader}
        </Typography>
      </Box>
    </Box>
  );
};
