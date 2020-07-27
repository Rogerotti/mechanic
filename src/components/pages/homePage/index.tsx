import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../core/layout";
import Searcher from "../../searcher";
import { IHomePageProps } from "../../../interfaces/pages";
import { IBrand } from "../../../interfaces";

export const HomePage: React.FC<IHomePageProps> = ({ brands, models, cities }) => {
  const [currentBrandId, setBrand] = useState<string | null>(null);
  const currentModels = currentBrandId ? models.filter(x => x.brandId === currentBrandId) : []
  let history = useHistory()

  return (
    <Layout>
      <Searcher
        brands={brands}
        models={currentModels}
        cities={cities}
        onSearchRequest={(_) => {
          console.log('... searching')
          setTimeout(() => {
            history.push('/mechanics');
          }, 1000)
        }}
        onBrandChange={(_, brand: IBrand | null) => {
          setBrand(brand ? brand.id : null);
        }}
      />
    </Layout>
  );
};

export default HomePage;
