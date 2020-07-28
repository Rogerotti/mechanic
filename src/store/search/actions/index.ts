import { SEARCH_MECHANICS, SearchMechanic, SearchMechanicsAction } from '../types';

export function searchMechanics(searchMechanic: SearchMechanic): SearchMechanicsAction {
  return {
    type: SEARCH_MECHANICS,
    payload: searchMechanic,
  };
}
