import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import MUIRating from '@material-ui/lab/Rating';

import { useStyles } from './rating.styles';
import { IRatingProps } from './rating.types';

export const Rating: React.FC<IRatingProps> = ({ numberOfRatings, textColor, ...rest }) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <MUIRating
        classes={{
          iconEmpty: classes.iconEmpty,
          icon: classes.icon,
        }}
        {...rest}
      />
      <Typography color={textColor}>({numberOfRatings})</Typography>
    </Box>
  );
};

export default Rating;
