import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          margin: 0,
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#ee7f79',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffac41',
    },
    text: {
      primary: '#0e1111',
    },
  },
});
