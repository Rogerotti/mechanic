import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';

import { ContactUserSection } from '.';
import { Box } from '@material-ui/core';

export default {
  title: 'Composition/Contact user section',
  component: ContactUserSection,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof ContactUserSection>> = ({ ...args }) => {
  return (
    <Box bgcolor="primary.main">
      <ContactUserSection {...args} />
    </Box>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  phoneNumber: '+48 886 585 135',
  showPhoneNumberText: 'Wyświetl telefon',
  email: 'roger.skrzypczyk@gmail.com',
  showEmailText: 'Wyświetl e-mail',
  accountCreationDate: new Date(),
};
