import { ICategory, ICity, ISubcategory, ITrainerBasicDTO } from '../../../interfaces';

export interface IGetAllCitiesQuery {
  postgres: {
    cities: ICity[];
  };
}

export interface IGetAllTrainersQuery {
  postgres: {
    trainers: {
      id: string;
      name: string;
      lastName: string;
      description: string;
      image?: string;
      rating: number;
      totalRates: number;
      subcategories: ISubcategory[];
    }[];
  };
}

export interface IGetAllCategoriesQuery {
  postgres: {
    categories: ICategory[];
  };
}
