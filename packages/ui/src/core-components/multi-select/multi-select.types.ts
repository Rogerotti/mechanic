import { IListItem } from '../../../types/core';

export interface IMultiSelectProps {
  label: string;
  placeholder?: string;
  items: IListItem[];
  onChange?: (selectedItems: IListItem[]) => void;
}
