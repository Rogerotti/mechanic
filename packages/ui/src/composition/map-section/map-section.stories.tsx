import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { MapSection } from '.';
import { Box } from '@material-ui/core';
import { mapSectionData } from '../../storybook/data/sections/mapSection';

export default {
  title: 'Composition/Map section',
  component: MapSection,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof MapSection>> = ({ ...args }) => {
  return (
    <Box>
      <MapSection {...args} />
    </Box>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  ...mapSectionData,
};
