import { ILink } from '../../../ui/types/core';
import useTranslation from '../translations/hooks';

export const getHeaderLinks = (): ILink[] => {
  const { getText } = useTranslation();

  return [
    {
      text: getText('aboutUs'),
      href: 'about',
    },
    {
      text: getText('priceList'),
      href: 'price',
    },
  ];
};

export const getHeaderRightMenuLinks = (): ILink[] => {
  const { getText } = useTranslation();

  return [
    {
      text: getText('login'),
      href: 'login',
    },
    {
      text: getText('register'),
      href: 'register',
    },
  ];
};
