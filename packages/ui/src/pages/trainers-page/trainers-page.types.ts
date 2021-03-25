import { IExtendedSearchProps } from '../../composition/extended-search/extended-search.types';
import { IPresentationCardProps } from '../../composition/presentation-card/presentation-card.types';
import { IListItem, IListItemGrouped } from '../../types/core';

export interface ITrainersPageProps {
  cities: IListItem[];
  citiesLoading?: boolean;
  categories: IListItem[];
  generalCategories: IListItem[];
  categoriesLoading?: boolean;
  selectedCity?: IListItem;
  selectedCategory?: IListItemGrouped;
  selectedGeneralCategory?: IListItem;
  onCityChange?: IExtendedSearchProps['onCityChange'];
  onCategoryChange?: IExtendedSearchProps['onCategoryChange'];
  onGeneralCategoryChange?: IExtendedSearchProps['onGeneralCategoryChange'];
  trainers: IPresentationCardProps[];
  numberOfPages: number;
}
