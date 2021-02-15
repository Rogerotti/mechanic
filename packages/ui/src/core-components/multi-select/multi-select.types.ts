interface IListItem {
  id: string;
  value: string;
}

export interface IMultiSelectProps {
  label: string;
  placeholder?: string;
  items: IListItem[];
  onChange?: (selectedItems: IListItem[]) => void;
}
