import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTrainers } from '@api/buisness/trainers';
import {
  SearchTrainerRequestAction,
  SearchTrainersRequestAction,
  SEARCH_TRAINERS_REQUEST,
  SEARCH_TRAINER_REQUEST,
} from '@redux/types/search';
import {
  searchTrainerFailure,
  searchTrainersFailure,
  searchTrainersSuccess,
  searchTrainerSuccess,
} from '@redux/actions/search';
import { navigationRequest } from '@redux/actions/navigation';
import { fetchTrainer } from '@api/buisness/trainer';

function* searchTrainer(action: SearchTrainerRequestAction) {
  try {
    const trainer = yield call(fetchTrainer, action.payload.id);
    yield put(searchTrainerSuccess(trainer));
  } catch (e) {
    yield put(searchTrainerFailure());
  }
}

function* searchTrainers(action: SearchTrainersRequestAction) {
  try {
    const trainers = yield call(
      fetchTrainers,
      action.payload.city.id,
      action.payload.categories.map((category) => category.id),
    );
    yield put(searchTrainersSuccess(trainers));
    yield put(navigationRequest('/trainers'));
  } catch (e) {
    yield put(searchTrainersFailure());
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* watchSearchTrainer() {
  yield takeLatest(SEARCH_TRAINER_REQUEST, searchTrainer);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* watchSearchTrainers() {
  yield takeLatest(SEARCH_TRAINERS_REQUEST, searchTrainers);
}
