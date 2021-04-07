import { ILocation2 } from '..';
import { ICategory, ICity, ISubcategory } from '../../../interfaces';

export interface IGetAllCitiesQuery {
  cities: ICity[];
}

export interface IQueryComment {
  id: string;
  description: string;
  userImage: string;
  userFirstName: string;
  userLastName: string;
  date: string;
  rating: number;
}

export interface IQueryTrainer {
  id: string;
  name: string;
  lastName: string;
  description: string;
  image?: string;
  rating: number;
  totalRates: number;
  locations: ILocation2[];
  subcategories: ISubcategory[];
  comments: IQueryComment[];
}

export interface IGeTrainerQuery {
  trainer: IQueryTrainer;
}

export interface IGetAllTrainersQuery {
  trainers: {
    trainers: IQueryTrainer[];
    trainersTotalNumber: number;
  };
}

export interface IPaginationQueryParams {
  offset?: number;
  limit?: number;
}

export interface IGetTrainerQueryParams {
  id: string;
}

export interface IGetAllTrainersQueryParams extends IPaginationQueryParams {
  categoryId?: string;
  subcategoryId?: string;
  cityId?: string;
}

export interface IGetAllCategoriesQuery {
  categories: ICategory[];
}
