import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    backgroundColor: 'grey',
  },
  input: {
    height: 40,
    '& input': {
      height: 40,
    }
  },
  inputContainer: {
    width: '100%',
    height: 50,
  },
  button: {
    width: '100%'
    // marginLeft: 'auto',
    // display: 'block',
  },
  facebookIcon: {
    color: '#3b5998',
  },
  twitterIcon: {
    color: '#1DA1F2',
  },
}));