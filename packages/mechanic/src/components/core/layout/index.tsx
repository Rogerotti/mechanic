import React from 'react';
import headerLogo from '../../../public/logo.svg';
import { Layout as UILayout } from '../../../../../ui/src/composition/layout';

export const Layout: React.FC<unknown> = ({ children }) => {
  const headerLinks = [
    {
      text: 'O nas',
      href: 'about',
    },
    {
      text: 'Cennik',
      href: 'price',
    },
  ];

  const headerRightMenuLinks = [
    {
      text: 'Zaloguj',
      href: 'about',
    },
    {
      text: 'Zarejestruj',
      href: 'price',
    },
  ];

  return (
    <>
      <UILayout
        headerLinks={headerLinks}
        headerLogo={headerLogo}
        headerRightMenuLinks={headerRightMenuLinks}
        footerLogo={headerLogo}
      >
        {children}
      </UILayout>
    </>
  );
};

export default Layout;
