import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';

import { ExtendedSearch } from '.';
import { cities, categories } from '../../storybook/data/searching';

export default {
  title: 'Composition/Extended Search',
  component: ExtendedSearch,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof ExtendedSearch>> = ({ ...args }) => {
  return <ExtendedSearch {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  cities: cities,
  categories: categories,
  generalCategories: [],
};
