export interface SearchMechanic {
  brand: string;
  model: string;
  city: string;
}

export const SEARCH_MECHANICS = 'SEARCH_MECHANICS';

export interface SearchMechanicsAction {
  type: typeof SEARCH_MECHANICS;
  payload: SearchMechanic;
}
