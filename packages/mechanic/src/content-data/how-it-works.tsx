import React from 'react';

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import { ITabItem } from '@ui/core-components/tabs/tabs.types';
import { IStep } from '@ui/composition/how-it-works/how-it-works.types';

import searchIcon from '@assets/how-it-works/protege/search.svg';
import registerIcon from '@assets/how-it-works/protege/register.svg';
import calendarIcon from '@assets/how-it-works/protege/calendar.svg';
import debitCardIcon from '@assets/how-it-works/protege/debitCard.svg';
import gymIcon from '@assets/how-it-works/protege/gym.svg';
import thumbUpIcon from '@assets/how-it-works/protege/thumbUp.svg';

import advertisementIcon from '@assets/how-it-works/trainer/advertisement.svg';
import calendarTrainerIcon from '@assets/how-it-works/trainer/calendar.svg';
import trainerIcon from '@assets/how-it-works/trainer/trainer.svg';
import analyticsIcon from '@assets/how-it-works/trainer/analytics.svg';

import useTranslation from '../translations/hooks';

const PROTEGE_ID = 'protege';
const TRAINER_ID = 'trainer';

export const getHowItWorksTabs = (): ITabItem[] => {
  const { getText } = useTranslation();

  return [
    {
      id: PROTEGE_ID,
      value: getText('protege'),
      icon: <PermIdentityIcon />,
    },
    {
      id: TRAINER_ID,
      value: getText('trainer'),
      icon: <LocalAtmIcon />,
    },
  ];
};

export const getHowItWorksSteps = (value: string): IStep[] => {
  const { getText } = useTranslation();

  if (value === PROTEGE_ID) {
    return [
      {
        number: 1,
        header: 'Wyszukaj Trenera',
        subHeader: 'Wyszukaj wśród listy trenerów osoby, która spełnia twoje kryteria',
        icon: searchIcon,
      },
      {
        number: 2,
        header: 'Uwierzytelnij się',
        subHeader: 'Zaloguj się lub zarejestruj w celu potwierdzenia swojej osoby.',
        icon: registerIcon,
      },
      {
        number: 3,
        header: 'Zarezerwuj zajęcia',
        subHeader: 'Wybierz lekcję u trenera spełniającego twoje kryteria',
        icon: calendarIcon,
      },
      { number: 4, header: 'Zapłać', subHeader: 'Dokonaj płatności zgodnie ze stawką trenera', icon: debitCardIcon },
      { number: 5, header: 'Udaj się na zajęcia', subHeader: 'Daj z siebie 100%', icon: gymIcon },
      {
        number: 6,
        header: 'Oceń',
        subHeader: 'Wystaw ocene dzięki czemu każde ogłoszenie zamieszczone na stronie będzie wiarygodne',
        icon: thumbUpIcon,
      },
    ];
  }

  if (value === TRAINER_ID) {
    return [
      {
        number: 1,
        header: 'Zarejestruj się',
        subHeader: 'Wybierz sposród 3 pakietów odpowiedni dla twoich ogłoszeń',
        icon: registerIcon,
      },
      {
        number: 2,
        header: 'Dodaj ogłoszenie',
        subHeader: 'To proste, wypełnij formularz z ogłoszeniem',
        icon: advertisementIcon,
      },
      {
        number: 3,
        header: 'Oczekuj rezerwacji',
        subHeader: 'Poczekaj na rezerwacje zajęć przez klientów',
        icon: calendarTrainerIcon,
      },
      {
        number: 4,
        header: 'Przeprowadź zajęcia',
        subHeader: 'Czas na twoje działanie',
        icon: trainerIcon,
      },
      {
        number: 5,
        header: 'Analizuj opinie klientów',
        subHeader: 'Sprawdź jak udoskonalić swoje zajęcia poprzez opinie klientów',
        icon: analyticsIcon,
      },
    ];
  }

  return [];
};
