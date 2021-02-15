import { ReactNode } from 'react';

export interface IDropdownProps {
  className?: string;
  label: string;
  icon?: ReactNode;
  items: {
    id: string;
    value: string;
  }[];
}
