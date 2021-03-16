import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
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
    height: 150,
    borderRadius: 90,
    position: 'relative',
    top: -75,
    justifySelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginTop: -35,
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
