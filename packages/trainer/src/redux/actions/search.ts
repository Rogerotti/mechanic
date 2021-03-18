import {
  SearchTrainerRequestAction,
  SearchTrainerSuccessAction,
  SearchTrainersRequestAction,
  SearchTrainersSuccessAction,
  SearchTrainersFailureAction,
  SEARCH_TRAINER_REQUEST,
  SEARCH_TRAINERS_SUCCESS,
  SEARCH_TRAINERS_FAILURE,
  SEARCH_TRAINERS_REQUEST,
  SetCityAction,
  SET_CITY,
  SetCategoriesAction,
  SET_CATEGORIES,
  SEARCH_TRAINER_SUCCESS,
  SEARCH_TRAINER_FAILURE,
  SearchTrainerFailureAction,
} from '@redux/types/search';
import { IListItem } from '@ui/types/core';
import { ITrainerBasicDTO, ITrainerExtendedDTO } from 'src/interfaces';

export function searchTrainer(id: string): SearchTrainerRequestAction {
  return {
    type: SEARCH_TRAINER_REQUEST,
    payload: {
      id,
    },
  };
}

export function searchTrainerSuccess(trainer: ITrainerExtendedDTO): SearchTrainerSuccessAction {
  return {
    type: SEARCH_TRAINER_SUCCESS,
    payload: {
      trainer,
    },
  };
}

export function searchTrainerFailure(): SearchTrainerFailureAction {
  return {
    type: SEARCH_TRAINER_FAILURE,
  };
}

export function searchTrainers(city: IListItem, categories: IListItem[]): SearchTrainersRequestAction {
  return {
    type: SEARCH_TRAINERS_REQUEST,
    payload: {
      city,
      categories,
    },
  };
}

export function searchTrainersSuccess(trainers: ITrainerBasicDTO[]): SearchTrainersSuccessAction {
  return {
    type: SEARCH_TRAINERS_SUCCESS,
    payload: {
      trainers,
    },
  };
}

export function searchTrainersFailure(): SearchTrainersFailureAction {
  return {
    type: SEARCH_TRAINERS_FAILURE,
  };
}

export function setCity(city: IListItem): SetCityAction {
  return {
    type: SET_CITY,
    payload: {
      city,
    },
  };
}

export function setCategories(categories: IListItem[]): SetCategoriesAction {
  return {
    type: SET_CATEGORIES,
    payload: {
      categories,
    },
  };
}
