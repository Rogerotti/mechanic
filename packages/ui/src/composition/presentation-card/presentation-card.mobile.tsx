import React from 'react';
import ChipList from '@core-components/chip-list';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { Rating } from '@core-components/rating';
import { Button } from '@core-components/button';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { useStyles } from './presentation-card.styles';
import { IPresentationCardProps } from './presentation-card.types';

export const PresentationCardMobile: React.FC<IPresentationCardProps> = ({
  id,
  header,
  image,
  description,
  descriptionShowMoreText,
  descriptionActionClick,
  rating,
  numberOfRatings,
  location,
  specializationChipListProps,
}) => {
  const classes = useStyles();

  return (
    <Box id={id} width="100%" bgcolor="primary.main" borderRadius={10} px={1}>
      <Box display="flex" pt={1}>
        <img className={classes.image} src={image} />

        <Box ml={1}>
          <Typography className={classes.header}>{header}</Typography>

          <Rating value={rating} readOnly precision={0.5} size="small" numberOfRatings={numberOfRatings} />
          <Typography className={classes.location}>
            <LocationOnIcon /> {location}
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box mt={2}>
          <Typography className={classes.description}>
            {description}

            <Typography onClick={descriptionActionClick} className={classes.description2}>
              {descriptionShowMoreText}
            </Typography>
          </Typography>
        </Box>

        {specializationChipListProps && (
          <Box mt={2}>
            <ChipList {...specializationChipListProps} />
          </Box>
        )}
      </Box>
      <Box display="flex" py={1} justifyContent="flex-end">
        <Box>
          <Button text="Zarezerwuj" variant="contained" color="secondary" rounded={true} />
        </Box>
      </Box>
    </Box>
  );
};
