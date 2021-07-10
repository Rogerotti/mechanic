import { ICity } from '@dataSource/postgres/types';

import { IContext } from '@resolver/types';

export const citiesResolver = async (_source: void, _args: void, { dataSources }: IContext): Promise<ICity[]> => {
  const cities = await dataSources.postgres.getCities();
  return cities;
};

export const createCityMutationResolver = async (
  _source: void,
  { name }: { name: string },
  { dataSources }: IContext,
): Promise<ICity> => {
  return await dataSources.postgres.createCity(name);
};

export const deleteCityMutationResolver = async (
  _source: void,
  { id }: { id: string },
  { dataSources }: IContext,
): Promise<boolean> => {
  return await dataSources.postgres.deleteCity(id);
};
