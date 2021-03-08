import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Scheduler } from '.';

export default {
  title: 'Core Components/Scheduler',
  component: Scheduler,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Scheduler>> = ({ ...args }) => {
  return <Scheduler {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  name: 'name',
};
