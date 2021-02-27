import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  body: {
    position: 'relative',
    minHeight: '100vh',
    backgroundColor: palette.primary.main,
  },
  pageWrapper: {
    paddingBottom: '205px',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: ' 205px',
  },
}));
