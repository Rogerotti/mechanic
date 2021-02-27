import React from 'react';

import { Header } from '../../composition/header';
import { Footer } from '../../composition/footer';
import { ILayout } from './layout.types';
import { useStyles } from './layout.styles';

export const Layout: React.FC<ILayout> = ({
  headerLinks,
  headerRightMenuLinks,
  headerLogo,
  headerUsername,
  onLogoClick,
  footerLogo,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Header
        links={headerLinks}
        logo={headerLogo}
        rightMenuLinks={headerRightMenuLinks}
        username={headerUsername}
        onLogoClick={onLogoClick}
      />
      <div className={classes.pageWrapper}>{children}</div>
      <Footer classes={{ footer: classes.footer }} logo={footerLogo} />
    </div>
  );
};

export default Layout;
