import { LOGIN_ACTION, LOGOUT_ACTION, LoginAction, LogoutAction } from '../types';

export function login(): LoginAction {
  return {
    type: LOGIN_ACTION,
  };
}

export function logout(): LogoutAction {
  return {
    type: LOGOUT_ACTION,
  };
}
