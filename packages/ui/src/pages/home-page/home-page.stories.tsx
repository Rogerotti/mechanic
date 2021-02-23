import React, { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import background from '../../../public/searchBackground.jpg';
import logoImage from '../../../public/logo.svg';

import register from '../../../public/how-it-works/register.svg';

import search from '../../../public/how-it-works/protege/search.svg';
import rate from '../../../public/how-it-works/protege/thumbUp.svg';
import pay from '../../../public/how-it-works/protege/debitCard.svg';
import calendar from '../../../public/how-it-works/protege/calendar.svg';
import gym from '../../../public/how-it-works/protege/gym.svg';

import analyticsIcon from '../../../public/how-it-works/trainer/analytics.svg';
import advert from '../../../public/how-it-works/trainer/advertisment.svg';
import calendarTrainer from '../../../public/how-it-works/trainer/calendar.svg';
import personal from '../../../public/how-it-works/trainer/trainer.svg';

import { HomePage } from '.';
import Layout from '../../composition/layout';

export default {
  title: 'Pages/Home Page',
  component: HomePage,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof HomePage>> = ({ tabs, ...args }) => {
  const [selectedTabId, setSelectedTabId] = useState(tabs?.[0].id);

  const showForUser = selectedTabId === tabs?.[0].id;
  const stepsForUser = [
    {
      number: 1,
      header: 'Wyszukaj Trenera',
      subHeader: 'Wyszukaj wśród listy trenerów osoby, która spełnia twoje kryteria',
      icon: search,
    },
    {
      number: 2,
      header: 'Uwierzytelnij się',
      subHeader: 'Zaloguj się lub zarejestruj w celu potwierdzenia swojej osoby.',
      icon: register,
    },
    {
      number: 3,
      header: 'Zarezerwuj zajęcia',
      subHeader: 'Wybierz lekcję u trenera spełniającego twoje kryteria',
      icon: calendar,
    },
    { number: 4, header: 'Zapłać', subHeader: 'Dokonaj płatności zgodnie ze stawką trenera', icon: pay },
    { number: 5, header: 'Udaj się na zajęcia', subHeader: 'Daj z siebie 100%', icon: gym },
    {
      number: 6,
      header: 'Oceń',
      subHeader: 'Wystaw ocene dzięki czemu każde ogłoszenie zamieszczone na stronie będzie wiarygodne',
      icon: rate,
    },
  ];

  const stepsForTrainer = [
    {
      number: 1,
      header: 'Zarejestruj się',
      subHeader: 'Wybierz sposród 3 pakietów odpowiedni dla twoich ogłoszeń',
      icon: register,
    },
    {
      number: 2,
      header: 'Dodaj ogłoszenie',
      subHeader: 'To proste, wypełnij formularz z ogłoszeniem',
      icon: advert,
    },
    {
      number: 3,
      header: 'Oczekuj rezerwacji',
      subHeader: 'Poczekaj na rezerwacje zajęć przez klientów',
      icon: calendarTrainer,
    },
    {
      number: 4,
      header: 'Przeprowadź zajęcia',
      subHeader: 'Czas na twoje działanie',
      icon: personal,
    },
    {
      number: 5,
      header: 'Analizuj opinie klientów',
      subHeader: 'Sprawdź jak udoskonalić swoje zajęcia poprzez opinie klientów',
      icon: analyticsIcon,
    },
  ];

  const onHowItWorksTabChange = (value: string): void => {
    setSelectedTabId(value);
  };

  const headerLinks = [
    {
      text: 'O nas',
      href: 'about',
    },
    {
      text: 'Cennik',
      href: 'price',
    },
  ];

  const headerRightMenuLinks = [
    {
      text: 'Zaloguj',
      href: 'about',
    },
    {
      text: 'Zarejestruj',
      href: 'price',
    },
  ];
  const headerUsername = 'Roger';

  return (
    <Layout
      headerLinks={headerLinks}
      headerRightMenuLinks={headerRightMenuLinks}
      headerUsername={headerUsername}
      headerLogo={logoImage}
      footerLogo={logoImage}
    >
      <HomePage
        {...args}
        tabs={tabs}
        searchBackgroundImage={background}
        steps={showForUser ? stepsForUser : stepsForTrainer}
        howItWorksSelectedTabId={selectedTabId}
        onHowItWorksTabChange={onHowItWorksTabChange}
      />
    </Layout>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  searchHeader: 'Chcesz lepszych efektów? ',
  searchSubheader: 'Znajdź lepszego trenera!',
  howItWorksHeader: 'Jak to dziala?',
  loginText: 'zaloguj',
  registerText: 'zarejestruj',

  tabs: [
    {
      id: '1',
      value: 'Podopieczny',
      icon: <PermIdentityIcon />,
    },
    {
      id: '2',
      value: 'Trener',
      icon: <LocalAtmIcon />,
    },
  ],
  cities: [
    {
      id: 'krk',
      value: 'Kraków',
    },
    { id: 'wwa', value: 'Warszawa' },
  ],
  categories: [
    {
      id: 'swim',
      value: 'Pływanie',
    },
    { id: 'mma', value: 'MMA' },
    { id: 'bjj', value: 'Brazylijskie jiu jitsu' },
  ],
};
