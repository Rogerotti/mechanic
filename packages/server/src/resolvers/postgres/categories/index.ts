import { ICategory } from '@dataSource/postgres/types';
import { IContext } from '@resolver/types';

export const categoriesResolver = async (
  _source: void,
  _args: void,
  { dataSources }: IContext,
): Promise<ICategory[]> => {
  const categories = await dataSources.postgres.getCategories();
  return categories;
};
