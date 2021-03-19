import { all, fork } from 'redux-saga/effects';

import { watchSearchTrainer, watchSearchTrainers, watchSearchTrainerEvents } from './search';
import { watchLoginUser } from './authentication';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  yield all([fork(watchLoginUser)]);
  yield all([fork(watchSearchTrainerEvents)]);
  yield all([fork(watchSearchTrainer)]);
  yield all([fork(watchSearchTrainers)]);
}
