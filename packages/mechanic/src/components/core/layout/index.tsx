import React from 'react';
import headerLogo from '../../../public/logo.svg';
import { Layout as UILayout } from '../../../../../ui/src/composition/layout';
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
