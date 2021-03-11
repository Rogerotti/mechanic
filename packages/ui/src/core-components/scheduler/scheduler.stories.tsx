import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';

import { Scheduler } from '.';
import { events } from '../../storybook/data/scheduler';

export default {
  title: 'Core Components/Scheduler',
  component: Scheduler,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Scheduler>> = ({ ...args }) => {
  return <Scheduler {...args} />;
};

export const Basic: { args: ComponentProps<typeof Scheduler> } = Template.bind({});

Basic.args = {
  startHour: 6,
  endHour: 22,
  events: events,
};
