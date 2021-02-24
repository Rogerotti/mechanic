import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import background from '@assets/searchBackground.jpg';

import { Searching } from '.';

export default {
  title: 'Composition/Searching',
  component: Searching,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Searching>> = ({ ...args }) => {
  console.log(background);
  return <Searching {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  header: 'Chcesz lepszych efektów? ',
  subHeader: 'Znajdź lepszego trenera!',
  backgroudImage: background,
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
