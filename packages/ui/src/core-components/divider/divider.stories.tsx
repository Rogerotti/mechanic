import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import ThemeProvider from '../../theme';
import { withKnobs } from '@storybook/addon-knobs';
import { Divider } from './divider.component';

export default {
  title: 'Core Components/Divider',
  component: Divider,
  decorators: [withKnobs],
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    orientation: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal'],
      },
    },
  },
};

const Template: Story<ComponentProps<typeof Divider>> = (args) => (
  <ThemeProvider>
    <Divider {...args} />
  </ThemeProvider>
);

export const Basic = Template.bind({});
Basic.args = {};
