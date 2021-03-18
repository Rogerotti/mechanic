import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, breakpoints }) => ({
  cursor: {
    cursor: 'pointer',
    fontSize: 30,
  },
  eventLabel: {
    wordBreak: 'break-all',
    fontSize: 10,
    height: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    [breakpoints.up('sm')]: {
      fontSize: 12,
    },
  },
  hourLabel: {
    fontSize: 12,
    display: 'flex',
    minWidth: 15,
    alignItems: 'end',
    marginBottom: '-10px',
  },
  event: {
    '&&:hover': {
      border: `1px solid ${palette.secondary.main}`,
    },
  },
}));
