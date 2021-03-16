import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import logoImage from '@assets/trener1.png';
import { TrainerPage } from '.';
import { LayoutForStories } from '../../storybook/layout';
import { ITrainerPageProps } from './trainer-page.types';
import { events } from '../../storybook/data/scheduler';
import { commentsSectionData } from '../../storybook/data/sections/commentsSection';
import { heroData } from '../../storybook/data/hero';

export default {
  title: 'Pages/Trainer Page',
  component: TrainerPage,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof TrainerPage>> = ({ ...args }) => {
  return (
    <LayoutForStories>
      <TrainerPage {...args} />
    </LayoutForStories>
  );
};

export const Basic: { args: ITrainerPageProps } = Template.bind({});

Basic.args = {
  commentsSection: commentsSectionData,
  hero: {
    ...heroData,
    title: 'Iwan Stonoga',
    subtitle: 'Trener personalny',
  },
  title: 'Iwan Stonoga',
  description: `
  Cześć nazywam się Marcin Michalski, jestem dietetykiem i trenerem personalnym.

Od 2019 roku interesuję się dietetyką oraz tematami, które wpływają na poprawę zdrowia. 

Moim celem jest pomagać osobom z problemami zdrowotnymi poprzez zmianę nawyków życia codziennego. Dbanie o siebie poprzez aktywność fizyczną, akceptację ciała, pozytywne myślenie, odpowiedni sen i zdrowe odżywianie jest kluczem do osiągnięcia optymalnego zdrowia oraz osiągania innych celów.

Aktualnie istnieje wiele chorób w których dieta może w zdecydowanym stopniu pomóc. Najcześciej osoby zgłaszają się z poniższymi schorzeniami: 

    Otyłość,
    Nadwaga,
    Cukrzyca typu 2,
    Insulinooporność,
    Niedoczynność tarczycy,
    Hashimoto i inne choroby autoimunologiczne,
    Problemy z gospodarką hormonalną (PCOS)


   `,

  image: logoImage,
  events: events,
};

// Dodatkowo indywidualnie dobrany jadłospis może pomóc Ci zyskać więcej energii w ciągu dnia, poprawić sen, oraz codzienne funkcjonowanie. Dzięki licznym szkoleniom, które odbyłem będę w stanie pomóc Ci z różnego rodzaju problemami.

// Oprócz dietetyki klinicznej i chorób z nią związanych, moim zainteresowaniem jest dietetyka sportowa. Pasja do dietetyki sportowej wzięła się z aktywnego trybu życia, który prowadzę już ponad 3 lat (piłka nożna, siłownia, bieganie). Szukając optymalnego modelu żywienia w swojej aktywności znalazłem kilkadziesiąt rozwiązań, które sprawdzają się w praktyce sportowej.

// Każdy z Nas jest na diecie – więc staraj się wybierać lepiej.

// Zdrowie składa się z wielu elementów, kluczowa jest optymalizacja zaniedbanych obszarów oraz wzmocnienie tych które funkcjonują prawidłowo aby osiągnąć całość w jak najlepszej formie. Musisz połączyć to wszystko, jeśli chcesz zmaksymalizować efekty.

// Aby rozpocząć optymalizację już teraz, musisz jedynie uświadomić sobie, że umysł i ciało są ze sobą powiązane.

// W połączeniu z dietetyką sportową, rozwinąłem w sobie pasję do wzmocnienia innego ogniwa jakim jest trening fizyczny. Kilka szkoleń z zakresu treningu siłowego, oraz pare lat pracy dało mi świetny obraz funkcjonowania człowieka na boisku, siłowni bądź w codziennym życiu. Obecnie oprócz dietetyki realizuję się jako trener personalny.

// Potrzebujesz pomocy w tematyce treningów personalnych i dietetyki

// Mój numer telefonu (+48) 507-324-603 na pewno coś zaradzimy wspólnie i pomożemy
