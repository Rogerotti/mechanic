import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Table } from '.';

export default {
  title: 'Core Components/Table',
  component: Table,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Table>> = ({ ...args }) => {
  return <Table {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {};
