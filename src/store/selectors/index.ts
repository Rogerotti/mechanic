import { createSelector } from 'reselect';
import { SearchMechanic } from '../search/types';
import { IStoreTypes } from '../types';

export const getCurrentBrand = createSelector<IStoreTypes, SearchMechanic, SearchMechanic['brand']>(
  (state) => state.searchReducer,
  (searchReducer) => searchReducer.brand,
);
