import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';

import { Rating } from '.';

export default {
  title: 'Core Components/Rating',
  component: Rating,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Rating>> = ({ ...args }) => {
  return (
    <Box width={{ xs: 300, sm: 600 }} bgcolor="black">
      <Rating {...args} />
    </Box>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  value: 3.5,
  numberOfRatings: 114,
};
