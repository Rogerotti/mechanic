import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';

import { Modal } from '.';

export default {
  title: 'Core Components/Modal',
  component: Modal,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof Modal>> = ({ ...args }) => {
  return (
    <Box width={{ xs: 300, sm: 600 }}>
      <Modal {...args}>
        <Box width={600} height={500} p={3}>
          Testesteste
        </Box>
      </Modal>
    </Box>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  title: 'User modal window',
  open: true,
};
