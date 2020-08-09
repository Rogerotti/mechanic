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
      main: '#323232',
    },
    secondary: {
      main: '#ffac41',
    },
  },
});
