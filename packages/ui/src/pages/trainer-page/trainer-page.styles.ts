import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  column1: {
    float: 'left',
    width: '25%',
    padding: '10px',
    height: '100%',
  },
  column2: {
    float: 'left',
    width: '50%',
    padding: '10px',
    height: '100%',
  },
  image: {
    height: 150,
    borderRadius: 90,
  },
  test: {
    '&&': {
      width: '100%',
    },
  },
}));
