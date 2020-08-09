import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchMechanics } from '../../../store/search/actions';
import { useFetchCarBrands, useFetchCarModels, useFetchCities } from '../../../api/hooks';
import HomePage from '.';

export const HomePageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const brands = useFetchCarBrands();
  const models = useFetchCarModels();
  const cities = useFetchCities();
  const history = useHistory();

  const onSearch = (brandId: string, modelId: string, cityId: string) => {
    dispatch(searchMechanics({ brand: brandId, model: modelId, city: cityId }));
    history.push('mechanics');
  };

  return <HomePage brands={brands} models={models} cities={cities} onSearchRequest={onSearch} />;
};

export default HomePageContainer;
