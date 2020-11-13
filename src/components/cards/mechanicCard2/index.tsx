import React from 'react';
import clsx from 'clsx';
import Rating from '@material-ui/lab/Rating';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Typography, Paper, Button, Divider } from '@material-ui/core';
import ChipList from '../../core/chipList';
import useTranslation from '../../../translations/hooks';

interface MechanicCardProps {
  className: string;
  id: string;
  image: string;
  name: string;
  lastName: string;
  location: string;
  raiting: number;
  raitingCount: number;
  generalBrands: any[];
  additionalBrands: any[];
  generalSpecialization: any[];
  additionalSpecialization: any[];
  onClick: (id: string) => void;
  description: string;
}

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    width: 600,
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 15,
    // padding: 25,
  },
  image: {
    height: '100%',
    width: '170px',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  content: {
    paddingLeft: 10,
    minWidth: '45%',
  },
  chipList: {
    marginTop: 5,
  },
  divider: {
    width: 3,
    marginRight: 5,
    background: theme.palette.primary.light,
  },
  rateButton: {
    width: 25,
    height: 25,
  },
  submit: {
    width: 150,
    // fontSize: 20,
  },
  ble: {
    fontWeight: 'bold',
  },
}));

const MechanicCard: React.FC<MechanicCardProps> = ({
  className,
  id,
  onClick,
  description,
  image,
  name,
  lastName,
  location,
  raiting,
  raitingCount,
  generalBrands,
  additionalBrands,
  generalSpecialization,
  additionalSpecialization,
}) => {
  const classes = useStyles();
  const { getText } = useTranslation();
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
                onClick(id);
              }}
            >
              4.9
            </Button>
          </Box>
          {/* <Box display="flex" height="50%">
  
          </Box>
          <Box display="flex" height="50%">
         
          </Box> */}
        </Box>
        <Box display="flex" height="55%">
          <Box paddingLeft={2}>
            <ChipList
              className={classes.chipList}
              label="Docelowe marki samochodu"
              general={generalBrands}
              additional={additionalBrands}
            />
            <ChipList
              className={classes.chipList}
              label={getText('specialization')}
              general={generalSpecialization}
              additional={additionalSpecialization}
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="row-reverse" height="10%">
          <Button
            variant="text"
            color="primary"
            className={classes.submit}
            onClick={() => {
              onClick(id);
            }}
          >
            {getText('book')}
          </Button>
        </Box>
      </Box>

      {/* <Box display="block">
        <Typography variant="h6">
          {name} {lastName}
        </Typography>
        <Typography variant="h6">{location}</Typography>
        <Box>
          <ChipList
            className={classes.chipList}
            label={getText('brands')}
            general={generalBrands}
            additional={additionalBrands}
          />
          <ChipList
            className={classes.chipList}
            label={getText('specialization')}
            general={generalSpecialization}
            additional={additionalSpecialization}
          />
        </Box>
      </Box> */}
    </Paper>
  );
};

export default MechanicCard;
