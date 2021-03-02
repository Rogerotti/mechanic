import { IListItem } from '../../types/core';

export interface ITrainerCardProps {
  image: string;
  firstName: string;
  lastName: string;
  description: string;
  location: string;
  generalCategories: IListItem[];
  additionalCategories?: IListItem[];

  rating: number;
  numberOfRaitings: number;
}
