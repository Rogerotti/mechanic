import React from 'react';

import Box from '@material-ui/core/Box';
import { Grid, Typography } from '@material-ui/core';

import { Header } from '../../composition/header';
import { Searching } from '../../composition/searching';
import { HowItWorks } from '../../composition/how-it-works';
import { IHomePageProps } from './home-page.types';
import { useStyles } from './home-page.styles';

export const HomePage: React.FC<IHomePageProps> = ({
  logo,
  loginText,
  registerText,
  searchHeader,
  searchSubheader,
  howItWorksHeader,
  links,
  steps,
}) => {
  const classes = useStyles();

  return (
    <>
      <Header loginText={loginText} registerText={registerText} links={links} logo={logo} />
      <Searching header={searchHeader} subHeader={searchSubheader} />
      <HowItWorks header={howItWorksHeader} steps={steps} />
    </>
  );
};
