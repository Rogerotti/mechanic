import { ILink, LinkEnum } from '@ui/types/core';
import { useDispatch } from 'react-redux';
import { logout } from '@redux/actions/authentication';
import useTranslation from '../translations/hooks';

export const getHeaderLinks = (): ILink[] => {
  const { getText } = useTranslation();

  return [
    {
      text: getText('aboutUs'),
      url: 'about',
      linkType: LinkEnum.Internal,
    },
    {
      text: getText('priceList'),
      url: 'price',
      linkType: LinkEnum.Internal,
    },
  ];
};

export const getHeaderRightMenuLinks = (isAuthenticated: boolean): ILink[] => {
  const { getText } = useTranslation();
  const dispatch = useDispatch();

  if (isAuthenticated) {
    return [
      {
        text: getText('logout'),
        url: 'logout',
        linkType: LinkEnum.Button,
        onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          console.log('logoutClick');
          dispatch(logout());
          event.preventDefault();
        },
      },
    ];
  }

  return [
    {
      text: getText('login'),
      url: 'login',
      linkType: LinkEnum.Internal,
    },
    {
      text: getText('register'),
      url: 'register',
      linkType: LinkEnum.Internal,
    },
  ];
};
