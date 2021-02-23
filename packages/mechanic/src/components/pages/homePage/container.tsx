import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

import searchBackground from '../../../public/searchBackground.jpg';

// import { searchMechanics } from '../../../store/search/actions';
import useTranslation from '../../../translations/hooks';
import { useFetchCategories, useFetchCities, useMappedData } from '../../../api/hooks';

import { HomePage } from '../../../../../ui/src/pages/home-page';
import { IListItem } from '../../../../../ui/types/core';

import Layout from '../../core/layout';
import { getHowItWorksSteps, getHowItWorksTabs } from '../../../content-data/how-it-works';

export const HomePageContainer: React.FC = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();
  const { getText } = useTranslation();
  const categories = useMappedData(useFetchCategories(), (categories): IListItem[] =>
    categories.map((city) => ({ id: city.id, value: city.name })),
  );

  const cities = useMappedData(useFetchCities(), (cities): IListItem[] =>
    cities.map((city) => ({ id: city.id, value: city.name })),
  );

  const howItWorksTabs = getHowItWorksTabs();
  const [selectedTabId, setSelectedTabId] = useState(howItWorksTabs[0].id);
  const howItWorksSteps = getHowItWorksSteps(selectedTabId);

  // const onSearch = (brandId: string, modelId: string, cityId: string) => {
  //   dispatch(searchMechanics({ brand: brandId, model: modelId, city: cityId }));
  //   history.push('mechanics');
  // };

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
        cities={cities}
        categories={categories}
        tabs={howItWorksTabs}
        onHowItWorksTabChange={onHowItWorksTabChange}
        howItWorksSelectedTabId={selectedTabId}
        steps={howItWorksSteps}
        searchBackgroundImage={searchBackground}
      />
    </Layout>
  );
};

export default HomePageContainer;
