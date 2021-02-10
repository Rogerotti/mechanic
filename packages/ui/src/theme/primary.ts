import { createMuiTheme } from '@material-ui/core/styles';

import lightBlue from '@material-ui/core/colors/lightBlue';
import indigo from '@material-ui/core/colors/indigo';
import amber from '@material-ui/core/colors/amber';
import deepOrange from '@material-ui/core/colors/deepOrange';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#ee7f79',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffac41',
    },
    blue: {
      main: 'blue',
    },
    text: {
      primary: '#0e1111',
      secondary: indigo[300],
      disabled: lightBlue[100],
    },
    error: deepOrange,
    action: {
      disabledBackground: amber[400],
    },
  },
  overrides: {
    MuiDivider: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
      },
    },
    MuiButton: {
      sizeLarge: {
        fontSize: 30,
      },
    },
  },
});
