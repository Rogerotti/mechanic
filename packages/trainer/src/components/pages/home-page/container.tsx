import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HomePage } from '@ui/pages/home-page';
import { IListItem } from '@ui/types/core';

import searchBackground from '@assets/searchBackground.jpg';
import { searchTrainers, setCategories as setReduxCategories, setCity as setReduxCity } from '@redux/actions/search';

import useTranslation from '../../../translations/hooks';
import { useFetchCategories, useMappedData } from '../../../api/hooks';

import Layout from '../../core/layout';
import { getHowItWorksSteps, getHowItWorksTabs } from '../../../content-data/how-it-works';
import { getCurrentCategories, getCurrentCity } from '@redux/selectors';
import { useQuery } from '@apollo/client';
import { GET_ALL_CITIES } from '../../../apollo/queries';
import { IGetAllCitiesQuery } from 'src/apollo/queries/types';

export const HomePageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { getText } = useTranslation();
  const allCategories = useMappedData(useFetchCategories(), (categories): IListItem[] =>
    categories.map((city) => ({ id: city.id, value: city.name })),
  );

  const { data, loading: cityLoading } = useQuery<IGetAllCitiesQuery>(GET_ALL_CITIES);
  const allCities = useMappedData(data?.postgres?.cities, (cities): IListItem[] =>
    cities ? cities.map((city) => ({ id: city.id, value: city.name })) : [],
  );

  const [city, setCity] = useState<IListItem | undefined>(useSelector(getCurrentCity));
  const [categories, setCategories] = useState<IListItem[]>(useSelector(getCurrentCategories));

  const howItWorksTabs = getHowItWorksTabs();
  const [selectedTabId, setSelectedTabId] = useState(howItWorksTabs[0].id);
  const howItWorksSteps = getHowItWorksSteps(selectedTabId);

  const onCityChange = (value: IListItem) => {
    setCity(value);
    dispatch(setReduxCity(value));
  };

  const onCategoriesChange = (values: IListItem[]) => {
    setCategories(values);
    dispatch(setReduxCategories(values));
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
        citiesLoading={cityLoading}
        categories={allCategories}
        selectedCategories={categories}
        selectedCity={city}
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
