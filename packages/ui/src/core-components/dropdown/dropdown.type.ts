import { ReactNode } from 'react';
import { IListItemGrouped } from '../../types/core';

export interface IDropdownProps {
  className?: string;
  label: string;
  icon?: ReactNode;
  isLoading?: boolean;
  selectedValue?: IListItemGrouped;
  items: IListItemGrouped[];
  groupByValue?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange?: (event: React.ChangeEvent<{}>, value: IListItemGrouped) => void;
}
