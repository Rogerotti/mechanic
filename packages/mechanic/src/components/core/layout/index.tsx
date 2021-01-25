import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Header from '../header';
import Footer from '../footer';
import { FOOTER_HEIGHT } from '../footer/constants';
import useTranslation from '../../../translations/hooks';
import { theme } from '../../../theme';

const useStyles = makeStyles({
  layout: {
    minHeight: `calc(100% - ${FOOTER_HEIGHT}px);`,
    position: 'relative',
  },
  test: {
    // backgroundImage: 'url("../../../assets/background.jpg")',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // height: '100vh',
  },
});

const Layout: React.FC<unknown> = ({ children }) => {
  const classes = useStyles();
  const { getText } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.test}>
        <div className={classes.layout}>
          <Header title={getText('headerName')} />
          {children}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;