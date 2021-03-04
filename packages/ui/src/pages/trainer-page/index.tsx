import React from 'react';

import Box from '@material-ui/core/Box';

import { ITrainersPageProps } from './trainer-page.types';
import { PresentationList } from '../../composition/presentation-list';
import { ExtendedSearch } from '../../composition/extended-search';

export const TrainersPage: React.FC<ITrainersPageProps> = ({
  trainers,
  numberOfPages,
  categories,
  cities,
  selectedCity,
  selectedCategories,
  onCategoriesChange,
  onCityChange,
}) => {
  return (
    <Box bgcolor="primary.main">
      <ExtendedSearch
        cities={cities}
        categories={categories}
        onCategoriesChange={onCategoriesChange}
        onCityChange={onCityChange}
        selectedCity={selectedCity}
        selectedCategories={selectedCategories}
      />
      <Box display="flex" justifyContent="center" pt={2}>
        <Box width="80%">
          <PresentationList items={trainers} numberOfPages={numberOfPages} />
        </Box>
      </Box>
    </Box>
  );
};
