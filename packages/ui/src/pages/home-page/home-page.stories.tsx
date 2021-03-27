import React, { ComponentProps, useState } from 'react';

import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';

import background from '@assets/searchBackground.jpg';
import register from '@assets/how-it-works/register.svg';

import search from '@assets/how-it-works/protege/search.svg';
import rate from '@assets/how-it-works/protege/thumbUp.svg';
import pay from '@assets/how-it-works/protege/debitCard.svg';
import calendar from '@assets/how-it-works/protege/calendar.svg';
import gym from '@assets/how-it-works/protege/gym.svg';

import analyticsIcon from '@assets/how-it-works/trainer/analytics.svg';
import advert from '@assets/how-it-works/trainer/advertisment.svg';
import calendarTrainer from '@assets/how-it-works/trainer/calendar.svg';
import personal from '@assets/how-it-works/trainer/trainer.svg';

import { HomePage } from '.';
import { LayoutForStories } from '../../storybook/layout';
import { cities, categories } from '../../storybook/data/searching';
import { tabs } from '../../storybook/data/tabs';
import { mainCategoriesList } from '../../storybook/data/sections/mainCategories';

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

  return (
    <LayoutForStories>
      <HomePage
        {...args}
        tabs={tabs}
        searchBackgroundImage={background}
        steps={showForUser ? stepsForUser : stepsForTrainer}
        howItWorksSelectedTabId={selectedTabId}
        onHowItWorksTabChange={onHowItWorksTabChange}
      />
    </LayoutForStories>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  searchHeader: 'Chcesz lepszych efektów? ',
  searchSubheader: 'Znajdź lepszego trenera!',
  howItWorksHeader: 'Jak to dziala?',
  loginText: 'zaloguj',
  registerText: 'zarejestruj',

  mainCategoriesTitle: 'Kategorie główne',
  mainCategories: mainCategoriesList,

  tabs: tabs,
  cities: cities,
  categories: categories,
};
