import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  ul: {
    justifyContent: 'center',
    backgroundColor: palette.primary.main,
  },
}));
