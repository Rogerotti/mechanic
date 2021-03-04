import { IListItem } from '@ui/types/core';
import { ITrainerBasicDTO } from 'src/interfaces';

export interface SearchTrainersReducerState {
  categories: IListItem[];
  city: IListItem;
  trainers: ITrainerBasicDTO[];
  redirect: boolean;
}

export const SEARCH_TRAINERS_REQUEST = 'SEARCH_TRAINERS_REQUEST';
export const SEARCH_TRAINERS_SUCCESS = 'SEARCH_TRAINERS_SUCCESS';
export const SEARCH_TRAINERS_FAILURE = 'SEARCH_TRAINERS_FAILURE';

export const SET_CITY = 'SET_CITY';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export interface SearchTrainersRequestAction {
  type: typeof SEARCH_TRAINERS_REQUEST;
  payload: {
    categories: IListItem[];
    city: IListItem;
  };
}

export interface SearchTrainersSuccessAction {
  type: typeof SEARCH_TRAINERS_SUCCESS;
  payload: {
    trainers: ITrainerBasicDTO[];
  };
}

export interface SearchTrainersFailureAction {
  type: typeof SEARCH_TRAINERS_FAILURE;
}

export interface SetCityAction {
  type: typeof SET_CITY;
  payload: {
    city: IListItem;
  };
}

export interface SetCategoriesAction {
  type: typeof SET_CATEGORIES;
  payload: {
    categories: IListItem[];
  };
}

export type SearchActionTypes =
  | SearchTrainersRequestAction
  | SearchTrainersSuccessAction
  | SearchTrainersFailureAction
  | SetCityAction
  | SetCategoriesAction;
