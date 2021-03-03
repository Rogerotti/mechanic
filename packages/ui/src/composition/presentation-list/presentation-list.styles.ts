import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  test: {
    justifyContent: 'center',
    color: 'red',
    backgroundColor: palette.primary.main,
    // backgroundColor: 'red',
  },
}));
