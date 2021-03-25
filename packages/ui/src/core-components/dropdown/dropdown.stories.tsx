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
  isLoading: false,
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

export const Extend = Template.bind({});

Extend.args = {
  label: 'Kategoria',
  groupByValue: true,
  // icon: <LocationOnIcon />,
  isLoading: false,
  items: [
    {
      id: 'mm',
      value: 'MMA',
      groupValue: 'Sporty walki',
    },
    {
      id: 'box',
      value: 'Boks',
      groupValue: 'Sporty walki',
    },
    {
      id: 's',
      value: 'Skoki',
      groupValue: 'Sporty zimowe',
    },
    {
      id: 'h',
      value: 'Hokej',
      groupValue: 'Sporty zimowe',
    },
  ],
};
