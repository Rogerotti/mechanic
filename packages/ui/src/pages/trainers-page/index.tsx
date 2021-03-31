import React from 'react';

import Box from '@material-ui/core/Box';

import { ITrainersPageProps } from './trainers-page.types';
import { PresentationList } from '../../composition/presentation-list';
import { ExtendedSearch } from '../../composition/extended-search';
import SpinnerLoader from '@core-components/spinner-loader';
import { Theme, useMediaQuery } from '@material-ui/core';

export const TrainersPage: React.FC<ITrainersPageProps> = ({
  trainers,
  trainersLoading,

  numberOfPages,
  page,
  onPageChange,

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
  onSearchClick,
}) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'));

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
        onSearchClick={onSearchClick}
      />
      {trainersLoading ? (
        <Box minHeight={{ xs: '200px', sm: '400px', md: '600px' }} display="flex" alignItems="center">
          <SpinnerLoader scale={isMobile ? 1 : 1.5} />
        </Box>
      ) : (
        <Box display="flex" justifyContent="center" pt={2}>
          <Box width="80%">
            <PresentationList items={trainers} numberOfPages={numberOfPages} page={page} onPageChange={onPageChange} />
          </Box>
        </Box>
      )}
    </Box>
  );
};
