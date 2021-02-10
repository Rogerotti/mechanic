import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';
import januszImage from '../../assets/logo.svg';
import { Header } from '.';

export default {
  title: 'Composition/Header',
  component: Header,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Header>> = ({ ...args }) => {
  return (
    <Header
      {...args}
      logo={januszImage}
      links={[
        {
          text: 'Pricing',
          href: 'price',
        },
        {
          text: 'About us',
          href: 'about-us',
        },
        {
          text: 'Contact',
          href: 'contact',
        },
      ]}
    />
  );
};

export const Basic = Template.bind({});

Basic.args = {};
