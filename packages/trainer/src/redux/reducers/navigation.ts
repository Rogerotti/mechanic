import {
  NAVIGATION_REQUEST,
  NAVIGATION_SUCCESS,
  NavigationReducerState,
  NavigationActionTypes,
} from '@redux/types/navigation';

const initialState: NavigationReducerState = {
  shouldRedirect: false,
  url: undefined,
};

export function navigationReducer(state = initialState, action: NavigationActionTypes): NavigationReducerState {
  switch (action.type) {
    case NAVIGATION_REQUEST:
      return {
        ...state,
        shouldRedirect: true,
        url: action.payload.url,
      };
    case NAVIGATION_SUCCESS:
      return {
        ...state,
        shouldRedirect: false,
        url: undefined,
      };
    default:
      return state;
  }
}
