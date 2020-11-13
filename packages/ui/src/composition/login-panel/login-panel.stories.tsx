import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import ThemeProvider from '../../theme';
import { withKnobs } from "@storybook/addon-knobs";
import { LoginPanel } from '.';

export default {
  title: 'Composition/Login Panel',
  component: LoginPanel,
  decorators: [withKnobs],
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
  <ThemeProvider>
  <LoginPanel {...args} />
  </ThemeProvider>

);

export const Basic = Template.bind({});
Basic.args = {
  username: 'username',
  password: 'password',
};