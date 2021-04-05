import { useMappedData } from '@api/hooks';
import { gql, QueryLazyOptions, useLazyQuery, useQuery } from '@apollo/client';
import { IListItem, IListItemGrouped } from '@ui/types/core';
import { ICity } from 'src/interfaces';
import {
  IGetAllCategoriesQuery,
  IGetAllCitiesQuery,
  IGetAllTrainersQuery,
  IGetAllTrainersQueryParams,
  IGeTrainerQuery,
  IGetTrainerQueryParams,
} from './types';

export const PAYU_QUERY = gql`
  query Test {
    payU {
      token
      payoutMethods {
        value
      }
    }
  }
`;

export const GET_ALL_CITIES = gql`
  query GetCities {
    cities {
      id
      name
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      description
      subcategories {
        id
        name
        description
      }
    }
  }
`;

export const GET_TRAINER = gql`
  query GetTrainer($id: String) {
    trainer(id: $id) {
      id
      name
      lastName
      description
      totalRates
      rating
      image
      locations {
        id
        name
        streetName
        streetNumber
        city {
          id
          name
        }
      }
      subcategories {
        id
        name
        description
      }
    }
  }
`;

export const GET_ALL_TRAINERS = gql`
  query GetTrainers($categoryId: String, $subcategoryId: String, $cityId: String, $offset: Int, $limit: Int) {
    trainers(categoryId: $categoryId, cityId: $cityId, subcategoryId: $subcategoryId, offset: $offset, limit: $limit) {
      trainers {
        id
        name
        lastName
        description
        totalRates
        rating
        image
        locations {
          id
          name
          streetName
          streetNumber
          city {
            id
            name
          }
        }
        subcategories {
          id
          name
          description
        }
      }
      trainersTotalNumber
    }
  }
`;

export interface ILocation2 {
  id: string;
  name?: string;
  streetName: string;
  streetNumber: number;
  city: ICity;
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

export const useTrainer = (
  id: string,
): {
  loading: boolean;
  trainer: ITrainerData;
} => {
  const { data, loading } = useQuery<IGeTrainerQuery, IGetTrainerQueryParams>(GET_TRAINER, { variables: { id: id } });
  const trainer = data?.trainer;
  const trainerData = trainer
    ? {
        id: trainer.id,
        name: trainer.name,
        lastName: trainer.lastName,
        description: trainer.description,
        rating: trainer.rating,
        totalRates: trainer.totalRates,
        locations: trainer.locations,
        image: trainer.image,
      }
    : null;

  return {
    trainer: trainerData,

    loading,
  };
};

export const useTrainers = (): {
  loading: boolean;
  trainers: ITrainerData[];
  trainersCount: number;
  getTrainers: (options?: QueryLazyOptions<IGetAllTrainersQueryParams>) => void;
} => {
  const [getTrainers, { data, loading }] = useLazyQuery<IGetAllTrainersQuery, IGetAllTrainersQueryParams>(
    GET_ALL_TRAINERS,
  );

  const allTrainers = useMappedData(data?.trainers, (trainers): ITrainerData[] =>
    trainers
      ? trainers?.trainers.map((trainer) => ({
          id: trainer.id,
          name: trainer.name,
          lastName: trainer.lastName,
          description: trainer.description,
          rating: trainer.rating,
          totalRates: trainer.totalRates,
          locations: trainer.locations,
          image: trainer.image,
        }))
      : [],
  );

  return {
    trainers: allTrainers,
    trainersCount: data?.trainers?.trainersTotalNumber || 0,
    loading,
    getTrainers,
  };
};

export const useCategories = (): {
  loading: boolean;
  generalCategories: IListItem[];
  categories: IListItemGrouped[];
} => {
  const { data: categoryData, loading } = useQuery<IGetAllCategoriesQuery>(GET_ALL_CATEGORIES);
  const generalCategories: IListItem[] = [];
  const subCategories: IListItemGrouped[] = [];

  categoryData?.categories?.forEach((category) => {
    generalCategories.push({
      id: category.id,
      value: category.name,
    });
    category?.subcategories.forEach((subcategory) => {
      subCategories.push({
        id: subcategory.id,
        value: subcategory.name,
        groupId: category.id,
        groupValue: category.name,
      });
    });
  });

  // const allCategories = useMappedData(categoryData?.postgres?.categories, (categories): {
  //   generalCategories: IListItem[];
  //   subCategories: IListItemGrouped[];
  // }[] => {
  //   return {
  //     generalCategories,
  //     subCategories,
  //   };
  // });

  return {
    loading,
    categories: subCategories,
    generalCategories,
  };
};

export const useCities = (): {
  loading: boolean;
  cities: IListItem[];
} => {
  const { data, loading } = useQuery<IGetAllCitiesQuery>(GET_ALL_CITIES);
  const allCities = useMappedData(data?.cities, (cities): IListItem[] =>
    cities ? cities.map((city) => ({ id: city.id, value: city.name })) : [],
  );

  return {
    cities: allCities,
    loading,
  };
};
