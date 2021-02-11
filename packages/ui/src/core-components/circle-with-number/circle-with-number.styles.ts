import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  shape: {
    backgroundColor: theme.palette.secondary.main,
    width: 50,
    height: 50,
    textAlign: 'center',
    padding: 4,
    fontSize: 32,
    fontWeight: 'bold',
  },
  shapeCircle: {
    borderRadius: '50%',
  },
}));
