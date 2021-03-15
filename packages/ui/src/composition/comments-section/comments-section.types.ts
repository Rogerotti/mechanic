import { IRatingCardProps } from '@core-components/rating-card/rating-card.types';
import { IStarDiagrams } from '../star-diagram/star-diagram.types';

export interface ICommentsSectionProps {
  comments: IRatingCardProps[];
  diagram: IStarDiagrams;
}
