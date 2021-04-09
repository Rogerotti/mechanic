import { IPagination } from '../types';

export interface ITrainerFilters {
  id: string;
}

export interface ITrainersFilters extends IPagination {
  cityId?: string;
  categoryId?: string;
  subcategoryId?: string;
}
