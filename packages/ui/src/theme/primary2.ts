import { createMuiTheme } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const orangeMain = '#ff8c00';
const white = '#ffffff';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
      light: grey[800],
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: orangeMain,
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
    MuiFormControl: {
      root: {
        backgroundColor: grey[900],
      },
    },
    MuiFormLabel: {
      root: {
        color: orangeMain,
        '&:focus': {
          color: orangeMain,
        },
      },
      focused: {
        color: orangeMain,
      },
    },
    MuiInputBase: {
      root: {
        color: white,
      },
    },
    MuiTab: {
      textColorSecondary: {
        color: '#ffffff',
      },
    },
    MuiOutlinedInput: {
      root: {
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: orangeMain,
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
