import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  border: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    width: '100%',
  },

  content: {
    padding: '0 10px 0 10px',
  },

  vertical: {
    margin: 'auto',
  },
}));
