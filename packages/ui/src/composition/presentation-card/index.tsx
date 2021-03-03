import React from 'react';
import { trimText } from './presentation-card.utils';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Theme } from '@material-ui/core';

import { IPresentationCardProps } from './presentation-card.types';
import { PresentationCardDesktop } from './presentation-card.desktop';
import { PresentationCardMobile } from './presentation-card.mobile';

export const PresentationCard: React.FC<IPresentationCardProps> = ({ location, description, ...rest }) => {
  const text = trimText(description, 180, 210, 250);
  const locationText = trimText(location, 30, 40, 50);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'));

  if (isMobile) {
    return <PresentationCardMobile {...rest} description={text[0]} location={locationText[0]} />;
  }

  return <PresentationCardDesktop {...rest} location={locationText[0]} description={text[0]} />;
};
