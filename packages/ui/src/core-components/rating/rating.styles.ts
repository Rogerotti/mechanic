import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  icon: {
    fontSize: '0.9rem',
    [breakpoints.up('sm')]: {
      fontSize: '1.2rem',
    },
  },
  iconEmpty: {
    color: 'grey',
  },
}));
