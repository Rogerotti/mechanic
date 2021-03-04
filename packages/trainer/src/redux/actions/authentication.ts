import {
  LOGIN_ACTION_SUCCESS,
  LOGIN_ACTION_REQUEST,
  LoginActionRequest,
  LoginActionSuccess,
  LogoutAction,
  LOGOUT_ACTION,
  LoginActionFailure,
  LOGIN_ACTION_FAILURE,
  REGISTER_ACTION_REQUEST,
  RegisterActionRequest,
} from '@redux/types/authentication';

export function loginRequest(username: string, password: string): LoginActionRequest {
  return {
    type: LOGIN_ACTION_REQUEST,
    payload: {
      username,
      password,
    },
  };
}

export function loginSuccess(username: string): LoginActionSuccess {
  return {
    type: LOGIN_ACTION_SUCCESS,
    payload: {
      username,
    },
  };
}

export function loginFailure(): LoginActionFailure {
  return {
    type: LOGIN_ACTION_FAILURE,
  };
}

export function logout(): LogoutAction {
  return {
    type: LOGOUT_ACTION,
  };
}

export function registerRequest(email: string, password: string): RegisterActionRequest {
  return {
    type: REGISTER_ACTION_REQUEST,
    payload: {
      email,
      password,
    },
  };
}
