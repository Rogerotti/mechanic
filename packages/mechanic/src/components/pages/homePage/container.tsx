import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import searchBackground from '../../../public/searchBackground.jpg';

// import { searchMechanics } from '../../../store/search/actions';
import useTranslation from '../../../translations/hooks';
import { useFetchCategories, useFetchCities, useMappedData } from '../../../api/hooks';

import { HomePage } from '../../../../../ui/src/pages/home-page';
import { IListItem } from '../../../../../ui/types/core';
import { ITabItem } from '../../../../../ui/src/core-components/tabs/tabs.types';
import { IStep } from '../../../../../ui/src/composition/how-it-works/how-it-works.types';

import Layout from '../../core/layout';

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

  const tabs: ITabItem[] = [
    {
      id: 'tab-1',
      value: 'Podopieczny',
      icon: <PermIdentityIcon />,
    },
    {
      id: 'tab-2',
      value: 'Trener',
      icon: <LocalAtmIcon />,
    },
  ];

  const trainerSteps: IStep[] = [
    {
      header: 'test',
      number: 1,
      subHeader: 'test2',
      icon: null,
    },
  ];

  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

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
        tabs={tabs}
        onHowItWorksTabChange={onHowItWorksTabChange}
        howItWorksSelectedTabId={selectedTabId}
        steps={trainerSteps}
        searchBackgroundImage={searchBackground}
      />
    </Layout>
  );
};

export default HomePageContainer;
