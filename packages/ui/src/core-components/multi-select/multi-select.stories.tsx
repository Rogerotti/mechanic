import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { MultiSelect } from './multi-select.component';
import { Box } from '@material-ui/core';

export default {
  title: 'Core Components/MultiSelect',
  component: MultiSelect,
  decorators: [withKnobs],
  argTypes: {},
};

const Template: Story<ComponentProps<typeof MultiSelect>> = (args) => (
  <Box width={500} minHeight={200} bgcolor="primary.main" paddingTop={10}>
    <MultiSelect {...args} />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Kategorie',
  placeholder: 'Wyszukaj',
  items: [
    {
      id: 'mma',
      value: 'MMA',
    },
    {
      id: 'swim',
      value: 'Pływanie',
    },
    {
      id: 'horse',
      value: 'Jazda Konno',
    },
    {
      id: 'chess',
      value: 'Szachy',
    },
    {
      id: 'ski',
      value: 'Narciarstwo',
    },
  ],
};
