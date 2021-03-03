import { IChipListProps } from '@core-components/chip-list/chip-list.types';

export interface IPresentationCardProps {
  id: string;
  image: string;
  header: string;

  description: string;
  descriptionShowMoreText: string;
  descriptionActionClick?: () => void;

  location: string;

  specializationChipListProps?: IChipListProps;

  rating: number;
  numberOfRatings: number;

  actionText: string;
  onActionClick?: () => void;
}
