export interface ITabItem {
  id: string;
  value: string;
  icon?: JSX.Element;
}

export interface ITabsProps {
  items: ITabItem[];
  selectedTabId?: string;
  onChange?: (value: string) => void;
}
