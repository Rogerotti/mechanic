import { Box } from '@material-ui/core';
import React from 'react';
import { TrainerCard } from '../trainer-card';
import { useStyles } from './trainer-list.styles';
import { ITrainerListProps } from './trainer-list.types';

export const TrainerList: React.FC<ITrainerListProps> = ({ trainers }) => {
  const classes = useStyles();

  return (
    <div>
      {trainers.map((trainer) => (
        <Box key={trainer.firstName} mb={2}>
          <TrainerCard {...trainer} />
        </Box>
      ))}
    </div>
  );
};
