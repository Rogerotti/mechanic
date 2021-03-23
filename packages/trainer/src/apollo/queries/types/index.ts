import { ICity } from '../../../interfaces';

export interface IGetAllCitiesQuery {
  postgres: {
    cities: ICity[];
  };
}
