import React from 'react';

import Box from '@material-ui/core/Box';

import { Header } from '../../composition/header';
import { Searching } from '../../composition/searching';
import { HowItWorks } from '../../composition/how-it-works';
import { IHomePageProps } from './home-page.types';
import { useStyles } from './home-page.styles';
import { Footer } from '../../composition/footer';

export const HomePage: React.FC<IHomePageProps> = ({
  logo,
  searchHeader,
  searchSubheader,
  howItWorksHeader,
  username,
  links,
  rightMenuLinks,
  tabs,
  steps,
  cities,
  categories,
  howItWorksSelectedTabId,
  onHowItWorksTabChange,
}) => {
  const classes = useStyles();

  return (
    <Box bgcolor="primary.main">
      <Header links={links} rightMenuLinks={rightMenuLinks} logo={logo} username={username} />
      <Searching header={searchHeader} subHeader={searchSubheader} cities={cities} categories={categories} />
      <HowItWorks
        header={howItWorksHeader}
        steps={steps}
        tabs={tabs}
        selectedTabId={howItWorksSelectedTabId}
        onTabChange={onHowItWorksTabChange}
      />

      <Footer />
    </Box>
  );
};
