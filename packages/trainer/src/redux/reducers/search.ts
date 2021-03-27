import {
  SearchActionTypes,
  SEARCH_TRAINERS_REQUEST,
  SEARCH_TRAINERS_FAILURE,
  SearchTrainersReducerState,
  SEARCH_TRAINERS_SUCCESS,
  SET_CITY,
  SET_CATEGORY,
  SEARCH_TRAINER_REQUEST,
  SEARCH_TRAINER_SUCCESS,
  SEARCH_TRAINER_EVENTS_REQUEST,
  SEARCH_TRAINER_EVENTS_SUCCESS,
  SEARCH_TRAINER_EVENTS_FAILURE,
  SEARCH_TRAINER_COMMENTS_REQUEST,
  SEARCH_TRAINER_COMMENTS_SUCCESS,
  SEARCH_TRAINER_COMMENTS_FAILURE,
} from '@redux/types/search';

const initialState: SearchTrainersReducerState = {
  city: null,
  category: null,
  trainers: [],
  trainer: null,
  redirect: false,
  searchEvents: null,
  comments: null,
};

export function searchReducer(state = initialState, action: SearchActionTypes): SearchTrainersReducerState {
  switch (action.type) {
    case SEARCH_TRAINER_COMMENTS_REQUEST:
      return {
        ...state,
        comments: null,
      };
    case SEARCH_TRAINER_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload.comments,
      };
    case SEARCH_TRAINER_COMMENTS_FAILURE:
      return {
        ...state,
        comments: null,
      };
    case SEARCH_TRAINER_EVENTS_REQUEST:
      return {
        ...state,
        searchEvents: null,
      };
    case SEARCH_TRAINER_EVENTS_SUCCESS:
      return {
        ...state,
        searchEvents: action.payload.searchEvents,
      };
    case SEARCH_TRAINER_EVENTS_FAILURE:
      return {
        ...state,
        searchEvents: null,
      };
    case SEARCH_TRAINER_REQUEST:
      return {
        ...state,
        trainer: null,
      };
    case SEARCH_TRAINER_SUCCESS:
      return {
        ...state,
        trainer: action.payload.trainer,
      };
    case SEARCH_TRAINERS_REQUEST:
      return {
        ...state,
        category: {
          categoryId: action.payload.category.groupId,
          categoryName: action.payload.category.groupValue,
          subcategoryId: action.payload.category.id,
          subcategoryName: action.payload.category.value,
        },
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
    case SET_CATEGORY:
      return {
        ...state,
        category: {
          categoryId: action.payload.category.groupId,
          categoryName: action.payload.category.groupValue,
          subcategoryId: action.payload.category.id,
          subcategoryName: action.payload.category.value,
        },
      };

    default:
      return state;
  }
}
