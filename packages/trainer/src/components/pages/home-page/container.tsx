import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HomePage } from '@ui/pages/home-page';
import { IListItem, IListItemGrouped } from '@ui/types/core';

import searchBackground from '@assets/searchBackground.jpg';
import { searchTrainers, setCategory as setReduxCategory, setCity as setReduxCity } from '@redux/actions/search';

import useTranslation from '../../../translations/hooks';

import Layout from '../../core/layout';
import { getHowItWorksSteps, getHowItWorksTabs } from '../../../content-data/how-it-works';
import { getCurrentCategory, getCurrentCity } from '@redux/selectors';
import { useCategories, useCities } from '../../../apollo/queries';
import { mainCategoriesList } from './utils';
import { useHistory } from 'react-router-dom';

export const HomePageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { getText } = useTranslation();

  const { loading: categoryLoading, categories: categoriesData, generalCategories } = useCategories();
  const { loading: cityLoading, cities: citiesData } = useCities();

  const currentCategorySelected = useSelector(getCurrentCategory);

  const [city, setCity] = useState<IListItem | undefined>(useSelector(getCurrentCity));
  const [category, setCategory] = useState<IListItemGrouped>(
    currentCategorySelected
      ? {
          groupId: currentCategorySelected.categoryId,
          groupValue: currentCategorySelected.categoryName,
          value: currentCategorySelected.subcategoryName,
          id: currentCategorySelected.subcategoryId,
        }
      : null,
  );

  const howItWorksTabs = getHowItWorksTabs();
  const [selectedTabId, setSelectedTabId] = useState(howItWorksTabs[0].id);
  const howItWorksSteps = getHowItWorksSteps(selectedTabId);

  const onCityChange = (value: IListItem) => {
    setCity(value);
    dispatch(setReduxCity(value));
  };

  const onCategoryChange = (value: IListItemGrouped) => {
    setCategory(value);
    dispatch(setReduxCategory(value));
  };

  const onSearch = () => {
    dispatch(searchTrainers(city, category));
  };

  const onHowItWorksTabChange = (id: string): void => {
    setSelectedTabId(id);
  };

  const onMainCategoryClick = (id: string): void => {
    const cat = generalCategories.find((x) => x.id === id);
    dispatch(
      setReduxCategory({
        id: null,
        value: null,
        groupId: cat.id,
        groupValue: cat.value,
      }),
    );
    history.push('/trainers');
  };

  return (
    <Layout>
      <HomePage
        name="homePage"
        searchHeader={getText('mainSearchHeader')}
        searchSubheader={getText('mainSearchSubheader')}
        howItWorksHeader={getText('howItWorksHeader')}
        cities={citiesData}
        citiesLoading={cityLoading}
        categories={categoriesData}
        categoriesLoading={categoryLoading}
        selectedCategory={category}
        selectedCity={city}
        tabs={howItWorksTabs}
        onHowItWorksTabChange={onHowItWorksTabChange}
        howItWorksSelectedTabId={selectedTabId}
        steps={howItWorksSteps}
        searchBackgroundImage={searchBackground}
        onCityChange={onCityChange}
        onCategoryChange={onCategoryChange}
        onSearchClick={onSearch}
        mainCategories={mainCategoriesList}
        mainCategoriesTitle="Kategorie ogólne"
        onMainCategoryClick={onMainCategoryClick}
      />
    </Layout>
  );
};

export default HomePageContainer;
