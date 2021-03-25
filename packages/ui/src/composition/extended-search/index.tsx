import React from 'react';

import Box from '@material-ui/core/Box';

import { Button } from '@core-components/button';
import { Dropdown } from '@core-components/dropdown';

import { useStyles } from './extended-search.styles';
import { IExtendedSearchProps } from './extended-search.types';
import { IListItemGrouped } from '../../types/core';

export const ExtendedSearch: React.FC<IExtendedSearchProps> = ({
  selectedCity,
  selectedCategory,
  selectedGeneralCategory,
  cities,
  citiesLoading,
  categories,
  categoriesLoading,

  generalCategories,

  onSearchClick,
  onCityChange,
  onCategoryChange,
  onGeneralCategoryChange,
}) => {
  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const onCategoryChangeCallback = (_event: React.ChangeEvent<{}>, value: IListItemGrouped) => {
    onCategoryChange?.(value);
  };

  return (
    <Box width="100%" bgcolor="primary.main">
      <Box
        boxShadow={15}
        minHeight={100}
        borderColor="primary.light"
        bgcolor="primary.main"
        borderTop={1}
        borderLeft={1}
      >
        <Box
          display={{ xs: 'block', sm: 'flex' }}
          justifyContent="center"
          alignItems="center"
          pt={{ xs: 2, md: 2 }}
          pb={{ xs: 0, md: 2 }}
        >
          <Box width="100%" maxWidth={{ xs: '100%', sm: 350, lg: 400 }} color="#191919">
            <Dropdown
              label="Kategoria ogólna"
              isLoading={categoriesLoading}
              items={generalCategories}
              onChange={onGeneralCategoryChange}
              selectedValue={selectedGeneralCategory}
              groupByValue={true}
            />
          </Box>
          <Box width="100%" maxWidth={{ xs: '100%', sm: 350, lg: 400 }} color="#191919">
            <Dropdown
              label="Kategoria"
              isLoading={categoriesLoading}
              items={categories}
              onChange={onCategoryChangeCallback}
              selectedValue={selectedCategory}
              groupByValue={true}
            />
          </Box>
          <Box
            width="100%"
            mt={{ xs: 2, sm: 0 }}
            maxWidth={{ xs: '100%', sm: 200, lg: 275 }}
            color="#191919"
            marginLeft={{ sm: 2 }}
          >
            <Dropdown
              label="Miasto"
              isLoading={citiesLoading}
              items={cities}
              selectedValue={selectedCity}
              onChange={onCityChange}
            />
          </Box>
          <Box width={{ xs: '100%', sm: 'initial' }} mt={{ xs: 2, sm: 0 }} marginLeft={{ sm: 1 }}>
            <Button onClick={onSearchClick} text="Szukaj" rounded={true} variant="contained" color="secondary" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
