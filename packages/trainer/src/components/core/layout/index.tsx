import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import headerLogo from '@assets/logo.svg';
import { Layout as UILayout } from '@ui/composition/layout';

import { getHeaderLinks, getHeaderRightMenuLinks } from '../../../content-data/header';
import { getAuthorization } from '../../../redux/selectors';

export const Layout: React.FC<unknown> = ({ children }) => {
  const isAuthenticated = useSelector(getAuthorization);
  const history = useHistory();

  const navigateToHomePage = () => {
    history.push('/');
  };

  return (
    <>
      <UILayout
        headerLinks={getHeaderLinks()}
        headerRightMenuLinks={getHeaderRightMenuLinks(isAuthenticated)}
        headerLogo={headerLogo}
        footerLogo={headerLogo}
        onLogoClick={navigateToHomePage}
      >
        {children}
      </UILayout>
    </>
  );
};

export default Layout;
