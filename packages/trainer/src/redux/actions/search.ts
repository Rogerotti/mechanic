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
  SearchTrainerEventsRequestAction,
  SEARCH_TRAINER_EVENTS_REQUEST,
  ISearchEvents,
  SEARCH_TRAINER_EVENTS_SUCCESS,
  SearchTrainerEventsSuccessAction,
  SearchTrainerEventsFailureAction,
  SEARCH_TRAINER_EVENTS_FAILURE,
  SearchTrainerCommentsRequestAction,
  SEARCH_TRAINER_COMMENTS_REQUEST,
  ICommentDTO,
  SearchTrainerCommentsSuccessAction,
  SEARCH_TRAINER_COMMENTS_SUCCESS,
  SearchTrainerCommentsFailureAction,
  SEARCH_TRAINER_COMMENTS_FAILURE,
} from '@redux/types/search';
import { IListItem } from '@ui/types/core';
import { ITrainerBasicDTO, ITrainerExtendedDTO } from 'src/interfaces';

export function searchTrainerComments(id: string, length?: number): SearchTrainerCommentsRequestAction {
  return {
    type: SEARCH_TRAINER_COMMENTS_REQUEST,
    payload: {
      id,
      length,
    },
  };
}

export function searchTrainerCommentsSuccess(comments: ICommentDTO[]): SearchTrainerCommentsSuccessAction {
  return {
    type: SEARCH_TRAINER_COMMENTS_SUCCESS,
    payload: {
      comments,
    },
  };
}

export function searchTrainerCommentsFailure(): SearchTrainerCommentsFailureAction {
  return {
    type: SEARCH_TRAINER_COMMENTS_FAILURE,
  };
}

export function searchTrainerEvents(id: string, startDate: Date, endDate: Date): SearchTrainerEventsRequestAction {
  return {
    type: SEARCH_TRAINER_EVENTS_REQUEST,
    payload: {
      id,
      startDate,
      endDate,
    },
  };
}

export function searchTrainerEventsSuccess(searchEvents: ISearchEvents): SearchTrainerEventsSuccessAction {
  return {
    type: SEARCH_TRAINER_EVENTS_SUCCESS,
    payload: {
      searchEvents,
    },
  };
}

export function searchTrainerEventsFailure(): SearchTrainerEventsFailureAction {
  return {
    type: SEARCH_TRAINER_EVENTS_FAILURE,
  };
}

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
