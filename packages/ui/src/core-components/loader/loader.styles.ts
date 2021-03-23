import { makeStyles } from '@material-ui/core/styles';

const height = 40;
const width = 8;

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'inline-block',
    position: 'relative',
    width: width,
    height: height,

    '& div': {
      display: 'inline-block',
      position: 'absolute',
      left: width / 2,
      width: width,
      background: palette.secondary.main,
      animation: '$root 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite',
    },

    '& div:nth-child(1)': {
      left: width / 2,
      animationDelay: '-0.24s',
    },
    '& div:nth-child(2)': {
      left: width * 2,
      animationDelay: '-0.12s',
    },
    '& div:nth-child(3)': {
      left: width * 3 + width / 2,
      animationDelay: 0,
    },
  },
  '@keyframes root': {
    '0%': {
      top: height / 10,
      height: height - height / 5,
    },
    '50%, 100%': {
      top: 0.3 * height,
      height: height - height / 1.67,
    },
  },
}));
