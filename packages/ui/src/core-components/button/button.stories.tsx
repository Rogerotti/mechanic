import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Button } from '.';

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
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
  },
};

const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Text',
  size: 'medium',
  color: 'primary',
  variant: 'contained',
  rounded: false,
};

export const Secondary = Template.bind({});

Secondary.args = {
  text: 'Text',
  size: 'medium',
  color: 'secondary',
  variant: 'contained',
  rounded: false,
};
