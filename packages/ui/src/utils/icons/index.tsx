import React, { ReactElement } from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import { IconEnum } from './icons.types';

export const selectIconComponent = (iconType: IconEnum): (() => ReactElement) => {
  switch (iconType) {
    case IconEnum.User:
      return () => <AccountBoxIcon />;
    case IconEnum.Lock:
      return () => <LockIcon />;
    default:
      return null;
  }
};
