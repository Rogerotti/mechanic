import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  cursor: {
    cursor: 'pointer',
    fontSize: 30,
  },
  eventLabel: {
    fontSize: 12,
    height: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },
  hourLabel: {
    fontSize: 12,
    display: 'flex',
    minWidth: 15,
    alignItems: 'end',
    marginBottom: '-10px',
  },
}));