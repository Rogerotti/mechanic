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

export type SearchActionTypes = SearchTrainersRequestAction | SearchTrainersSuccessAction | SearchTrainersFailureAction;
