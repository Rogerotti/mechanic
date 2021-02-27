import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HomePage } from '@ui/pages/home-page';
import { IListItem } from '@ui/types/core';

import searchBackground from '@assets/searchBackground.jpg';
import { searchTrainers } from '@redux/actions/search';

import useTranslation from '../../../translations/hooks';
import { useFetchCategories, useFetchCities, useMappedData } from '../../../api/hooks';

import Layout from '../../core/layout';
import { getHowItWorksSteps, getHowItWorksTabs } from '../../../content-data/how-it-works';
import { getRedirect } from '@redux/selectors';
import { useHistory } from 'react-router-dom';

export const HomePageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { getText } = useTranslation();
  const allCategories = useMappedData(useFetchCategories(), (categories): IListItem[] =>
    categories.map((city) => ({ id: city.id, value: city.name })),
  );

  const allCities = useMappedData(useFetchCities(), (cities): IListItem[] =>
    cities.map((city) => ({ id: city.id, value: city.name })),
  );

  const [city, setCity] = useState<IListItem | undefined>(undefined);
  const [categories, setCategories] = useState<IListItem[]>([]);

  const howItWorksTabs = getHowItWorksTabs();
  const [selectedTabId, setSelectedTabId] = useState(howItWorksTabs[0].id);
  const howItWorksSteps = getHowItWorksSteps(selectedTabId);

  const shouldRedirect = useSelector(getRedirect);

  if (shouldRedirect) {
    // zrobic w layout akcje
    history.push('/trainers');
  }

  const onCityChange = (value: IListItem) => {
    setCity(value);
  };

  const onCategoriesChange = (values: IListItem[]) => {
    setCategories(values);
  };

  const onSearch = () => {
    dispatch(searchTrainers(city, categories));
  };

  const onHowItWorksTabChange = (id: string): void => {
    setSelectedTabId(id);
  };

  return (
    <Layout>
      <HomePage
        name="homePage"
        searchHeader={getText('mainSearchHeader')}
        searchSubheader={getText('mainSearchSubheader')}
        howItWorksHeader={getText('howItWorksHeader')}
        cities={allCities}
        categories={allCategories}
        tabs={howItWorksTabs}
        onHowItWorksTabChange={onHowItWorksTabChange}
        howItWorksSelectedTabId={selectedTabId}
        steps={howItWorksSteps}
        searchBackgroundImage={searchBackground}
        onCityChange={onCityChange}
        onCategoriesChange={onCategoriesChange}
        onSearchClick={onSearch}
      />
    </Layout>
  );
};

export default HomePageContainer;
