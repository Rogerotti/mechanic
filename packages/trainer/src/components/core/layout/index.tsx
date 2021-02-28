import React from 'react';
import { Layout as UILayout } from '@ui/composition/layout';
import headerLogo from '@assets/logo.svg';
import { Redirect, useHistory } from 'react-router-dom';

import { getHeaderLinks, getHeaderRightMenuLinks } from '../../../content-data/header';
import { getAuthorization, getRedirectUrl, getShouldRedirect } from '../../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
// import { navigationSuccess } from '@redux/actions/navigation';

export const Layout: React.FC<unknown> = ({ children }) => {
  const isAuthenticated = useSelector(getAuthorization);
  // const shouldRedirect = useSelector(getShouldRedirect);
  // const url = useSelector(getRedirectUrl);
  const history = useHistory();
  // const dispatch = useDispatch();

  const navigateToHomePage = () => {
    history.push('/');
  };

  // if (shouldRedirect) {
  //   dispatch(navigationSuccess());
  //   console.log('rediretc', url);
  //   // return (
  //   //   <Redirect
  //   //     to={{
  //   //       pathname: url,
  //   //     }}
  //   //   />
  //   // );

  //   history.push(url);
  //   return;
  // }

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
