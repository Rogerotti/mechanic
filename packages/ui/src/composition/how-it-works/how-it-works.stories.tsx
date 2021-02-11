import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';

import { HowItWorks } from '.';

export default {
  title: 'Composition/How it works',
  component: HowItWorks,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof HowItWorks>> = ({ ...args }) => {
  return <HowItWorks {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  header: 'How it works',
};
