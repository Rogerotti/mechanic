import React from 'react';
import ChipList from '@core-components/chip-list';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { Button } from '@core-components/button';
import { Rating } from '@core-components/rating';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { useStyles } from './presentation-card.styles';
import { IPresentationCardProps } from './presentation-card.types';

export const PresentationCardDesktop: React.FC<IPresentationCardProps> = ({
  id,
  header,
  image,
  description,
  descriptionShowMoreText,
  descriptionActionClick,
  rating,
  specializationChipListProps,
  numberOfRatings,
  location,
  actionText,
  onActionClick,
}) => {
  const classes = useStyles();

  return (
    <Box id={id} display="flex" width="100%" bgcolor="primary.main" borderRadius={10} px={3}>
      <Box pt={3} width={140}>
        <img className={classes.image} src={image} />

        <Rating value={rating} readOnly precision={0.5} size="small" numberOfRatings={numberOfRatings} />

        <Typography className={classes.location}>
          <LocationOnIcon /> {location}
        </Typography>
      </Box>

      <Box ml={{ xs: 1, sm: 2 }} mt={{ xs: 1, sm: 2 }} width="100%">
        <Box>
          <Box display="flex">
            <Box>
              <Typography className={classes.header}>{header}</Typography>
            </Box>

            <Box ml="auto"></Box>
          </Box>

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

        <Box display="flex" py={2}>
          <Box ml="auto">
            <Button onClick={onActionClick} text={actionText} variant="contained" color="secondary" rounded={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
