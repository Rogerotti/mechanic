import React, { useState, useEffect } from "react";
import Layout from "../components/core/layout";
import Searcher from "../components/searcher";
// import { fetchAllCarBrands, fetchAllCarModels } from "../api/cars";
import { IBrand, IModel, ICity } from "../interfaces";
// import { fetchAllCities } from "../api/region";

interface Props { 
  brands: IBrand[];
  models: IModel[];
  cities: ICity[];
}


export const App: React.FC<Props> = () => {
  const brands: IBrand[] = []
  const models: IModel[] = []
  const cities: ICity[] = []
  const [currentBrandId, setBrand] = useState<string | null>(null);
  const currentModels = currentBrandId ? models.filter(x => x.brandId === currentBrandId) : []

  // useEffect(() => {
  //   const brands = await fetchAllCarBrands();
  //   const models = await fetchAllCarModels();
  //   const cities = await fetchAllCities();
  // }, [])

  return (
    <Layout>
      <Searcher
        brands={brands}
        models={currentModels}
        cities={cities}
        onSearchRequest={(_) => {
          console.log('... searching')
          setTimeout(() => {
            // Router.push('/mechanics');
          }, 1000)
        }}
        onBrandChange={(_, brand: IBrand | null) => {
          setBrand(brand ? brand.id : null);
        }}
      />
    </Layout>
  );
};

// export const getStaticProps = async () => {
//   const brands = await fetchAllCarBrands();
//   const models = await fetchAllCarModels();
//   const cities = await fetchAllCities();
//   return {
//     props: {
//       brands,
//       models,
//       cities
//     },
//   }
// }

export default App;

