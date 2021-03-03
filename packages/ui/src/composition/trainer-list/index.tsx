import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Box } from '@material-ui/core';
import { TrainerCard } from '../trainer-card';
import { useStyles } from './trainer-list.styles';
import { ITrainerListProps } from './trainer-list.types';

export const TrainerList: React.FC<ITrainerListProps> = ({ trainers }) => {
  const classes = useStyles();

  return (
    <Box width="100%">
      {trainers.map((trainer) => (
        <Box key={trainer.firstName} mb={2} boxShadow={10}>
          <TrainerCard {...trainer} />
        </Box>
      ))}
      <Pagination
        classes={{
          ul: classes.test,
        }}
        count={30}
        size="large"
        color="secondary"
        variant="text"
      />
    </Box>
  );
};
