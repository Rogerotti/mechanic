import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LoginPanel } from '.';

export default {
  title: 'Composition/Login Panel',
  component: LoginPanel,
  argTypes: {
    username: {
      control: {
        type: 'text',
      },
    },
    password: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template: Story<ComponentProps<typeof LoginPanel>> = (args) => (
  <LoginPanel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  username: 'username',
  password: 'password',
};