import { ICategory, ICity } from '../../../interfaces';

export interface IGetAllCitiesQuery {
  postgres: {
    cities: ICity[];
  };
}

export interface IGetAllCategoriesQuery {
  postgres: {
    categories: ICategory[];
  };
}
