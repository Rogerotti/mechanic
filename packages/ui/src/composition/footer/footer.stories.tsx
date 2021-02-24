import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import logoImage from '@assets/logo.svg';
import { Footer } from '.';

export default {
  title: 'Composition/Footer',
  component: Footer,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Footer>> = ({ ...args }) => {
  return <Footer {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  logo: logoImage,
};
