import { ICategory, ICity } from '@dataSource/postgres/types';

export interface IPostgres {
  cities: ICity[];
  categories: ICategory[];
}