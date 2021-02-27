import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from './link.component';
import { LinkEnum } from '../../types/core';

export default {
  title: 'Core Components/Link',
  component: Link,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Link>> = (args) => (
  <Router>
    <Link {...args} color="textSecondary" />
  </Router>
);

export const Basic = Template.bind({});
Basic.args = {
  text: 'test',
  linkType: LinkEnum.External,
};
