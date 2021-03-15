import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';
import { StarDiagram } from '.';
import { rating } from '../../storybook/data/comments';

export default {
  title: 'Composition/Star diagram',
  component: StarDiagram,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof StarDiagram>> = ({ ...args }) => {
  return (
    <Box width={{ xs: 300, sm: 600 }} bgcolor="primary.main">
      <StarDiagram {...args} />
    </Box>
  );
};

export const Basic: { args: ComponentProps<typeof StarDiagram> } = Template.bind({});

Basic.args = {
  ...rating,
};
