import React from 'react';
import { Layout as UILayout } from '@ui/composition/layout';
import headerLogo from '@assets/logo.svg';
import { useHistory } from 'react-router-dom';

import { getHeaderLinks, getHeaderRightMenuLinks } from '../../../content-data/header';
import { getAuthorization } from '../../../store/selectors';
import { useSelector } from 'react-redux';

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
