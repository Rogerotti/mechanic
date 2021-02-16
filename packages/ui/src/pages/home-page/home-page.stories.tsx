import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import logoImage from '../../../public/logo3.svg';
import search from '../../../public/search.svg';
import rate from '../../../public/rate.svg';
import password from '../../../public/pass.svg';
import { HomePage } from '.';

export default {
  title: 'Pages/Home Page',
  component: HomePage,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof HomePage>> = ({ ...args }) => {
  return <HomePage {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  logo: logoImage,
  searchHeader: 'Chcesz lepszych efektów? ',
  searchSubheader: 'Znajdź lepszego trenera!',
  howItWorksHeader: 'Jak to dziala?',
  steps: [
    {
      number: 1,
      header: 'header1',
      subHeader: 'subheader1',
      icon: search,
    },
    {
      number: 2,
      header: 'header2',
      subHeader: 'subheader2',
      icon: rate,
    },
    {
      number: 3,
      header: 'header3',
      subHeader: 'subheader3',
      icon: password,
    },
  ],
  loginText: 'zaloguj',
  registerText: 'zarejestruj',
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
};
