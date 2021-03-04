import {
  AuthenticationReducerState,
  AuthenticationActionTypes,
  LOGIN_ACTION_SUCCESS,
  LOGIN_ACTION_FAILURE,
  LOGOUT_ACTION,
  LOGIN_ACTION_REQUEST,
  REGISTER_ACTION_REQUEST,
} from '@redux/types/authentication';

const initialState: AuthenticationReducerState = {
  isAuthenticated: false,
  username: undefined,
};

export function authenticationReducer(
  state = initialState,
  action: AuthenticationActionTypes,
): AuthenticationReducerState {
  switch (action.type) {
    case LOGIN_ACTION_REQUEST:
      return {
        isAuthenticated: false,
      };
    case LOGIN_ACTION_SUCCESS:
      return {
        isAuthenticated: true,
        username: action.payload.username,
      };
    case LOGIN_ACTION_FAILURE:
      return {
        isAuthenticated: false,
      };
    case LOGOUT_ACTION:
      return {
        isAuthenticated: false,
      };
    case REGISTER_ACTION_REQUEST:
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
