import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';
import { CommentsSection } from '.';
import { commentsSectionData } from '../../storybook/data/sections/commentsSection';

export default {
  title: 'Composition/Comments section',
  component: CommentsSection,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof CommentsSection>> = ({ ...args }) => {
  return (
    <Box width={{ xs: 300, sm: 600 }} bgcolor="primary.main">
      <CommentsSection {...args} />
    </Box>
  );
};

export const Basic: { args: ComponentProps<typeof CommentsSection> } = Template.bind({});

Basic.args = {
  ...commentsSectionData,
};
