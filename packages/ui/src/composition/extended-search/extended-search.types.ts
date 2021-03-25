import { IDropdownProps } from '@core-components/dropdown/dropdown.type';
import { IListItem, IListItemGrouped } from '../../types/core';

export interface IExtendedSearchProps {
  cities: IListItem[];
  citiesLoading?: boolean;
  selectedCity?: IListItem;
  categories: IListItem[];

  generalCategories: IListItem[];

  selectedCategory?: IListItemGrouped;
  selectedGeneralCategory?: IListItem;
  categoriesLoading?: boolean;
  onCityChange?: IDropdownProps['onChange'];
  onCategoryChange?: (category: IListItemGrouped) => void;
  onGeneralCategoryChange: IDropdownProps['onChange'];
  onSearchClick?: () => void;
}
