import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getRedirectionInfo } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { navigationSuccess } from '@redux/actions/navigation';

export const SagaNavigation: React.FC<unknown> = () => {
  const redirectionInfo = useSelector(getRedirectionInfo);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (redirectionInfo.shouldRedirect && redirectionInfo.url) {
      dispatch(navigationSuccess());
      history.push(redirectionInfo.url);
    }
  }, [redirectionInfo]);

  return null;
};

export default SagaNavigation;
