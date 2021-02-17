import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import logoImage from '../../../public/logo.svg';
import { Header } from '.';

export default {
  title: 'Composition/Header',
  component: Header,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Header>> = ({ ...args }) => {
  return <Header {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  logo: logoImage,
  links: [
    {
      text: 'O nas',
      href: 'about',
    },
    {
      text: 'Cennik',
      href: 'price',
    },
  ],
  rightMenuLinks: [
    {
      text: 'Zaloguj',
      href: 'about',
    },
    {
      text: 'Zarejestruj',
      href: 'price',
    },
  ],
};
