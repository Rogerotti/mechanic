import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import background from '@assets/searchBackground.jpg';

import { Searching } from '.';
import { cities, categories } from '../../storybook/data/searching';

export default {
  title: 'Composition/Searching',
  component: Searching,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Searching>> = ({ ...args }) => {
  return <Searching {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  header: 'Chcesz lepszych efektów? ',
  subHeader: 'Znajdź lepszego trenera!',
  backgroudImage: background,
  cities: cities,
  categories: categories,
};
