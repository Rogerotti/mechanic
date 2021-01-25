import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  input: {
    height: 40,
    '& input': {
      height: 40,
    },
  },
  inputContainer: {
    width: '100%',
    height: 50,
  },
  button: {
    width: '100%',
  },
}));
