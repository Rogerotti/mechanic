import { IContext } from '../types';
import { IPostgres } from './types';

export const postgresResolver = async (_source: void, _args: void, { dataSources }: IContext): Promise<IPostgres> => {
  const cities = await dataSources.postgres.getCities();

  return { cities: cities };
};
