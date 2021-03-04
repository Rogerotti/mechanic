import {
  SearchActionTypes,
  SEARCH_TRAINERS_REQUEST,
  SEARCH_TRAINERS_FAILURE,
  SearchTrainersReducerState,
  SEARCH_TRAINERS_SUCCESS,
  SET_CITY,
  SET_CATEGORIES,
} from '@redux/types/search';

const initialState: SearchTrainersReducerState = {
  city: null,
  categories: [],
  trainers: [],
  redirect: false,
};

export function searchReducer(state = initialState, action: SearchActionTypes): SearchTrainersReducerState {
  switch (action.type) {
    case SEARCH_TRAINERS_REQUEST:
      return {
        ...state,
        categories: action.payload.categories,
        city: action.payload.city,
      };
    case SEARCH_TRAINERS_SUCCESS:
      return {
        ...state,
        trainers: action.payload.trainers,
        redirect: true,
      };
    case SEARCH_TRAINERS_FAILURE:
      return {
        ...initialState,
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload.city,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };

    default:
      return state;
  }
}
