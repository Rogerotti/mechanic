import { createSelector } from 'reselect';
import { SearchTrainersReducerState } from '@redux/types/search';
import { AuthenticationReducerState } from '@redux/types/authentication';
import { IStoreTypes } from '@redux/types/store';

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
