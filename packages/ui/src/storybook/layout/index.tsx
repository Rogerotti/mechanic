import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logoImage from '@assets/logo.svg';
import Layout from '../../composition/layout';
import { links, rightHeaderLinks } from '../data/header';

export const LayoutForStories: React.FC = ({ children }) => {
  const headerLinks = links;
  const headerRightMenuLinks = rightHeaderLinks;
  const headerUsername = 'Roger';

  return (
    <Router>
      <Layout
        headerLinks={headerLinks}
        headerRightMenuLinks={headerRightMenuLinks}
        footerLogo={logoImage}
        headerLogo={logoImage}
        headerUsername={headerUsername}
      >
        {children}
      </Layout>
    </Router>
  );
};
