import { createMuiTheme } from '@material-ui/core/styles';
import Roboto from '@assets/fonts/Roboto-Regular.ttf';
import InterRegular from '@assets/fonts/Inter-Regular.woff2';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import { BaseCSSProperties } from '@material-ui/styles';

const orangeMain = '#ff8c00';
const white = '#ffffff';

const roboto: BaseCSSProperties['@font-face'] = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Roboto'),
    local('Roboto-Regular'),
    url(${Roboto}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const interFonts: BaseCSSProperties['@font-face'] = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Inter'),
    local('Inter-Regular'),
    url(${InterRegular}) format('woff2')
  `,
};

// Default by Material-UI
// xs, extra-small: 0 - 599px
// sm, small: 600 - 959px
// md, medium: 960 - 1279px
// lg, large: 1280 - 1919px
// xl, extra-large: 1920px - ifinity

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
      light: '#3B3D42',
      // light: grey[800],
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
  typography: {
    fontFamily: ['Inter', 'Robot'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [interFonts, roboto],
      },
    },
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

        '&$focused': {
          color: orangeMain,
        },
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
