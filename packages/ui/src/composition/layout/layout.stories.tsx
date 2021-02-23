import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import headerLogo from '../../../public/logo.svg';
import { Layout } from '.';
import { Box } from '@material-ui/core';

export default {
  title: 'Composition/Layout',
  component: Layout,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Layout>> = ({ ...args }) => {
  return (
    <Layout {...args}>
      <Box display="flex" bgcolor="primary.light" height={500} justifyContent="center" alignItems="center">
        Test children element
      </Box>
    </Layout>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  headerLogo: headerLogo,
  footerLogo: headerLogo,
  headerLinks: [
    {
      text: 'O nas',
      href: 'about',
    },
    {
      text: 'Cennik',
      href: 'price',
    },
  ],
  headerRightMenuLinks: [
    {
      text: 'Zaloguj',
      href: 'about',
    },
    {
      text: 'Zarejestruj',
      href: 'price',
    },
  ],
  headerUsername: 'Roger',
};
