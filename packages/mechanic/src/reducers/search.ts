import { SEARCH_MECHANICS, SearchMechanicsAction, SearchMechanic } from '../store/search/types';

const initialState: SearchMechanic = {
  brand: '',
  city: '',
  model: '',
};

export function searchReducer(state = initialState, action: SearchMechanicsAction): SearchMechanic {
  switch (action.type) {
    case SEARCH_MECHANICS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
