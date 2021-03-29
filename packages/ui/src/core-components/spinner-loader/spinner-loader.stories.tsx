import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';
import { SpinnerLoader } from '.';
import { ISpinnerLoaderProps } from './spinner-loader.types';

export default {
  title: 'Core Components/Spinner loader',
  component: SpinnerLoader,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof SpinnerLoader>> = ({ ...args }) => {
  return (
    <Box width={{ xs: 300, sm: 600 }} bgcolor="primary.main">
      <SpinnerLoader {...args} />
    </Box>
  );
};

export const Basic: { args: ISpinnerLoaderProps } = Template.bind({});

Basic.args = {
  scale: 1.0,
};
