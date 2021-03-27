import { ITabsProps } from '@core-components/tabs/tabs.types';

import { IListItem, IListItemGrouped } from '../../types/core';
import { IHowItWorksProps } from '../../composition/how-it-works/how-it-works.types';
import { ISearchingProps } from '../../composition/searching/searching.types';
import { IPresentationImageListProps } from '../../composition/presentation-image-list/presentation-image-list.types';
export interface IHomePageProps {
  name: string;
  searchHeader: string;
  searchSubheader: string;
  searchBackgroundImage?: string;
  tabs: ITabsProps['items'];
  onSearchClick?: ISearchingProps['onSearchClick'];
  onCategoryChange?: ISearchingProps['onCategoryChange'];
  onCityChange?: ISearchingProps['onCityChange'];

  mainCategoriesTitle: string;
  mainCategories: IPresentationImageListProps['items'];

  cities: IListItem[];
  citiesLoading?: boolean;
  categories: IListItemGrouped[];
  categoriesLoading?: boolean;
  selectedCity?: IListItem;
  selectedCategory?: IListItemGrouped;
  howItWorksHeader: string;
  steps: IHowItWorksProps['steps'];
  howItWorksSelectedTabId?: string;
  onHowItWorksTabChange?: (value: string) => void;
}
