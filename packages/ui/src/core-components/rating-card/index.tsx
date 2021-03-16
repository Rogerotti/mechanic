import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { useStyles } from './rating-card.styles';
import { IRatingCardProps } from './rating-card.types';
import Rating from '@core-components/rating';

export const RatingCard: React.FC<IRatingCardProps> = ({ image, header, description, rating, date }) => {
  const classes = useStyles();

  return (
    <Box p={1}>
      <Box display="flex">
        <Box display="flex" alignItems="center">
          <img className={classes.image} src={image}></img>
          <Typography className={classes.header}>{header}</Typography>
        </Box>

        <Box marginLeft="auto">
          <Rating value={rating} readOnly />
          <Typography className={classes.date}>{date.toLocaleDateString('pl')}</Typography>
        </Box>
      </Box>

      <Box pt={1}>
        <Typography className={classes.description}>{description}</Typography>
      </Box>
    </Box>
  );
};

export default RatingCard;
