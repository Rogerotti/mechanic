import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';

import { CircleWithNumber } from '.';

export default {
  title: 'Core Components/Circle with number',
  component: CircleWithNumber,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof CircleWithNumber>> = ({ ...args }) => {
  return <CircleWithNumber {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  number: 5,
};
