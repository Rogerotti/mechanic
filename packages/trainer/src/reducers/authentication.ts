import {
  AuthenticationReducerState,
  AuthenticationActionTypes,
  LOGIN_ACTION,
  LOGOUT_ACTION,
} from '../store/authentication/types';

const initialState: AuthenticationReducerState = {
  isAuthenticated: false,
};

export function authenticationReducer(
  state = initialState,
  action: AuthenticationActionTypes,
): AuthenticationReducerState {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        isAuthenticated: true,
      };
    case LOGOUT_ACTION:
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
