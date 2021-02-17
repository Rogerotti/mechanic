import { ILink } from '../../../types/core';
import { IHowItWorksProps } from '../../composition/how-it-works/how-it-works.types';
import { ITabsProps } from '../../core-components/tabs/tabs.types';

export interface IHomePageProps {
  name: string;
  logo: string;
  searchHeader: string;
  searchSubheader: string;
  username?: string;
  tabs: ITabsProps['items'];
  links: ILink[];
  rightMenuLinks: ILink[];
  howItWorksHeader: string;
  steps: IHowItWorksProps['steps'];
  howItWorksSelectedTabId?: string;
  onHowItWorksTabChange?: (value: string) => void;
}
