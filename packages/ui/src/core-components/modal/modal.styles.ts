import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  border: {
    borderRadius: '8px 8px 0px 0px',
    '&&:focus': {
      borderRadius: '8px 8px 0px 0px',
    },
  },
  paper: {
    position: 'absolute',
    backgroundColor: palette.primary.light,
    borderRadius: '8px 8px 0px 0px',
  },
  title: {
    fontSize: 20,
  },
  closeIcon: {
    cursor: 'pointer',
    fontSize: 32,
  },
  content: {
    border: `2px solid ${palette.primary.dark}`,
  },
}));
