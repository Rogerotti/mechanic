export const LOGIN_ACTION_REQUEST = 'LOGIN_ACTION_REQUEST';
export const LOGIN_ACTION_SUCCESS = 'LOGIN_ACTION_SUCCESS';
export const LOGIN_ACTION_FAILURE = 'LOGIN_ACTION_FAILURE';

export const LOGOUT_ACTION = 'LOGOUT_ACTION';

export interface AuthenticationReducerState {
  isAuthenticated: boolean;
  username?: string;
}

export interface LoginActionRequest {
  type: typeof LOGIN_ACTION_REQUEST;
  payload: {
    username: string;
    password: string;
  };
}

export interface LoginActionSuccess {
  type: typeof LOGIN_ACTION_SUCCESS;
  payload: {
    username: string;
  };
}

export interface LoginActionFailure {
  type: typeof LOGIN_ACTION_FAILURE;
}

export interface LogoutAction {
  type: typeof LOGOUT_ACTION;
}

export type AuthenticationActionTypes = LoginActionSuccess | LoginActionFailure | LoginActionRequest | LogoutAction;
