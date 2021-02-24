import { ReactNode } from 'react';
import { IListItem } from '../../types/core';

export interface IDropdownProps {
  className?: string;
  label: string;
  icon?: ReactNode;
  items: IListItem[];
}
