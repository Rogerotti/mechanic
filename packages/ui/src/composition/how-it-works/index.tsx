import React from 'react';

import Box from '@material-ui/core/Box';
import { Grid, Typography } from '@material-ui/core';

import { StepCard } from '../../core-components/step-card';
import { IHowItWorksProps } from './how-it-works.types';

import { useStyles } from './how-it-works.styles';

export const HowItWorks: React.FC<IHowItWorksProps> = ({ header, steps }) => {
  const classes = useStyles();

  return (
    <Box padding={1} width="100%" bgcolor="primary.main">
      <Box pt={5}>
        <Typography align="center" variant="h3">
          {header}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" flexWrap="wrap" pt={15}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
          {steps &&
            steps.map((step) => (
              <Grid item key={step.number} sm={6} md={4} lg={3}>
                <StepCard number={step.number} icon={step.icon} header={step.header} subHeader={step.subHeader} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};
