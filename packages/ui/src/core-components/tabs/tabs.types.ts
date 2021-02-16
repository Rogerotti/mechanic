export interface ITabItem {
  id: string;
  value: string;
  icon?: string;
}

export interface ITabsProps {
  items: ITabItem[];
}
