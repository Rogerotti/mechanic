import React from 'react';

import Box from '@material-ui/core/Box';

import { ITrainersPageProps } from './trainer-page.types';
import { TrainerList } from '../../composition/trainer-list';
import { ExtendedSearch } from '../../composition/extended-search';
import { categories, cities } from '../../storybook/data/searching';

export const TrainersPage: React.FC<ITrainersPageProps> = ({ trainers }) => {
  return (
    <Box bgcolor="primary.main">
      <ExtendedSearch cities={cities} categories={categories} />
      <Box display="flex" justifyContent="center" pt={2}>
        <Box width="80%">
          <TrainerList trainers={trainers} />
        </Box>
      </Box>
    </Box>
  );
};
