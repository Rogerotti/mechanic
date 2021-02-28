import { IListItem } from '../../types/core';

export interface ISearchingProps {
  header: string;
  subHeader: string;
  cities: IListItem[];
  categories: IListItem[];
  selectedCategories?: IListItem[];
  selectedCity?: IListItem;
  backgroudImage?: string;
  onSearchClick?: () => void;
  onCategoriesChange?: (values: IListItem[]) => void;
  onCityChange?: (value: IListItem) => void;
}
