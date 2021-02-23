export interface SearchTrainers {
  categories: string[];
  city: string;
}

export const SEARCH_TRAINERS = 'SEARCH_TRAINERS';

export interface SearchTrainerssAction {
  type: typeof SEARCH_TRAINERS;
  payload: SearchTrainers;
}
