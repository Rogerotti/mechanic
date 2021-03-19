import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTrainers } from '@api/business/trainers';
import {
  SearchTrainerEventsRequestAction,
  SearchTrainerRequestAction,
  SearchTrainersRequestAction,
  SEARCH_TRAINER_EVENTS_REQUEST,
  SEARCH_TRAINERS_REQUEST,
  SEARCH_TRAINER_REQUEST,
} from '@redux/types/search';
import {
  searchTrainerEventsFailure,
  searchTrainerEventsSuccess,
  searchTrainerFailure,
  searchTrainersFailure,
  searchTrainersSuccess,
  searchTrainerSuccess,
} from '@redux/actions/search';
import { navigationRequest } from '@redux/actions/navigation';
import { fetchTrainer, fetchTrainerEvents } from '@api/business/trainer';
import { IEventDTO, ITrainerBasicDTO, ITrainerExtendedDTO } from 'src/interfaces';

function* searchTrainer(action: SearchTrainerRequestAction) {
  try {
    const trainer: ITrainerExtendedDTO = yield call(fetchTrainer, action.payload.id);
    yield put(searchTrainerSuccess(trainer));
  } catch (e) {
    yield put(searchTrainerFailure());
  }
}

function* searchTrainers(action: SearchTrainersRequestAction) {
  try {
    const trainers: ITrainerBasicDTO[] = yield call(
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

function* searchTrainerEvents(action: SearchTrainerEventsRequestAction) {
  try {
    const events: IEventDTO[] = yield call(
      fetchTrainerEvents,
      action.payload.id,
      action.payload.startDate,
      action.payload.endDate,
    );
    yield put(
      searchTrainerEventsSuccess({
        trainerId: action.payload.id,
        starDate: action.payload.startDate,
        endDate: action.payload.endDate,
        events: events,
      }),
    );
  } catch (e) {
    yield put(searchTrainerEventsFailure());
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* watchSearchTrainerEvents() {
  yield takeLatest(SEARCH_TRAINER_EVENTS_REQUEST, searchTrainerEvents);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* watchSearchTrainer() {
  yield takeLatest(SEARCH_TRAINER_REQUEST, searchTrainer);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* watchSearchTrainers() {
  yield takeLatest(SEARCH_TRAINERS_REQUEST, searchTrainers);
}
