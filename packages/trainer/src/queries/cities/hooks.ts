import { useMappedData } from '@api/hooks';
import { useQuery } from '@apollo/client';
import { IListItem } from '@ui/types/core';
import { GET_ALL_CITIES } from '.';
import { IGetAllCitiesQuery } from './types';

export const useCities = (): {
  loading: boolean;
  cities: IListItem[];
} => {
  const { data, loading } = useQuery<IGetAllCitiesQuery>(GET_ALL_CITIES);
  const allCities = useMappedData(data?.cities, (cities): IListItem[] =>
    cities ? cities.map((city) => ({ id: city.id, value: city.name })) : [],
  );

  return {
    cities: allCities,
    loading,
  };
};
