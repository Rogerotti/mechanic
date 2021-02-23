import React from 'react';

import { Header } from '../../composition/header';
import { Footer } from '../../composition/footer';
import { ILayout } from './layout.types';

export const Layout: React.FC<ILayout> = ({
  headerLinks,
  headerRightMenuLinks,
  headerLogo,
  headerUsername,
  footerLogo,
  children,
}) => {
  return (
    <>
      <Header links={headerLinks} logo={headerLogo} rightMenuLinks={headerRightMenuLinks} username={headerUsername} />
      {children}
      <Footer logo={footerLogo} />
    </>
  );
};

export default Layout;
