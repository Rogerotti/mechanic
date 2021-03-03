import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import { Theme, Typography } from '@material-ui/core';

import { Button } from '@core-components/button';
import { Dropdown } from '@core-components/dropdown';
import { MultiSelect } from '@core-components/multi-select/multi-select.component';

import { useStyles } from './extended-search.styles';
import { IExtendedSearchProps } from './extended-search.types';
import { IListItem } from '../../types/core';

export const ExtendedSearch: React.FC<IExtendedSearchProps> = ({ cities, categories, onSearchClick }) => {
  const classes = useStyles();

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
            <MultiSelect label="Kategorie" placeholder="Wyszukaj" items={categories} />
          </Box>
          <Box
            width="100%"
            mt={{ xs: 2, sm: 0 }}
            maxWidth={{ xs: '100%', sm: 200, lg: 275 }}
            color="#191919"
            marginLeft={{ sm: 2 }}
          >
            <Dropdown label="Miasto" items={cities} />
          </Box>
          <Box width={{ xs: '100%', sm: 'initial' }} mt={{ xs: 2, sm: 0 }} marginLeft={{ sm: 1 }}>
            <Button
              // className={classes.button}
              onClick={onSearchClick}
              text="Szukaj"
              rounded={true}
              variant="contained"
              color="secondary"
            />
          </Box>
        </Box>
        {/* 
        <Box ml={2}>
          <Typography variant="h5">Filtry</Typography>
          <Box mt={2}>
            <Box
              width="100%"
              mt={{ xs: 2, sm: 0 }}
              maxWidth={{ xs: '100%', sm: 200, lg: 275 }}
              color="#191919"
              marginLeft={{ sm: 2 }}
            >
              <Dropdown label="rodzaj zajec" items={cities} />
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};
