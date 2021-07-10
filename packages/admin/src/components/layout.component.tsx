import * as React from 'react';
// import { useSelector } from 'react-redux';
import { Layout, LayoutProps, Sidebar } from 'react-admin';

const CustomSidebar = (props: any) => <Sidebar {...props} size={200} />;

export default (props: LayoutProps) => {
  // const theme = useSelector((state: any) =>
  //     state.theme === 'dark' ? darkTheme : lightTheme
  // );
  return (
    <Layout
      {...props}
      // appBar={AppBar}
      // sidebar={CustomSidebar}
      // menu={Menu}
      // theme={theme}
    />
  );
};
