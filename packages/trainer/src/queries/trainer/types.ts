import { ICity, ISubcategory } from 'src/interfaces';
import { IPaginationQueryParams } from '../types';

//TODO change it
export interface ILocation2 {
  id: string;
  name?: string;
  streetName: string;
  streetNumber: number;
  city: ICity;
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

export interface IGetTrainerQueryParams {
  id: string;
}

export interface ITrainerData {
  id: string;
  name: string;
  lastName: string;
  description?: string;
  image?: string;
  rating: number;
  totalRates: number;
  locations: ILocation2[];
}

export interface IGetAllTrainersQueryParams extends IPaginationQueryParams {
  categoryId?: string;
  subcategoryId?: string;
  cityId?: string;
}
