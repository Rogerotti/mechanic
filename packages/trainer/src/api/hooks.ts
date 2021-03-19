import { useState, useEffect } from 'react';
import { fetchAllCities } from './region';
import { ICategory, ICity } from '../interfaces';
import { fetchAllCategories } from './business';

function fetchArrayModel<T>(fetchFunction: () => Promise<T[]>): T[] {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchFunction();
      setData(result);
    };

    fetchData();
  }, []);

  return data;
}

export function useMappedData<T, P>(data: T, mapFunction: (d: T) => P[]): P[] {
  const [mapedData, setMappedData] = useState<P[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = mapFunction(data);
      setMappedData(result);
    };

    fetchData();
  }, [data]);

  return mapedData;
}

export const useFetchCities = (): ICity[] => {
  return fetchArrayModel<ICity>(fetchAllCities);
};

export const useFetchCategories = (): ICategory[] => {
  return fetchArrayModel<ICategory>(fetchAllCategories);
};
