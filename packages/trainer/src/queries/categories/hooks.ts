import { useQuery } from '@apollo/client';
import { IListItem, IListItemGrouped } from '@ui/types/core';
import { GET_ALL_CATEGORIES } from '.';
import { IGetAllCategoriesQuery } from './types';

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

  return {
    loading,
    categories: subCategories,
    generalCategories,
  };
};
