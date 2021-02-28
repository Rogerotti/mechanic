import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '@redux/reducers';
import rootSaga from '@redux/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'; // imports from redux-persist

import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

const persistConfig = {
  // configuration object for redux-persist
  key: 'root',
  storage, // define which storage to use
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
