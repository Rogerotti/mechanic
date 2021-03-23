import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Loader } from './loader.component';
import { Box } from '@material-ui/core';

export default {
  title: 'Core Components/Loader',
  component: Loader,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Loader>> = (args) => (
  <Box width={300} bgcolor="black">
    <Loader {...args} />
  </Box>
);

export const Basic = Template.bind({});

Basic.args = {};
