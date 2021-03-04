import { IExtendedSearchProps } from '../../composition/extended-search/extended-search.types';
import { IPresentationCardProps } from '../../composition/presentation-card/presentation-card.types';
import { IListItem } from '../../types/core';

export interface ITrainersPageProps {
  cities: IListItem[];
  categories: IListItem[];
  selectedCity?: IListItem;
  onCityChange?: IExtendedSearchProps['onCityChange'];
  onCategoriesChange?: IExtendedSearchProps['onCategoriesChange'];
  selectedCategories?: IListItem[];
  trainers: IPresentationCardProps[];
  numberOfPages: number;
}
