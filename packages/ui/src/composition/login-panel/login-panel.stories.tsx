import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import ThemeProvider from '../../theme';
import { withKnobs } from '@storybook/addon-knobs';
import { LoginPanel } from '.';
import { IconEnum } from '../../utils/icons/icons.types';

export default {
  title: 'Composition/Login Panel',
  component: LoginPanel,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof LoginPanel>> = (args) => (
  <ThemeProvider>
    <LoginPanel {...args} />
  </ThemeProvider>
);

export const Basic = Template.bind({});
Basic.args = {};
