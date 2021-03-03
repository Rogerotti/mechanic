import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { TrainerList } from '.';
import { Box } from '@material-ui/core';
import { trainer1, trainer2 } from '../../storybook/data/trainers';

export default {
  title: 'Composition/Trainer List',
  component: TrainerList,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof TrainerList>> = ({ ...args }) => {
  return (
    <Box width={{ xs: 300, sm: 600 }}>
      <TrainerList {...args} />
    </Box>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  trainers: [trainer1, trainer2],
};
