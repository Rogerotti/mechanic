import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  test: {
    height: 75,
    width: 75,
    borderRadius: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    [breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
  },
  itemTitle: {
    fontSize: 20,
    paddingTop: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    cursor: 'pointer',
    minWidth: '140px',
    [breakpoints.up('sm')]: {
      minWidth: '160px',
    },
  },
}));
