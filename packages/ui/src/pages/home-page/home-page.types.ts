import { ILink } from '../../../types/core';
import { IHowItWorksProps } from '../../composition/how-it-works/how-it-works.types';

export interface IHomePageProps {
  name: string;
  logo: string;
  searchHeader: string;
  searchSubheader: string;
  loginText: string;
  registerText: string;
  links: ILink[];
  howItWorksHeader: string;
  steps: IHowItWorksProps['steps'];
}
