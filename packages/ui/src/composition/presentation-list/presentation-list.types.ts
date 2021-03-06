import { IPresentationCardProps } from '../presentation-card/presentation-card.types';

export interface IPresentationListProps {
  items: IPresentationCardProps[];
  numberOfPages: number;
  page?: number;
  onPageChange?: (page: number) => void;
}
