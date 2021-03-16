import { IRatingCardProps } from '@core-components/rating-card/rating-card.types';
import { IListItem } from '../../types/core';
import { IStarDiagrams } from '../star-diagram/star-diagram.types';

export interface ICommentsSectionProps {
  title: string;
  comments: IRatingCardProps[];
  diagram: IStarDiagrams;
  actionButtonText: string;
  sortButtonText: string;
  onActionButtonClick?: () => void;
  onSortClick?: (id?: string) => void;
  sortOptions?: IListItem[];
  displayActionButton?: boolean;
}
