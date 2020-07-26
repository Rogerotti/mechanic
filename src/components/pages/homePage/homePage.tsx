import React, { useState, useEffect } from "react";
import Layout from "../../core/layout";
import Searcher from "../../searcher";
import { useHistory } from "react-router-dom";
// import { fetchAllCarBrands, fetchAllCarModels } from "../api/cars";
import { IBrand, IModel, ICity } from "../../../interfaces";
// import { fetchAllCities } from "../api/region";

interface Props { 
  brands: IBrand[];
  models: IModel[];
  cities: ICity[];
}


export const HomePage: React.FC<Props> = () => {
  const brands: IBrand[] = []
  const models: IModel[] = []
  const cities: ICity[] = []
  const [currentBrandId, setBrand] = useState<string | null>(null);
  const currentModels = currentBrandId ? models.filter(x => x.brandId === currentBrandId) : []
  let history = useHistory()
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

export default HomePage;

