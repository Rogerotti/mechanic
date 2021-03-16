import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Map } from '.';
import { Box } from '@material-ui/core';

export default {
  title: 'Core Components/Map',
  component: Map,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Map>> = (args) => (
  <Box width="100%" height={200}>
    <Map {...args} />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {
  position: {
    x: 50.05304455463954,
    y: 19.984250240851726,
  },
  zoom: 15,
};
