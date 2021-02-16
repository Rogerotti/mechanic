import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  borderRadiusTop: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  borderRadiusBottom: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  subHeader: {
    paddingTop: 5,
  },
  root: {
    backgroundImage: 'url("/tlo.jpg")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // height: '100vh',
  },
  test: {
    backgroundColor: theme.palette.primary.main,
  },
  buttonContainer: {},
  modelSearcher: {},
  container: {},
}));
