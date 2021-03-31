import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTrainers } from '@api/business/trainers';
import {
  SearchTrainerEventsRequestAction,
  SearchTrainerRequestAction,
  SearchTrainersRequestAction,
  SEARCH_TRAINER_EVENTS_REQUEST,
  SEARCH_TRAINERS_REQUEST,
  SEARCH_TRAINER_REQUEST,
  SEARCH_TRAINER_COMMENTS_REQUEST,
  SearchTrainerCommentsRequestAction,
  ICommentDTO,
} from '@redux/types/search';
import {
  searchTrainerCommentsFailure,
  searchTrainerCommentsSuccess,
  searchTrainerEventsFailure,
  searchTrainerEventsSuccess,
  searchTrainerFailure,
  searchTrainersFailure,
  searchTrainersSuccess,
  searchTrainerSuccess,
} from '@redux/actions/search';
import { navigationRequest } from '@redux/actions/navigation';
import { fetchTrainer, fetchTrainerComments, fetchTrainerEvents } from '@api/business/trainer';
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
    // const trainers: ITrainerBasicDTO[] = yield call(fetchTrainers, action.payload.city.id, action.payload.category.id);
    // yield put(searchTrainersSuccess(trainers));
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

function* searchTrainerComments(action: SearchTrainerCommentsRequestAction) {
  try {
    const comments: ICommentDTO[] = yield call(fetchTrainerComments, action.payload.id, action.payload.length);
    yield put(searchTrainerCommentsSuccess(comments));
  } catch (e) {
    yield put(searchTrainerCommentsFailure());
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* watchSearchTrainerComments() {
  yield takeLatest(SEARCH_TRAINER_COMMENTS_REQUEST, searchTrainerComments);
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
