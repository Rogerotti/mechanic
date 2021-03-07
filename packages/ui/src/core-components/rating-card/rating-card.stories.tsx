import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';
import userLogo from '@assets/trener1.png';
import { RatingCard } from '.';
import { IRatingCardProps } from './rating-card.types';

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
  id: 'test',
  header: 'Roger Skrzypczyk',
  image: userLogo,
  description:
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  date: new Date(),
  rating: 3.5,
};
