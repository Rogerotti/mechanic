import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    width: 600,
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 15,
    // padding: 25,
  },
  image: {
    height: '100%',
    width: '170px',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  content: {
    paddingLeft: 10,
    minWidth: '45%',
  },
  chipList: {
    marginTop: 5,
  },
  divider: {
    width: 3,
    marginRight: 5,
    background: theme.palette.primary.light,
  },
  rateButton: {
    width: 25,
    height: 25,
  },
  submit: {
    width: 150,
    // fontSize: 20,
  },
  ble: {
    fontWeight: 'bold',
  },
}));
