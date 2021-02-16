import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  test: {
    backgroundColor: palette.primary.main,
  },
  root: {},
  test2: {
    color: 'red',
  },
}));
