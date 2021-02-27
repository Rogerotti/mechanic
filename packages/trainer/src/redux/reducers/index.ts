import { combineReducers } from 'redux';
import { searchReducer } from './search';
import { authenticationReducer } from './authentication';

export const rootReducer = combineReducers({ searchReducer, authenticationReducer });
