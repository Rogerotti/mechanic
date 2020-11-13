import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Button } from '.';

export default {
  title: 'Core Components/Button',
  component: Button,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  text: 'Button'
};