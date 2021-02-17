import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import { Theme, Typography } from '@material-ui/core';
import { useStyles } from './searching.styles';
import { Button } from '../../core-components/button';
import { Dropdown } from '../../core-components/dropdown';
import { MultiSelect } from '../../core-components/multi-select/multi-select.component';
import { ISearchingProps } from './searching.types';

export const Searching: React.FC<ISearchingProps> = ({ header, subHeader, cities, categories }) => {
  const classes = useStyles();
  const isNotMobile = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Box width="100%" bgcolor="primary.main">
      <div className={classes.root}>
        <Box
          className={classes.root}
          boxShadow={15}
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
                className={classes.button}
                text="Szukaj"
                rounded={isNotMobile ? true : false}
                variant="contained"
                color="secondary"
              />
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
};
