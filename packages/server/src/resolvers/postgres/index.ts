import { IContext } from '../types';
import { IPostgres } from './types';

export const postgresResolver = async (_source: void, _args: void, { dataSources }: IContext): Promise<IPostgres> => {
  const cities = await dataSources.postgres.getCities();
  const categories = await dataSources.postgres.getCategories();
  const trainers = await dataSources.postgres.getTrainers();
  return { cities: cities, categories: categories, trainers: trainers };
};
