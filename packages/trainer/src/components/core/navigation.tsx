import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getRedirectUrl, getShouldRedirect } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { navigationSuccess } from '@redux/actions/navigation';

export const SagaNavigation: React.FC<unknown> = () => {
  const shouldRedirect = useSelector(getShouldRedirect);
  const url = useSelector(getRedirectUrl);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (shouldRedirect) {
      dispatch(navigationSuccess());
      history.push(url);
    }
  }, [shouldRedirect]);

  return null;
};

export default SagaNavigation;
