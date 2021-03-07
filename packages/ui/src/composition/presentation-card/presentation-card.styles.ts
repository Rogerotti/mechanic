import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, breakpoints }) => ({
  image: {
    width: 100,
    height: 120,
    borderRadius: 10,
    [breakpoints.up('sm')]: {
      width: 120,
      height: 140,
    },
  },
  description: {
    fontSize: '12px',
  },
  header: {
    fontWeight: 'bold',
    fontSize: '18px',
    [breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
  location: {
    fontSize: '14px',
    cursor: 'pointer',
    color: palette.secondary.main,
  },
  description2: {
    fontSize: '10px',
    cursor: 'pointer',
    color: palette.secondary.main,
    '&&:focus': {
      color: 'blue',
    },
  },
}));
