import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from "@storybook/addon-knobs";
import { Button } from '.';
import ThemeProvider from '../../theme';

export default {
  title: 'Core Components/Button',
  component: Button,
  decorators: [withKnobs],
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <ThemeProvider>
 <Button {...args} />
  </ThemeProvider>
 
);

export const Basic = Template.bind({});
Basic.args = {
  text: 'Button'
};