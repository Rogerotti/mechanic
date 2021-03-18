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
import { mapSectionData } from '../../storybook/data/sections/mapSection';
import { userContactSectionData } from '../../storybook/data/sections/userSection';

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
  mapSection: mapSectionData,
  userContactSection: userContactSectionData,
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
