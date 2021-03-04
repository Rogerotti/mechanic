import React, { ComponentProps, useEffect, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';

import ThemeProvider from '../../theme';
import { RegisterPanel } from '.';

export default {
  title: 'Composition/Register Panel',
  component: RegisterPanel,
  decorators: [withKnobs],
  argTypes: {
    onRegisterClick: {
      action: 'sing up clicked',
      table: {
        disable: true,
      },
    },
    onEmailChange: {
      action: 'username changed',
      table: {
        disable: true,
      },
    },
    onPasswordChange: {
      action: 'password changed',
      table: {
        disable: true,
      },
    },
  },
};

const Template: Story<ComponentProps<typeof RegisterPanel>> = ({ email, password, ...args }) => {
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  useEffect(() => {
    setCurrentEmail(email);
  }, [email]);

  useEffect(() => {
    setCurrentPassword(password);
  }, [password]);

  const onEmailChange = (value: string) => {
    args.onEmailChange?.(value);
    setCurrentEmail(value);
  };
  const onPasswordChange = (value: string) => {
    args.onPasswordChange?.(value);
    setCurrentPassword(value);
  };

  return (
    <ThemeProvider>
      <Box margin="auto" width={{ xs: '100%', sm: '50%' }}>
        <RegisterPanel
          {...args}
          email={currentEmail}
          password={currentPassword}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          registerLabel="Zarejestruj"
          registerPlaceholderLabel="E-mail"
          passwordPlaceholderLabel="Hasło"
        />
      </Box>
    </ThemeProvider>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  email: '',
  password: '',
};
