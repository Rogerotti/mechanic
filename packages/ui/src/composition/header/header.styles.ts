import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  logo: {
    height: 50,
    width: 100,
  },
  userIcon: {
    width: 40,
    height: 40,
    '&:hover': {
      color: palette.secondary.main,
      cursor: 'pointer',
    },
  },
}));
