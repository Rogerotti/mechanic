import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Dropdown } from '.';

export default {
  title: 'Core Components/Dropdown',
  component: Dropdown,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Dropdown>> = ({ ...args }) => {
  return <Dropdown {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  label: 'City',
  icon: <LocationOnIcon />,
  items: [
    {
      id: 'KRK',
      value: 'Kraków',
    },
    {
      id: 'WAR',
      value: 'Warszawa',
    },
  ],
};
