import React from 'react';
import { useFetchCarBrands, useFetchCarModels, useFetchCities } from '../../../api/hooks';
import HomePage from '.';

export const HomePageContainer: React.FC = () => {
  const brands = useFetchCarBrands();
  const models = useFetchCarModels();
  const cities = useFetchCities();

  return <HomePage brands={brands} models={models} cities={cities} />;
};

export default HomePageContainer;
