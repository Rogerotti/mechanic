import { SearchTrainersReducerState } from './search';
import { AuthenticationReducerState } from './authentication';
export interface IStoreTypes {
  searchReducer: SearchTrainersReducerState;
  authenticationReducer: AuthenticationReducerState;
}
