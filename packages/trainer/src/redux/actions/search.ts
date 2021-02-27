import { SEARCH_TRAINERS, SearchTrainersReducerState, SearchTrainerssAction } from '@redux/types/search';

export function searchTrainers(searchTrainers: SearchTrainersReducerState): SearchTrainerssAction {
  return {
    type: SEARCH_TRAINERS,
    payload: searchTrainers,
  };
}
