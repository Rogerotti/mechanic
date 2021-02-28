import { IListItem } from '../../types/core';

export interface IMultiSelectProps {
  label: string;
  placeholder?: string;
  items: IListItem[];
  selectedValues?: IListItem[];
  onChange?: (selectedItems: IListItem[]) => void;
}
