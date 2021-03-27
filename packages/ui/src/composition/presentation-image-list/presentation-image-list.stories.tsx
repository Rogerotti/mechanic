import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { PresentationImageList } from '.';
import { Box } from '@material-ui/core';

import { mainCategoriesList } from '../../storybook/data/sections/mainCategories';

export default {
  title: 'Composition/Presentation Image List',
  component: PresentationImageList,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof PresentationImageList>> = ({ ...args }) => {
  return (
    <Box bgcolor="primary.main">
      <PresentationImageList {...args} />
    </Box>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  title: 'Kategorie ogólne',
  items: mainCategoriesList,
};
