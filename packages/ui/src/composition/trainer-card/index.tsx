import React from 'react';
import { trimText } from './trainer-card.utils';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Theme } from '@material-ui/core';

import { ITrainerCardProps } from './trainer-card.types';
import { TrainerCardDesktop } from './trainer-card.desktop';
import { TrainerCardMobile } from './trainer-card.mobile';

export const TrainerCard: React.FC<ITrainerCardProps> = ({
  firstName,
  lastName,
  image,
  description,
  rating,
  numberOfRaitings,
  location,
  generalCategories,
  additionalCategories,
}) => {
  const text = trimText(description, 180, 210, 250);
  const locationText = trimText(location, 30, 40, 50);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'));

  if (isMobile) {
    return (
      <TrainerCardMobile
        firstName={firstName}
        lastName={lastName}
        image={image}
        description={text[0]}
        rating={rating}
        numberOfRaitings={numberOfRaitings}
        location={locationText[0]}
        generalCategories={generalCategories}
        additionalCategories={additionalCategories}
      />
    );
  }

  return (
    <TrainerCardDesktop
      firstName={firstName}
      lastName={lastName}
      image={image}
      description={text[0]}
      rating={rating}
      numberOfRaitings={numberOfRaitings}
      location={locationText[0]}
      generalCategories={generalCategories}
      additionalCategories={additionalCategories}
    />
  );
};
