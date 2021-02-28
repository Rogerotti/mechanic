import { SearchTrainersReducerState } from './search';
import { AuthenticationReducerState } from './authentication';
import { NavigationReducerState } from './navigation';
export interface IStoreTypes {
  searchReducer: SearchTrainersReducerState;
  authenticationReducer: AuthenticationReducerState;
  navigationReducer: NavigationReducerState;
}
