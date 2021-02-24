import { IListItem } from '../../types/core';

export interface ISearchingProps {
  header: string;
  subHeader: string;
  cities: IListItem[];
  categories: IListItem[];
  backgroudImage?: string;
}
