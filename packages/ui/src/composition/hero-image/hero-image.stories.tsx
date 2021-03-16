import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';
import { HeroImage } from '.';
import testImage from '@assets/test2.jpg';
import { heroData } from '../../storybook/data/hero';

export default {
  title: 'Composition/Hero image',
  component: HeroImage,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof HeroImage>> = ({ ...args }) => {
  return (
    <Box height={500} bgcolor="primary.main">
      <HeroImage {...args} />
    </Box>
  );
};

export const Basic: { args: ComponentProps<typeof HeroImage> } = Template.bind({});

Basic.args = {
  ...heroData,
};
