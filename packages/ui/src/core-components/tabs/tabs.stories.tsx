import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Tabs } from '.';
import { tabs } from '../../storybook/data/tabs';

export default {
  title: 'Core Components/Tabs',
  component: Tabs,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Tabs>> = ({ ...args }) => {
  return <Tabs {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  items: tabs,
};
