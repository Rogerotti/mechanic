import { createSelector } from 'reselect';
import { SearchTrainersReducerState } from '../search/types';
import { AuthenticationReducerState } from '../authentication/types';
import { IStoreTypes } from '../types';

export const getCurrentCategories = createSelector<
  IStoreTypes,
  SearchTrainersReducerState,
  SearchTrainersReducerState['categories']
>(
  (state) => state.searchReducer,
  (searchReducer) => searchReducer.categories,
);

export const getAuthorization = createSelector<
  IStoreTypes,
  AuthenticationReducerState,
  AuthenticationReducerState['isAuthenticated']
>(
  (state) => state.authenticationReducer,
  (authenticationReducer) => authenticationReducer?.isAuthenticated,
);
