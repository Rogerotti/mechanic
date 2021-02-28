import { call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '@redux/actions/authentication';
import { LoginActionRequest, LOGIN_ACTION_REQUEST } from '@redux/types/authentication';

import { loginRequest } from '../../api/authentication';

function* loginUser(action: LoginActionRequest) {
  try {
    const _user = yield call(loginRequest, action.payload.username, action.payload.password);
    yield put(loginSuccess(action.payload.username));
  } catch (e) {
    yield put(loginFailure());
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* watchLoginUser() {
  yield takeLatest(LOGIN_ACTION_REQUEST, loginUser);
}
