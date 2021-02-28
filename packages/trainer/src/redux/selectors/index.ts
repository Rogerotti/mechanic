import { createSelector } from 'reselect';
import { SearchTrainersReducerState } from '@redux/types/search';
import { AuthenticationReducerState } from '@redux/types/authentication';
import { NavigationReducerState } from '@redux/types/navigation';
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

export const getRedirect = createSelector<
  IStoreTypes,
  SearchTrainersReducerState,
  SearchTrainersReducerState['redirect']
>(
  (state) => state.searchReducer,
  (searchReducer) => searchReducer?.redirect,
);

export const getShouldRedirect = createSelector<
  IStoreTypes,
  NavigationReducerState,
  NavigationReducerState['shouldRedirect']
>(
  (state) => state.navigationReducer,
  (navigationReducer) => navigationReducer?.shouldRedirect,
);

export const getRedirectUrl = createSelector<IStoreTypes, NavigationReducerState, NavigationReducerState['url']>(
  (state) => state.navigationReducer,
  (navigationReducer) => navigationReducer?.url,
);
