import { createSelector } from 'reselect';
import { SearchTrainers } from '../search/types';
import { IStoreTypes } from '../types';

export const getCurrentCategories = createSelector<IStoreTypes, SearchTrainers, SearchTrainers['categories']>(
  (state) => state.searchReducer,
  (searchReducer) => searchReducer.categories,
);
