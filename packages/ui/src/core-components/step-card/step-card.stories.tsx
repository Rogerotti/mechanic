import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { StepCard } from '.';
import search from '../../../public/how-it-works/protege/search.svg';

export default {
  title: 'Core Components/Step Card',
  component: StepCard,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof StepCard>> = ({ ...args }) => {
  return <StepCard {...args} icon={search} />;
};

export const Basic = Template.bind({});

Basic.args = {
  header: 'Some Step header',
  subHeader: 'Some Sub header',
  number: 1,
};
