import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { BrowserRouter as Router } from 'react-router-dom';
import logoImage from '@assets/logo.svg';
import { Header } from '.';
import { links, rightHeaderLinks } from '../../storybook/data/header';

export default {
  title: 'Composition/Header',
  component: Header,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Header>> = ({ ...args }) => {
  return (
    <Router>
      <Header {...args} />
    </Router>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  logo: logoImage,
  links: links,
  rightMenuLinks: rightHeaderLinks,
};
