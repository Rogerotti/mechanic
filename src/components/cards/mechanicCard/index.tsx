import React from 'react';
import clsx from 'clsx';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
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
    width: '50%',
    backgroundColor: 'white',
    padding: 25,
  },
  image: {
    height: '220px',
    width: '170px',
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
      <Box display="flex">
        <img className={classes.image} src={image} />
        <Box className={classes.content}>
          <Typography variant="h6">
            {name} {lastName}
          </Typography>
          <Typography variant="h6">{location}</Typography>
          <Rating name="size-large" defaultValue={raiting} readOnly size="large" precision={0.5} />({raitingCount})
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
        </Box>
        <div>
          <Divider className={classes.divider} color="primary" orientation="vertical" />
        </div>
        <Box>{description}</Box>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          onClick(id);
        }}
      >
        {getText('book')}
      </Button>
    </Paper>
  );
};

export default MechanicCard;
