import { IListItem } from '../../types/core';

// export interface IChipListItem {
//   id: string;
//   name: string;
// }

export interface IChipListProps {
  general: IListItem[];
  additional?: IListItem[];
  label: string;
  className?: string;
  getMoreText: string;
  showLessText: string;
}
