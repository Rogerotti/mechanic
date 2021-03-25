import React from 'react';

import Box from '@material-ui/core/Box';

import { ITrainersPageProps } from './trainers-page.types';
import { PresentationList } from '../../composition/presentation-list';
import { ExtendedSearch } from '../../composition/extended-search';

export const TrainersPage: React.FC<ITrainersPageProps> = ({
  trainers,
  numberOfPages,
  categories,
  generalCategories,
  categoriesLoading,
  cities,
  citiesLoading,
  selectedCity,
  selectedCategory,
  selectedGeneralCategory,
  onCategoryChange,
  onGeneralCategoryChange,
  onCityChange,
}) => {
  return (
    <Box bgcolor="primary.main">
      <ExtendedSearch
        cities={cities}
        citiesLoading={citiesLoading}
        generalCategories={generalCategories}
        categories={categories}
        categoriesLoading={categoriesLoading}
        onCategoryChange={onCategoryChange}
        onCityChange={onCityChange}
        onGeneralCategoryChange={onGeneralCategoryChange}
        selectedCity={selectedCity}
        selectedCategory={selectedCategory}
        selectedGeneralCategory={selectedGeneralCategory}
      />
      <Box display="flex" justifyContent="center" pt={2}>
        <Box width="80%">
          <PresentationList items={trainers} numberOfPages={numberOfPages} />
        </Box>
      </Box>
    </Box>
  );
};
