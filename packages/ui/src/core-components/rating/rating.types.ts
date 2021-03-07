import { TypographyProps } from '@material-ui/core';
import { RatingProps } from '@material-ui/lab/Rating';

export interface IRatingProps extends Omit<RatingProps, 'classes' | 'to'> {
  numberOfRatings?: number;
  textColor?: TypographyProps['color'];
}
