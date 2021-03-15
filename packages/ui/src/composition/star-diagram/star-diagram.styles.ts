import { makeStyles, Theme } from '@material-ui/core/styles';
import { StarDiagramStylingProps } from './star-diagram.types';

export const useStyles = makeStyles<Theme, StarDiagramStylingProps>(({ palette }) => ({
  font: {
    fontSize: 32,
    color: palette.secondary.main,
  },
  font2: {
    fontSize: 16,
    color: 'grey',
  },
  star: {
    fontSize: 16,
    color: palette.secondary.main,
  },
  line: {
    background: 'gray',
    position: 'relative',
    height: '1px',
    marginLeft: '4px',
    width: '100%',

    '&::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      border: `1px solid ${palette.secondary.main}`,
    },
  },
  fiveStar: {
    '&::before': {
      width: (props) => `${props.fiveStar}%`,
    },
  },
  fourStar: {
    '&::before': {
      width: (props) => `${props.fourStar}%`,
    },
  },
  threeStar: {
    '&::before': {
      width: (props) => `${props.threeStar}%`,
    },
  },
  twoStar: {
    '&::before': {
      width: (props) => `${props.twoStar}%`,
    },
  },
  oneStar: {
    '&::before': {
      width: (props) => `${props.oneStar}%`,
    },
  },
}));
