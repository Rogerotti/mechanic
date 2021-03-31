import { ILocation2 } from '..';
import { ICategory, ICity, ISubcategory } from '../../../interfaces';

export interface IGetAllCitiesQuery {
  cities: ICity[];
}

export interface IGetAllTrainersQuery {
  trainers: {
    trainers: {
      id: string;
      name: string;
      lastName: string;
      description: string;
      image?: string;
      rating: number;
      totalRates: number;
      locations: ILocation2[];
      subcategories: ISubcategory[];
    }[];
    trainersTotalNumber: number;
  };
}

export interface IPaginationQueryParams {
  offset?: number;
  limit?: number;
}

export interface IGetAllTrainersQueryParams extends IPaginationQueryParams {
  categoryId?: string;
  subcategoryId?: string;
  cityId?: string;
}

export interface IGetAllCategoriesQuery {
  categories: ICategory[];
}
