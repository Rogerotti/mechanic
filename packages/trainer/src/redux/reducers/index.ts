import { combineReducers } from 'redux';
import { searchReducer } from './search';
import { authenticationReducer } from './authentication';
import { navigationReducer } from './navigation';

export const rootReducer = combineReducers({ searchReducer, authenticationReducer, navigationReducer });
