export interface IChipListItem {
  id: string;
  name: string;
}

export interface IChipListProps {
  general: IChipListItem[];
  additional: IChipListItem[];
  label: string;
  className: string;
  getMoreText: string;
  showLessText: string;
}
