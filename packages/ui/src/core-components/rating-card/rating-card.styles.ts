import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  image: {
    height: 40,
    width: 40,
    borderRadius: 90,
    marginRight: 8,
  },
  date: {
    textAlign: 'end',
    marginTop: 8,
  },
  header: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
}));
