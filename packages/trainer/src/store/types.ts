import { SearchTrainersReducerState } from './search/types';
import { AuthenticationReducerState } from './authentication/types';
export interface IStoreTypes {
  searchReducer: SearchTrainersReducerState;
  authenticationReducer: AuthenticationReducerState;
}
