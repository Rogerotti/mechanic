import { ICategory, ICity, ITrainer } from '@dataSource/postgres/types';

export interface IPostgres {
  cities: ICity[];
  categories: ICategory[];
  trainers: ITrainer[];
}
