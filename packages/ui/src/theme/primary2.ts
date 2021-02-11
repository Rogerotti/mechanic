import { createMuiTheme } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';
// import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
      light: grey[300],
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff8c00',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
      disabled: grey[600],
    },
    error: {
      main: red[900],
    },
  },
  overrides: {
    MuiDivider: {
      root: {
        backgroundColor: '#ff8c00',
      },
    },
    MuiMenu: {
      paper: {
        backgroundColor: grey[900],
      },
    },
    MuiMenuItem: {
      root: {
        '&:hover': {
          backgroundColor: '#353839',
        },
      },
    },
    MuiButton: {
      root: {
        fontSize: '0.6rem',

        '@media (min-width:600px)': {
          fontSize: '0.8rem',
        },
      },
      textPrimary: {
        color: 'white',
        '&:hover': {
          backgroundColor: '#353839',
        },
      },
      sizeSmall: {
        fontSize: '0.4rem',

        '@media (min-width:600px)': {
          fontSize: '0.6rem',
        },
      },
      sizeLarge: {
        fontSize: '1rem',

        '@media (min-width:600px)': {
          fontSize: '1.25rem',
        },
      },
      containedPrimary: {
        '&:hover': {
          color: 'white',
          backgroundColor: 'black',
        },
      },
    },
  },
});

export default theme;
