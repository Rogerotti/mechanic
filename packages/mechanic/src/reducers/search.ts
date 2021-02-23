import { SEARCH_TRAINERS, SearchTrainerssAction, SearchTrainers } from '../store/search/types';

const initialState: SearchTrainers = {
  categories: [],
  city: '',
};

export function searchReducer(state = initialState, action: SearchTrainerssAction): SearchTrainers {
  switch (action.type) {
    case SEARCH_TRAINERS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
