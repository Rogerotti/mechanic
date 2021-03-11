import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Scheduler } from '.';
import { Box } from '@material-ui/core';
import { getPreviousMonday, getNextSunday, setMidnight, addHours } from './scheduler.utils';

export default {
  title: 'Core Components/Scheduler',
  component: Scheduler,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Scheduler>> = ({ ...args }) => {
  return (
    <Box bgcolor="primary.main" p={1}>
      <Scheduler {...args} />
    </Box>
  );
};

export const Basic: { args: ComponentProps<typeof Scheduler> } = Template.bind({});

const previousMonday = getPreviousMonday(setMidnight(new Date()));
const nextSunday = getNextSunday(setMidnight(new Date()));

Basic.args = {
  startHour: 6,
  endHour: 22,

  events: [
    {
      starDate: addHours(previousMonday, 12),
      endDate: addHours(previousMonday, 13),
      description: 'first',
    },
    {
      starDate: addHours(nextSunday, 12),
      endDate: addHours(nextSunday, 13),
      description: 'second',
    },
    {
      starDate: previousMonday,
      endDate: addHours(previousMonday, 24),
      description: 'you wont see it',
    },
    {
      starDate: addHours(previousMonday, 36),
      endDate: addHours(previousMonday, 38),
      description: 'should be double hours Rly Rly long description here we go hahaha lets see wgat gaoppend ok bro?',
    },
    {
      starDate: addHours(previousMonday, 60),
      endDate: addHours(previousMonday, 63),
      description: 'should be tripple hours',
    },
    {
      starDate: addHours(previousMonday, 82),
      endDate: addHours(previousMonday, 84),
      description: 'should be double double 1',
    },
    {
      starDate: addHours(previousMonday, 85),
      endDate: addHours(previousMonday, 87),
      description: 'should be double double 2',
    },
  ],
};
