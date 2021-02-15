import React from 'react';

import Box from '@material-ui/core/Box';
import { Grid, Typography } from '@material-ui/core';

import { StepCard } from '../../core-components/step-card';
import { IHowItWorksProps } from './how-it-works.types';

import { useStyles } from './how-it-works.styles';
import search from '../../assets/search.svg';
import rate from '../../assets/rate.svg';
import password from '../../assets/pass.svg';

interface IStep {
  number: number;
  header: string;
  subHeader: string;
  icon?: string;
}

export const HowItWorks: React.FC<IHowItWorksProps> = ({ header }) => {
  // const classes = useStyles();

  const stepHeader = 'Przykładowy header';
  const stepSubHeader =
    'Zarejestruj się na naszej stronie lub w aplikacji za darmo. Potrzebujesz tylko adresu e-mail albo konta Google lub Facebook.';

  const steps: IStep[] = [
    {
      number: 1,
      header: stepHeader,
      subHeader: stepSubHeader,
      icon: search,
    },
    {
      number: 2,
      header: stepHeader,
      subHeader: stepSubHeader,
      icon: rate,
    },
    {
      number: 3,
      header: stepHeader,
      subHeader: stepSubHeader,
      icon: password,
    },
    {
      number: 4,
      header: stepHeader,
      subHeader: stepSubHeader,
      icon: rate,
    },
    {
      number: 5,
      header: stepHeader,
      subHeader: stepSubHeader,
      icon: password,
    },
    {
      number: 6,
      header: stepHeader,
      subHeader: stepSubHeader,
      icon: rate,
    },
  ];

  return (
    <Box padding={1} width="100%" bgcolor="primary.main" borderRadius={10}>
      <Typography align="center" variant="h2">
        {header}
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap" pt={15}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
          {steps.map((step) => (
            <Grid item key={step.number} sm={6} md={4} lg={3}>
              <StepCard number={step.number} icon={step.icon} header={step.header} subHeader={step.subHeader} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
