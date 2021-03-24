import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  inputRoot: {
    borderRadius: '10px',
  },
  inputBase: {
    borderRadius: '10px',
    paddingBottom: 19,
  },
  inputLabel: {
    '&&': {
      color: palette.secondary.main,
    },
  },
  paper: {
    backgroundColor: palette.primary.main,
  },
  autocompleteEndAdornment: {
    '& button': {
      color: palette.secondary.main,
    },
  },
  noOptionsLabel: {
    color: palette.text.primary,
  },
}));
