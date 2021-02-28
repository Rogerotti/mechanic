export const NAVIGATION_REQUEST = 'NAVIGATION_REQUEST';
export const NAVIGATION_SUCCESS = 'NAVIGATION_SUCCESS';

export interface NavigationReducerState {
  shouldRedirect: boolean;
  url?: string;
}

export interface NavigationActionRequest {
  type: typeof NAVIGATION_REQUEST;
  payload: {
    url: string;
  };
}

export interface NavigationActionSuccess {
  type: typeof NAVIGATION_SUCCESS;
}

export type NavigationActionTypes = NavigationActionRequest | NavigationActionSuccess;
