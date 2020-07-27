import { useState, useEffect } from "react";
import { fetchAllCarBrands, fetchAllCarModels } from "./cars";
import { fetchAllCities } from "./region";
import { IBrand, IModel, ICity } from "../interfaces";

function fetchArrayModel<T>(fetchFunction: () => Promise<T[]>): T[] {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchFunction();
      setData(result);
    };

    fetchData();
  }, [])

  return data;
}

export const useFetchCarBrands = () => {
  return fetchArrayModel<IBrand>(fetchAllCarBrands);
}

export const useFetchCarModels = () => {
  return fetchArrayModel<IModel>(fetchAllCarModels);
};

export const useFetchCities = () => {
  return fetchArrayModel<ICity>(fetchAllCities);
};