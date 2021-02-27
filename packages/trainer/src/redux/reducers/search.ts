import { SEARCH_TRAINERS, SearchTrainerssAction, SearchTrainersReducerState } from '@redux/types/search';

const initialState: SearchTrainersReducerState = {
  categories: [],
  city: '',
};

export function searchReducer(state = initialState, action: SearchTrainerssAction): SearchTrainersReducerState {
  switch (action.type) {
    case SEARCH_TRAINERS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
