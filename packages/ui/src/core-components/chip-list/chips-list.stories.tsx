import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import ThemeProvider from '../../theme';
import { withKnobs } from '@storybook/addon-knobs';
import ChipList from './chip-list.component';

export default {
  title: 'Core Components/ChipList',
  component: ChipList,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof ChipList>> = (args) => (
  <ThemeProvider>
    <ChipList {...args} />
  </ThemeProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  general: [{ name: 'test', id: '1' }],
  additional: [{ name: 'test2', id: '2' }],
  label: 'Title',
  getMoreText: 'more',
  showLessText: 'less',
};
