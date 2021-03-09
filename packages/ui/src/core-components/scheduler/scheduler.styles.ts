import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  test: {
    minWidth: '14.2%',
  },
  cursor: {
    cursor: 'pointer',
    fontSize: 30,
  },
  header: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  eventLabel: {
    fontSize: 12,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: 'block',
  },
  hourLabel: {
    fontSize: 12,
    display: 'flex',
    minWidth: 15,

    alignItems: 'end',
    marginBottom: '-10px',
    // textOverflow: 'ellipsis',
    // overflow: 'hidden',
  },
}));
