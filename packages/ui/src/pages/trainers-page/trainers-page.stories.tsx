import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';

import { TrainersPage } from '.';
import { LayoutForStories } from '../../storybook/layout';
import { categories, cities } from '../../storybook/data/searching';
import { trainer1, trainer2 } from '../../storybook/data/trainers';

export default {
  title: 'Pages/Trainers Page',
  component: TrainersPage,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof TrainersPage>> = ({ ...args }) => {
  return (
    <LayoutForStories>
      <TrainersPage {...args} />
    </LayoutForStories>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  trainers: [trainer1, trainer2],
  categories: categories,
  cities: cities,
};
