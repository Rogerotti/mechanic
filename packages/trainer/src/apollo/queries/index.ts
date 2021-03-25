import { useMappedData } from '@api/hooks';
import { gql, useQuery } from '@apollo/client';
import { IListItem, IListItemGrouped } from '@ui/types/core';
import { IGetAllCategoriesQuery, IGetAllCitiesQuery } from './types';

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
