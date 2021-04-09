import { ICity } from '@dataSource/postgres/types';
import { IContext } from '@resolver/types';

export const citiesResolver = async (_source: void, _args: void, { dataSources }: IContext): Promise<ICity[]> => {
  const cities = await dataSources.postgres.getCities();
  return cities;
};
