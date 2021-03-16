import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  heroText: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  },
}));
