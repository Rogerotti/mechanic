import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  column1: {
    float: 'left',
    width: '20%',
    padding: '10px',
    height: '100%',
  },
  map: {
    borderRadius: 10,
  },
  column2: {
    float: 'left',
    width: '60%',
    padding: '10px',
    height: '100%',
  },
  image: {
    top: -25,
    height: 150,
    borderRadius: 90,
    position: 'relative',

    justifySelf: 'center',
    [breakpoints.up('sm')]: {
      top: -75,
    },
  },
  title: {
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',

    [breakpoints.up('sm')]: {
      marginTop: -35,
    },
  },
  description: {
    lineHeight: 2,
  },
  test: {
    '&&': {
      width: '100%',
    },
  },
}));
