import { IDropdownProps } from '@core-components/dropdown/dropdown.type';
import { IListItem } from '../../types/core';

export interface IExtendedSearchProps {
  cities: IListItem[];
  selectedCity?: IListItem;
  categories: IListItem[];
  selectedCategories?: IListItem[];
  onCityChange?: IDropdownProps['onChange'];
  onCategoriesChange?: (selectedItems: IListItem[]) => void;
  onSearchClick?: () => void;
}
