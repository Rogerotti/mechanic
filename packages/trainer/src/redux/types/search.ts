import { IListItem } from '@ui/types/core';
import { IEventDTO, ITrainerBasicDTO, ITrainerExtendedDTO } from 'src/interfaces';

export interface ISearchEvents {
  trainerId: string;
  starDate: Date;
  endDate: Date;
  events: IEventDTO[];
}

export interface SearchTrainersReducerState {
  categories: IListItem[];
  city: IListItem;
  trainers: ITrainerBasicDTO[];
  redirect: boolean;
  trainer: ITrainerExtendedDTO | null;
  searchEvents?: ISearchEvents;
}

export const SEARCH_TRAINER_EVENTS_REQUEST = 'SEARCH_TRAINER_EVENTS_REQUEST';
export const SEARCH_TRAINER_EVENTS_SUCCESS = 'SEARCH_TRAINER_EVENTS_SUCCESS';
export const SEARCH_TRAINER_EVENTS_FAILURE = 'SEARCH_TRAINER_EVENTS_FAILURE';

export const SEARCH_TRAINER_REQUEST = 'SEARCH_TRAINER_REQUEST';
export const SEARCH_TRAINER_SUCCESS = 'SEARCH_TRAINER_SUCCESS';
export const SEARCH_TRAINER_FAILURE = 'SEARCH_TRAINER_FAILURE';

export const SEARCH_TRAINERS_REQUEST = 'SEARCH_TRAINERS_REQUEST';
export const SEARCH_TRAINERS_SUCCESS = 'SEARCH_TRAINERS_SUCCESS';
export const SEARCH_TRAINERS_FAILURE = 'SEARCH_TRAINERS_FAILURE';

export const SET_CITY = 'SET_CITY';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export interface SearchTrainerEventsRequestAction {
  type: typeof SEARCH_TRAINER_EVENTS_REQUEST;
  payload: {
    id: string;
    startDate: Date;
    endDate: Date;
  };
}

export interface SearchTrainerEventsSuccessAction {
  type: typeof SEARCH_TRAINER_EVENTS_SUCCESS;
  payload: {
    searchEvents: ISearchEvents;
  };
}

export interface SearchTrainerEventsFailureAction {
  type: typeof SEARCH_TRAINER_EVENTS_FAILURE;
}

export interface SearchTrainerRequestAction {
  type: typeof SEARCH_TRAINER_REQUEST;
  payload: {
    id: string;
  };
}

export interface SearchTrainerSuccessAction {
  type: typeof SEARCH_TRAINER_SUCCESS;
  payload: {
    trainer: ITrainerExtendedDTO;
  };
}

export interface SearchTrainerFailureAction {
  type: typeof SEARCH_TRAINER_FAILURE;
}

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
  | SearchTrainerEventsRequestAction
  | SearchTrainerEventsSuccessAction
  | SearchTrainerEventsFailureAction
  | SearchTrainerRequestAction
  | SearchTrainerSuccessAction
  | SearchTrainerFailureAction
  | SearchTrainersRequestAction
  | SearchTrainersSuccessAction
  | SearchTrainersFailureAction
  | SetCityAction
  | SetCategoriesAction;
