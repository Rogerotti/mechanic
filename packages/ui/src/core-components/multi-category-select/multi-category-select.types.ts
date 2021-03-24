import { IListItem } from '../../types/core';

export interface ICategoryListItem {
  id: string;
  value: string;
  subValues: IListItem[];
}

export interface IMultiCategorySelectProps {
  label: string;
  placeholder?: string;
  items: ICategoryListItem[];
  selectedValue?: ICategoryListItem | IListItem;
  onChange?: (selectedItem: ICategoryListItem | IListItem) => void;
}
