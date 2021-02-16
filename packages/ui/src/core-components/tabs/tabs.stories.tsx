import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Tabs } from '.';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

export default {
  title: 'Core Components/Tabs',
  component: Tabs,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Tabs>> = ({ ...args }) => {
  return <Tabs {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  items: [
    {
      id: '1',
      value: 'Uczeń',
      icon: <PermIdentityIcon />,
    },
    {
      id: '2',
      value: 'Trener',
      icon: <LocalAtmIcon />,
    },
  ],
};
