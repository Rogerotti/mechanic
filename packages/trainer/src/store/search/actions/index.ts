import { SEARCH_TRAINERS, SearchTrainersReducerState, SearchTrainerssAction } from '../types';

export function searchTrainers(searchTrainers: SearchTrainersReducerState): SearchTrainerssAction {
  return {
    type: SEARCH_TRAINERS,
    payload: searchTrainers,
  };
}
