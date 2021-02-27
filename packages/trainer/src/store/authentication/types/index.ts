export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGOUT_ACTION = 'LOGOUT_ACTION';

export interface AuthenticationReducerState {
  isAuthenticated: boolean;
}

export interface LoginAction {
  type: typeof LOGIN_ACTION;
}

export interface LogoutAction {
  type: typeof LOGOUT_ACTION;
}

export type AuthenticationActionTypes = LoginAction | LogoutAction;
