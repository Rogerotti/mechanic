import { IListItem, IListItemGrouped } from '../../types/core';

export interface ISearchingProps {
  header: string;
  subHeader: string;
  cities: IListItem[];
  citiesLoading?: boolean;
  categories: IListItemGrouped[];
  categoriesLoading?: boolean;
  selectedCategory?: IListItemGrouped;
  selectedCity?: IListItem;
  backgroundImage?: string;
  onSearchClick?: () => void;
  onCategoryChange?: (values: IListItemGrouped) => void;
  onCityChange?: (value: IListItem) => void;
}
