import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { BrowserRouter as Router } from 'react-router-dom';
import headerLogo from '@assets/logo.svg';
import { Layout } from '.';
import { Box } from '@material-ui/core';
import { links, rightHeaderLinks } from '../../storybook/data/header';

export default {
  title: 'Composition/Layout',
  component: Layout,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Layout>> = ({ ...args }) => {
  return (
    <Router>
      <Layout {...args}>
        <Box display="flex" bgcolor="primary.light" height={500} justifyContent="center" alignItems="center">
          Test children element
        </Box>
      </Layout>
    </Router>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  headerLogo: headerLogo,
  footerLogo: headerLogo,
  headerLinks: links,
  headerRightMenuLinks: rightHeaderLinks,
  headerUsername: 'Roger',
};
