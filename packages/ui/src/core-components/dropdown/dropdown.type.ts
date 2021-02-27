import { ReactNode } from 'react';
import { IListItem } from '../../types/core';

export interface IDropdownProps {
  className?: string;
  label: string;
  icon?: ReactNode;
  items: IListItem[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange?: (event: React.ChangeEvent<{}>, value: IListItem) => void;
}
