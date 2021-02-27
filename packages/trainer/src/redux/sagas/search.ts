import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTrainers } from '@api/buisness/trainers';
import { SearchTrainersRequestAction, SEARCH_TRAINERS_REQUEST } from '@redux/types/search';
import { searchTrainersFailure, searchTrainersSuccess } from '@redux/actions/search';

function* searchTrainers(action: SearchTrainersRequestAction) {
  try {
    const trainers = yield call(
      fetchTrainers,
      action.payload.city.id,
      action.payload.categories.map((category) => category.id),
    );
    yield put(searchTrainersSuccess(trainers));
  } catch (e) {
    yield put(searchTrainersFailure());
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* watchSearchTrainers() {
  yield takeLatest(SEARCH_TRAINERS_REQUEST, searchTrainers);
}
