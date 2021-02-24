import { ITabsProps } from '@core-components/tabs/tabs.types';

import { IListItem } from '../../types/core';
import { IHowItWorksProps } from '../../composition/how-it-works/how-it-works.types';

export interface IHomePageProps {
  name: string;
  searchHeader: string;
  searchSubheader: string;
  searchBackgroundImage?: string;
  tabs: ITabsProps['items'];

  cities: IListItem[];
  categories: IListItem[];
  howItWorksHeader: string;
  steps: IHowItWorksProps['steps'];
  howItWorksSelectedTabId?: string;
  onHowItWorksTabChange?: (value: string) => void;
}
