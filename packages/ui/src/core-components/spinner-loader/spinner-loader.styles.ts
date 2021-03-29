import { makeStyles, Theme } from '@material-ui/core/styles';
import { SpinnerLoaderStylesProps } from './spinner-loader.types';

export const useStyles = (keyframesProps: SpinnerLoaderStylesProps) =>
  makeStyles(({ palette }) => ({
    loader: {
      overflow: 'hidden',
      fontSize: '10px',
      margin: '50px auto',
      textIndent: '-9999em',
      width: '11em',
      height: '11em',
      borderRadius: '50%',
      background: `linear-gradient(to right, ${palette.secondary.main} 10%, rgba(255, 255, 255, 0) 42%)`,
      position: 'relative',
      animation: '$load3 1.4s infinite linear',
      transform: 'translateZ(0) scale(0.5)',

      '&::before': {
        width: '50%',
        height: '50%',
        background: palette.secondary.main,
        borderRadius: '100% 0 0 0',
        position: 'absolute',
        top: 0,
        left: 0,
        content: '""',
      },
      '&::after': {
        background: palette.primary.main,
        width: '75%',
        height: '75%',
        borderRadius: '50%',
        content: '""',
        margin: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    },
    '@keyframes load3': ((props) => ({
      '0%': {
        transform: `rotate(0deg) scale(${props.scale})`,
      },
      '100%': {
        transform: `rotate(360deg) scale(${props.scale})`,
        // transform: 'rotate(360deg) scale(1.5)',
      },
    }))(keyframesProps),
  }));
