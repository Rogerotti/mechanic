import { createMuiTheme } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const orangeMain = '#ff8c00';
const white = '#ffffff';

// Default by Material-UI
// xs, extra-small: 0 - 599px
// sm, small: 600 - 959px
// md, medium: 960 - 1279px
// lg, large: 1280 - 1919px
// xl, extra-large: 1920px - ifinity

// With this theme
// xs, extra-small: 0 - 599px
// sm, small: 600 - 799px
// md, medium: 800 - 1023px
// lg, large: 1024 - 1439px
// xl, extra-large: 1440px - infinity
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
    MuiTypography: {
      body2: {
        fontSize: '0.6rem',
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
        borderRadius: '5px',
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
