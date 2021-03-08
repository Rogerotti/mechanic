import { createMuiTheme } from '@material-ui/core/styles';

import lightBlue from '@material-ui/core/colors/lightBlue';
import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';
import amber from '@material-ui/core/colors/amber';
import deepOrange from '@material-ui/core/colors/deepOrange';

// main: '#111216',
// light: '#36344f',
// main: '#060606',
// light: '#686868',
// #111216
// 36344f

export default createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
      light: '#3B3D42',
    },
    secondary: {
      main: '#3B5998',
    },
    error: deepOrange,
    action: {
      disabledBackground: amber[400],
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
      disabled: grey[600],
    },
  },
  overrides: {
    MuiButton: {
      sizeLarge: {
        fontSize: 16,
      },
    },
  },
});
