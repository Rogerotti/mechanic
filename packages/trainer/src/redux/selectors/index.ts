import { createSelector } from 'reselect';
import { SearchTrainersReducerState } from '@redux/types/search';
import { AuthenticationReducerState } from '@redux/types/authentication';
import { NavigationReducerState } from '@redux/types/navigation';
import { IStoreTypes } from '@redux/types/store';

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

// export const getRedirect = createSelector<
//   IStoreTypes,
//   SearchTrainersReducerState,
//   SearchTrainersReducerState['redirect']
// >(
//   (state) => state.searchReducer,
//   (searchReducer) => searchReducer?.redirect,
// );

export const getRedirectionInfo = createSelector<IStoreTypes, NavigationReducerState, NavigationReducerState>(
  (state) => state.navigationReducer,
  (navigationReducer) => navigationReducer,
);

// export const getRedirectUrl = createSelector<IStoreTypes, NavigationReducerState, NavigationReducerState['url']>(
//   (state) => state.navigationReducer,
//   (navigationReducer) => navigationReducer?.url,
// );
