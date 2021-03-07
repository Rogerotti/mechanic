import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';
import userLogo from '@assets/trener1.png';
import { RatingCard } from '.';
import { IRatingCardProps } from './rating-card.types';
import { comments } from '../../storybook/data/comments';

export default {
  title: 'Core Components/Rating Card',
  component: RatingCard,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof RatingCard>> = ({ ...args }) => {
  return (
    <Box width={{ xs: 300, sm: 600 }} bgcolor="primary.main">
      <RatingCard {...args} />
    </Box>
  );
};

export const Basic: { args: IRatingCardProps } = Template.bind({});

Basic.args = {
  ...comments[0],
};
