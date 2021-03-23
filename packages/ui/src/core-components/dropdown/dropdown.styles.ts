import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  autocompleteListbox: {
    backgroundColor: theme.palette.primary.main,
  },
  startAdornment: {
    color: theme.palette.secondary.main,
  },
  endAdornment: {
    '& button': {
      color: theme.palette.secondary.main,
    },
  },
}));
