import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { MultiCategorySelect } from './multi-category-select.component';

export default {
  title: 'Core Components/MultiCategorySelect',
  component: MultiCategorySelect,
  decorators: [withKnobs],
  argTypes: {},
};

const Template: Story<ComponentProps<typeof MultiCategorySelect>> = (args) => <MultiCategorySelect {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  label: 'Kategorie',
  placeholder: 'Wyszukaj',
  items: [
    {
      id: '1',
      value: 'Sporty walki',
      subCategories: [
        {
          id: 'mma',
          value: 'MMA',
        },
        {
          id: 'kickbox',
          value: 'kickbox',
        },
      ],
    },
    {
      id: '2',
      value: 'Sporty zimowe',
      subCategories: [
        {
          id: 'hhh',
          value: 'Hokej',
        },
        {
          id: 'ski',
          value: 'Narciarstwo',
        },
      ],
    },
  ],
};
