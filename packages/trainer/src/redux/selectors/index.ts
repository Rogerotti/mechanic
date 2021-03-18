import { createSelector } from 'reselect';
import { SearchTrainersReducerState } from '@redux/types/search';
import { AuthenticationReducerState } from '@redux/types/authentication';
import { NavigationReducerState } from '@redux/types/navigation';
import { IStoreTypes } from '@redux/types/store';

export const getTrainer = createSelector<
  IStoreTypes,
  SearchTrainersReducerState,
  SearchTrainersReducerState['trainer']
>(
  (state) => state.searchReducer,
  (searchReducer) => searchReducer.trainer,
);

export const getTrainers = createSelector<
  IStoreTypes,
  SearchTrainersReducerState,
  SearchTrainersReducerState['trainers']
>(
  (state) => state.searchReducer,
  (searchReducer) => searchReducer.trainers,
);

export const getCurrentCity = createSelector<
  IStoreTypes,
  SearchTrainersReducerState,
  SearchTrainersReducerState['city']
>(
  (state) => state.searchReducer,
  (searchReducer) => searchReducer.city,
);

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

export const getRedirectionInfo = createSelector<IStoreTypes, NavigationReducerState, NavigationReducerState>(
  (state) => state.navigationReducer,
  (navigationReducer) => navigationReducer,
);
