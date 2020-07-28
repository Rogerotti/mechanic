import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../../core/layout';
import Searcher from '../../searcher';
import { IHomePageProps } from '../../../interfaces/pages';
import { IBrand } from '../../../interfaces';

export const HomePage: React.FC<IHomePageProps> = ({ brands, models, cities }) => {
  const [currentBrandId, setBrand] = useState<string | null>(null);

  const modelsForCurrentBrand = currentBrandId ? models.filter((x) => x.brandId === currentBrandId) : [];

  const onBrandChange = (_: React.ChangeEvent, brand: IBrand | null) => {
    setBrand(brand ? brand.id : null);
  };

  const history = useHistory();

  return (
    <Layout>
      <Searcher
        brands={brands}
        models={modelsForCurrentBrand}
        cities={cities}
        onSearchRequest={() => {
          console.log('... searching');
          setTimeout(() => {
            history.push('/mechanics');
          }, 1000);
        }}
        onBrandChange={onBrandChange}
      />
    </Layout>
  );
};

export default HomePage;
