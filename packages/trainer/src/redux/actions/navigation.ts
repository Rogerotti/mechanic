import {
  NAVIGATION_REQUEST,
  NAVIGATION_SUCCESS,
  NavigationActionRequest,
  NavigationActionSuccess,
} from '@redux/types/navigation';

export function navigationRequest(url: string): NavigationActionRequest {
  return {
    type: NAVIGATION_REQUEST,
    payload: {
      url,
    },
  };
}

export function navigationSuccess(): NavigationActionSuccess {
  return {
    type: NAVIGATION_SUCCESS,
  };
}
