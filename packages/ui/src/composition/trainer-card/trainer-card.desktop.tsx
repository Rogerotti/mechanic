import React from 'react';
import ChipList from '@core-components/chip-list';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Button } from '@core-components/button';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { useStyles } from './trainer-card.styles';
import { ITrainerCardProps } from './trainer-card.types';

export const TrainerCardDesktop: React.FC<ITrainerCardProps> = ({
  firstName,
  lastName,
  image,
  description,
  rating,
  numberOfRaitings,
  location,
  generalCategories,
  additionalCategories,
}) => {
  const classes = useStyles();

  const showMoreText = 'Dowiedz się więcej...';

  return (
    <Box display="flex" width="100%" bgcolor="primary.main" borderRadius={10} px={3}>
      <Box pt={3}>
        <img className={classes.image} src={image} />

        <Box display="flex" alignItems="center">
          <Rating
            classes={{
              iconEmpty: classes.rating,
              icon: classes.test,
            }}
            value={rating}
            readOnly
            precision={0.5}
            size="small"
          />
          <Typography>({numberOfRaitings})</Typography>
        </Box>

        <Typography className={classes.location}>
          <LocationOnIcon /> {location}
        </Typography>
      </Box>

      <Box ml={{ xs: 1, sm: 2 }} mt={{ xs: 1, sm: 2 }}>
        <Box>
          <Box display="flex">
            <Box>
              <Typography className={classes.header}>
                {firstName} {lastName}
              </Typography>
            </Box>

            <Box ml="auto"></Box>
          </Box>

          <Box mt={2}>
            <Typography className={classes.description}>
              {description}

              <Typography className={classes.description2}>{showMoreText}</Typography>
            </Typography>
          </Box>

          <Box mt={2}>
            <ChipList
              label="Specjalizacja"
              general={generalCategories}
              additional={additionalCategories}
              getMoreText="Więcej"
              showLessText="mniej"
            />
          </Box>
        </Box>

        <Box display="flex" py={2}>
          <Box ml="auto">
            <Button text="Zarezerwuj" variant="contained" color="secondary" rounded={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
