import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  autocompleteListbox: {
    backgroundColor: theme.palette.primary.main,
  },
  startAndornment: {
    color: theme.palette.secondary.main,
  },
  endAndornment: {
    '& button': {
      color: theme.palette.secondary.main,
    },
  },
}));
