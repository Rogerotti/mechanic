import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';

import { PresentationCard } from '.';
import { IPresentationCardProps } from './presentation-card.types';
import { trainer1, trainer2 } from '../../storybook/data/trainers';

export default {
  title: 'Composition/Presentation Card',
  component: PresentationCard,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof PresentationCard>> = ({ ...args }) => {
  return (
    <Box width={{ xs: 300, sm: 600 }}>
      <PresentationCard {...args} />
    </Box>
  );
};

export const Basic: { args: IPresentationCardProps } = Template.bind({});

Basic.args = {
  ...trainer1,
};

export const Extend: { args: IPresentationCardProps } = Template.bind({});

Extend.args = {
  ...trainer2,
};
