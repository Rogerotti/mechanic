import React from 'react';

import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { useStyles } from './searching.styles';
import { Button } from '../../core-components/button';
import { Dropdown } from '../../core-components/dropdown';
import { MultiSelect } from '../../core-components/multi-select/multi-select.component';

interface ISearchingProps {
  header: string;
}

export interface ICity {
  id: string;
  value: string;
}

export const Searching: React.FC<ISearchingProps> = ({ header, subHeader }) => {
  const classes = useStyles();

  const cities: ICity[] = [
    {
      value: 'Krakow',
      id: 'KRK',
    },
    {
      value: 'Warszawa',
      id: 'WWA',
    },
  ];

  const categories: ICity[] = [
    {
      value: 'MMA',
      id: 'mma',
    },
    {
      value: 'Pływanie',
      id: 'swim',
    },
    {
      value: 'ćwiczenie',
      id: 'swim',
    },
  ];

  return (
    <Box className={classes.borderRadiusTop} padding={1} width="100%" bgcolor="white">
      <Box
        boxShadow={15}
        minHeight={300}
        bgcolor="primary.main"
        justifyContent="center"
        alignItems="center"
        borderTop={1}
        borderColor="primary.light"
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

        <Box display="flex" justifyContent="center" alignItems="center" pt={10} pb={10}>
          <Box minWidth={400} color="#191919" marginLeft={1}>
            <MultiSelect label="Kategorie" placeholder="Wyszukaj" items={categories} />
          </Box>
          <Box minWidth={300} color="#191919" marginLeft={2}>
            <Dropdown label="Miasto" items={cities} />
          </Box>
          <Box marginLeft={1}>
            <Button text="Szukaj" rounded={true} variant="contained" color="secondary" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
