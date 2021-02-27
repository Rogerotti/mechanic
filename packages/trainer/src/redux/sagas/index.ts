import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { loginSuccess } from '@redux/actions/authentication';
import { LoginActionRequest, LOGIN_ACTION_REQUEST } from '@redux//types/authentication';

import { loginRequest } from '../../api/authentication';

function* loginUser(action: LoginActionRequest) {
  try {
    const _user = yield call(loginRequest, action.payload.username, action.payload.password);
    yield put(loginSuccess(action.payload.username));
  } catch (e) {
    yield put(loginSuccess(action.payload.username));
  }
}

function* watchLoginUser() {
  yield takeLatest(LOGIN_ACTION_REQUEST, loginUser);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  yield all([fork(watchLoginUser)]);
}
