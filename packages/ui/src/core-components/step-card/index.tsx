import React from 'react';

import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { CircleWithNumber } from '../circle-with-number';
import { IStepCardProps } from './step-card.types';

import { useStyles } from './step-card.styles';

export const StepCard: React.FC<IStepCardProps> = ({ number, icon, header, subHeader }) => {
  const classes = useStyles();

  return (
    <Box
      // borderTop={1}
      // padding={2}
      border="1px solid"
      borderColor="primary.light"
      position="relative"
      bgcolor="primary.main"
      minHeight={350}
      borderRadius={10}
      boxShadow={22}
    >
      <Box position="absolute" top={-25} left="45%">
        <CircleWithNumber number={number} />
      </Box>

      <Box display="flex" paddingTop={10} justifyContent="center">
        {icon && <img className={classes.image} src={icon} />}
      </Box>

      <Box mt={5} textAlign="center">
        <Typography variant="h4" color="secondary">
          {header}
        </Typography>

        <Box pt={2} pb={4}>
          <Typography variant="body1" color="textPrimary">
            {subHeader}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
