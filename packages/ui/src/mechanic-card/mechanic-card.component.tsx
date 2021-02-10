import React from 'react';
import clsx from 'clsx';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@material-ui/core/Box';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Typography, Paper, Button } from '@material-ui/core';
import ChipList from '../core-components/chip-list';
import { IMechanicCardProps } from './mechanic-card.types';
import { useStyles } from './mechanic-card.styles';

const MechanicCard: React.FC<IMechanicCardProps> = ({
  className,
  id,
  onClick,
  image,
  name,
  lastName,
  location,
  generalBrands,
  additionalBrands,
  generalSpecialization,
  additionalSpecialization,
  bookText,
  specializationText,
  getMoreText,
  showLessText,
}) => {
  const classes = useStyles();

  return (
    <Paper className={clsx(className, classes.card)}>
      <img className={classes.image} src={image} />
      <Box display="block" width="100%">
        <Box display="flex" height="30%">
          <Box padding={2} display="flex" width="70%" flexWrap="wrap">
            <Box width="100%">
              <Typography component="h3" variant="h6" className={classes.ble}>
                {name} {lastName}
              </Typography>
            </Box>

            <Box display="flex">
              <Typography component="h4" variant="subtitle2">
                {location}
              </Typography>
              <LocationOnIcon />
            </Box>
          </Box>

          <Box padding={1} width="30%" display="flex" paddingTop={2} flexDirection="row-reverse">
            <Button
              variant="contained"
              color="primary"
              className={classes.rateButton}
              endIcon={<StarRateIcon />}
              onClick={() => {
                if (onClick) {
                  onClick(id);
                }
              }}
            >
              4.9
            </Button>
          </Box>
        </Box>
        <Box display="flex" height="55%">
          <Box paddingLeft={2}>
            <ChipList
              className={classes.chipList}
              label="Docelowe marki samochodu"
              general={generalBrands}
              additional={additionalBrands}
              getMoreText={getMoreText}
              showLessText={showLessText}
            />
            <ChipList
              className={classes.chipList}
              label={specializationText}
              general={generalSpecialization}
              additional={additionalSpecialization}
              getMoreText={getMoreText}
              showLessText={showLessText}
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="row-reverse" height="10%">
          <Button
            variant="text"
            color="primary"
            className={classes.submit}
            onClick={() => {
              if (onClick) {
                onClick(id);
              }
            }}
          >
            {bookText}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default MechanicCard;
