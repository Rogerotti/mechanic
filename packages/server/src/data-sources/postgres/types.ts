import { ICity } from 'types';

export interface IPostgresDataSource {
  getCities(): ICity[];
}
