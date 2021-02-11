import React from 'react';

import Box from '@material-ui/core/Box';
import { Grid, Typography } from '@material-ui/core';

import { StepCard } from '../../core-components/step-card';
import { IHowItWorksProps } from './how-it-works.types';

import { useStyles } from './how-it-works.styles';
import search from '../../assets/search.svg';
import rate from '../../assets/rate.svg';

export const HowItWorks: React.FC<IHowItWorksProps> = ({ header }) => {
  // const classes = useStyles();

  const stepHeader = 'Przykładowy header';
  const stepSubHeader =
    'Zarejestruj się na naszej stronie lub w aplikacji za darmo. Potrzebujesz tylko adresu e-mail albo konta Google lub Facebook.';

  const numbersOfSteps = [1, 2, 3, 4, 5, 6];

  return (
    <Box padding={1} width="100%" bgcolor="primary.main" borderRadius={10}>
      <Typography align="center" variant="h2">
        {header}
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
          {numbersOfSteps.map((number) => (
            <Grid item key={number} sm={6} md={4} lg={3}>
              <StepCard number={number} icon={rate} header={stepHeader} subHeader={stepSubHeader} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
