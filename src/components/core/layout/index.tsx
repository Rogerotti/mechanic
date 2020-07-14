import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Header from "../header";
import Footer from "../footer";
import { FOOTER_HEIGHT } from "../footer/constants";
import useTranslation from "../../../translations/hooks";
import { theme } from '../../../theme';


interface LayoutProps {
}

const useStyles = makeStyles({
  layout: {
    minHeight: `calc(100% - ${FOOTER_HEIGHT}px);`,
    position: 'relative',
  },
});

const Layout: React.FC<LayoutProps> = ({ children}) => {
  const classes = useStyles();
  const { getText } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.layout}>
        <Header title={getText('headerName')} />
        {children}
      </div>
      <Footer/>
    </ThemeProvider>
  );
};


export default Layout;
