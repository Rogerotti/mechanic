import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  image: {
    height: 35,
    width: 35,
    borderRadius: 30,
    marginRight: 8,
  },
  date: {
    textAlign: 'end',
    marginTop: 8,
  },
  header: {
    fontWeight: 'bold',
    fontSize: '0.875rem',
  },
  description: {
    fontSize: 14,
  },
}));
