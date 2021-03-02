import { IListItem } from '../../types/core';

export interface IExtendedSearchProps {
  cities: IListItem[];
  categories: IListItem[];
  onSearchClick?: () => void;
}
