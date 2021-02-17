import { ITabsProps } from '../../core-components/tabs/tabs.types';

export interface IStep {
  number: number;
  header: string;
  subHeader: string;
  icon?: string;
}

export interface IHowItWorksProps {
  header: string;
  steps: IStep[];
  tabs: ITabsProps['items'];
  selectedTabId?: string;
  onTabChange?: (value: string) => void;
}
