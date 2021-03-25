import React from 'react';

import Box from '@material-ui/core/Box';

import { Searching } from '../../composition/searching';
import { HowItWorks } from '../../composition/how-it-works';
import { IHomePageProps } from './home-page.types';

export const HomePage: React.FC<IHomePageProps> = ({
  searchHeader,
  searchSubheader,
  searchBackgroundImage,
  howItWorksHeader,
  onSearchClick,
  onCategoryChange,
  onCityChange,

  tabs,
  steps,
  cities,
  citiesLoading,
  categories,
  categoriesLoading,
  selectedCategory,
  selectedCity,
  howItWorksSelectedTabId,
  onHowItWorksTabChange,
}) => {
  return (
    <Box bgcolor="primary.main">
      <Searching
        header={searchHeader}
        subHeader={searchSubheader}
        cities={cities}
        citiesLoading={citiesLoading}
        categories={categories}
        categoriesLoading={categoriesLoading}
        selectedCategory={selectedCategory}
        selectedCity={selectedCity}
        backgroundImage={searchBackgroundImage}
        onSearchClick={onSearchClick}
        onCategoryChange={onCategoryChange}
        onCityChange={onCityChange}
      />
      <HowItWorks
        header={howItWorksHeader}
        steps={steps}
        tabs={tabs}
        selectedTabId={howItWorksSelectedTabId}
        onTabChange={onHowItWorksTabChange}
      />
    </Box>
  );
};
