import { SEARCH_TRAINERS, SearchTrainers, SearchTrainerssAction } from '../types';

export function searchTrainers(searchTrainers: SearchTrainers): SearchTrainerssAction {
  return {
    type: SEARCH_TRAINERS,
    payload: searchTrainers,
  };
}
