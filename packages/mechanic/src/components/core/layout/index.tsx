import React from 'react';
import { Layout as UILayout } from '@ui/composition/layout';
import headerLogo from '@assets/logo.svg';

import { getHeaderLinks, getHeaderRightMenuLinks } from '../../../content-data/header';

export const Layout: React.FC<unknown> = ({ children }) => {
  return (
    <>
      <UILayout
        headerLinks={getHeaderLinks()}
        headerRightMenuLinks={getHeaderRightMenuLinks()}
        headerLogo={headerLogo}
        footerLogo={headerLogo}
      >
        {children}
      </UILayout>
    </>
  );
};

export default Layout;
