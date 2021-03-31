import { ICategory, ICity, ITrainer } from '@dataSource/postgres/types';
import { IContext } from '../types';

export interface IPagination {
  offset?: number;
  limit?: number;
}

export interface ITrainersFilters extends IPagination {
  cityId?: string;
  categoryId?: string;
  subcategoryId?: string;
}

export const citiesResolver = async (_source: void, _args: void, { dataSources }: IContext): Promise<ICity[]> => {
  const cities = await dataSources.postgres.getCities();
  return cities;
};

export const categoriesResolver = async (
  _source: void,
  _args: void,
  { dataSources }: IContext,
): Promise<ICategory[]> => {
  const categories = await dataSources.postgres.getCategories();
  return categories;
};

export const trainersResolver = async (
  _source: void,
  args: ITrainersFilters,
  { dataSources }: IContext,
): Promise<{
  trainers: ITrainer[];
  trainersTotalNumber: number;
}> => {
  let trainers = await dataSources.postgres.getTrainers();

  if (args.cityId) {
    trainers = trainers.filter((x) => {
      let result = false;
      x.locations?.forEach((l) => {
        if (l.city.id === Number(args.cityId)) {
          result = true;
          return;
        }
      });
      return result;
    });
  }

  if (args.subcategoryId) {
    trainers = trainers.filter((x) => {
      let result = false;
      x.subcategories?.forEach((s) => {
        if (s.id === Number(args.subcategoryId)) {
          result = true;
          return;
        }
      });
      return result;
    });
  }

  if (args.categoryId) {
    const categories = await dataSources.postgres.getCategories();
    const cat = categories.find((x) => x.id === Number(args.categoryId));
    trainers = trainers.filter((x) => {
      let result = false;
      x.subcategories.forEach((y) => {
        if (cat.subcategories.find((z) => z.id === y.id)) {
          result = true;
          return;
        }
      });
      return result;
    });
  }

  const trainersTotalNumber = trainers.length;

  if (args.offset) {
    if (trainers.length > args.offset) {
      trainers = trainers.splice(args.offset, trainers.length);
    } else {
      trainers = [];
    }
  }

  if (args.limit) {
    trainers = trainers.splice(0, args.limit);
  }

  return {
    trainers: trainers,
    trainersTotalNumber: trainersTotalNumber,
  };
};
