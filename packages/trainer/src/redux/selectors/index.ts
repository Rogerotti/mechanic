import { createSelector } from 'reselect';
import { SearchTrainersReducerState } from '@redux/types/search';
import { AuthenticationReducerState } from '@redux/types/authentication';
import { NavigationReducerState } from '@redux/types/navigation';
import { IStoreTypes } from '@redux/types/store';

export const getTrainerComments = createSelector<
  IStoreTypes,
  SearchTrainersReducerState,
  SearchTrainersReducerState['comments']
>(
  (state) => state.searchReducer,
  (searchReducer) => searchReducer.comments,
);

export const getTrainerEvents = createSelector<
  IStoreTypes,
  SearchTrainersReducerState,
  SearchTrainersReducerState['searchEvents']['events']
>(
  (state) => state.searchReducer,
  (searchReducer) => {
    return searchReducer?.trainer?.id === searchReducer.searchEvents?.trainerId
      ? searchReducer.searchEvents?.events.map((x) => ({
          id: x.id,
          starDate: new Date(x.starDate),
          endDate: new Date(x.endDate),
          description: x.description,
        }))
      : [];
  },
);

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

export const getCurrentCategory = createSelector<
  IStoreTypes,
  SearchTrainersReducerState,
  SearchTrainersReducerState['category']
>(
  (state) => state.searchReducer,
  (searchReducer) => searchReducer.category,
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
