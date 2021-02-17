import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%',
    height: '50px',
    [theme.breakpoints.up('sm')]: {
      borderRadius: '30px',
      height: '50px',
      width: '150px',
    },
  },
  subHeader: {
    paddingTop: 5,
  },
  root: {
    backgroundImage: 'url("/tlo.jpg")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
