import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import ThemeProvider from '../../theme';
import { withKnobs } from '@storybook/addon-knobs';
import { InputWithIcon } from '.';
import { IconEnum } from '../../utils/icons/icons.types';

export default {
  title: 'Core Components/Input with icon',
  component: InputWithIcon,
  decorators: [withKnobs],
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.values(IconEnum).filter((x) => typeof x === 'string'),
      },
    },
  },
};

const Template: Story<ComponentProps<typeof InputWithIcon>> = (args) => (
  <ThemeProvider>
    <InputWithIcon {...args} />
  </ThemeProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  icon: IconEnum.User,
  placeholder: 'login',
};
