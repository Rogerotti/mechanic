import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Scheduler } from '.';
import { Box } from '@material-ui/core';

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

Basic.args = {
  startHour: 6,
  endHour: 22,
};
