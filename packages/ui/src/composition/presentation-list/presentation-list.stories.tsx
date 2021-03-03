import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { PresentationList } from '.';
import { Box } from '@material-ui/core';
import { trainer1, trainer2 } from '../../storybook/data/trainers';

export default {
  title: 'Composition/Presentation List',
  component: PresentationList,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof PresentationList>> = ({ ...args }) => {
  return (
    <Box width={{ xs: 300, sm: 600 }}>
      <PresentationList {...args} />
    </Box>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  items: [trainer1, trainer2],
};
