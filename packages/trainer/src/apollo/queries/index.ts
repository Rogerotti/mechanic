import { useMappedData } from '@api/hooks';
import { gql, useQuery } from '@apollo/client';
import { IListItem, IListItemGrouped } from '@ui/types/core';
import { IGetAllCategoriesQuery, IGetAllCitiesQuery, IGetAllTrainersQuery } from './types';

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
    postgres {
      cities {
        id
        name
      }
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query GetCategories {
    postgres {
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
  }
`;

export const GET_ALL_TRAINERS = gql`
  query GetTrainers {
    postgres {
      trainers {
        id
        name
        lastName
        description
        totalRates
        rating
        image
        subcategories {
          id
          name
          description
        }
      }
    }
  }
`;

export interface ITrainerData {
  id: string;
  name: string;
  lastName: string;
  description?: string;
  image?: string;
  rating: number;
  totalRates: number;
}

export const useTrainers = (): {
  loading: boolean;
  trainers: ITrainerData[];
} => {
  const { data, loading } = useQuery<IGetAllTrainersQuery>(GET_ALL_TRAINERS);
  console.log('trainer', data?.postgres?.trainers);
  const allTrainers = useMappedData(data?.postgres?.trainers, (trainers): ITrainerData[] =>
    trainers
      ? trainers.map((trainer) => ({
          id: trainer.id,
          name: trainer.name,
          lastName: trainer.lastName,
          description: trainer.description,
          rating: trainer.rating,
          totalRates: trainer.totalRates,
          image: trainer.image,
        }))
      : [],
  );

  return {
    trainers: allTrainers,
    loading,
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

  categoryData?.postgres?.categories?.forEach((category) => {
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
  const allCities = useMappedData(data?.postgres?.cities, (cities): IListItem[] =>
    cities ? cities.map((city) => ({ id: city.id, value: city.name })) : [],
  );

  return {
    cities: allCities,
    loading,
  };
};
