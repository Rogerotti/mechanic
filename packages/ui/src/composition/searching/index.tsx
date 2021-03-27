import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import { Theme, Typography } from '@material-ui/core';

import { Button } from '@core-components/button';
import { Dropdown } from '@core-components/dropdown';

import { useStyles } from './searching.styles';
import { ISearchingProps } from './searching.types';
import { IListItem, IListItemGrouped } from '../../types/core';

export const Searching: React.FC<ISearchingProps> = ({
  header,
  subHeader,
  cities,
  citiesLoading,
  categories,
  categoriesLoading,
  selectedCategory,
  selectedCity,
  backgroundImage,
  onSearchClick,
  onCategoryChange,
  onCityChange,
}) => {
  const classes = useStyles();
  const isNotMobile = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  // eslint-disable-next-line @typescript-eslint/ban-types
  const onCityChangeCallback = (_event: React.ChangeEvent<{}>, value: IListItem) => {
    onCityChange?.(value);
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  const onCategoryChangeCallback = (_event: React.ChangeEvent<{}>, value: IListItemGrouped) => {
    onCategoryChange?.(value);
  };

  return (
    <Box width="100%" bgcolor="primary.main">
      <Box
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        minHeight={300}
        borderColor="primary.light"
        bgcolor="primary.main"
        justifyContent="center"
        alignItems="center"
        borderTop={1}
        borderLeft={1}
      >
        <Box justifyContent="center" pt={10}>
          <Typography color="textPrimary" align="center" variant="h3">
            {header}
          </Typography>
          <Typography className={classes.subHeader} color="textPrimary" align="center" variant="h4">
            {subHeader}
          </Typography>
        </Box>

        <Box
          display={{ xs: 'block', sm: 'flex' }}
          justifyContent="center"
          alignItems="center"
          pt={{ xs: 2, md: 10 }}
          pb={{ xs: 0, md: 10 }}
        >
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
              onChange={onCityChangeCallback}
              selectedValue={selectedCity}
            />
          </Box>
          <Box width={{ xs: '100%', sm: 'initial' }} mt={{ xs: 2, sm: 0 }} marginLeft={{ sm: 1 }}>
            <Button
              className={classes.button}
              onClick={onSearchClick}
              text="Szukaj"
              rounded={isNotMobile ? true : false}
              variant="contained"
              color="secondary"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
