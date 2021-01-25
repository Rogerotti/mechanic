import React, { ComponentProps, useEffect, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';

import ThemeProvider from '../../theme';
import { LoginPanel } from '.';

export default {
  title: 'Composition/Login Panel',
  component: LoginPanel,
  decorators: [withKnobs],
  argTypes: {
    onSingupClick: {
      action: 'sing up clicked',
      table: {
        disable: true,
      },
    },
    onLoginClick: {
      action: 'login clicked',
      table: {
        disable: true,
      },
    },
    onUsernameChange: {
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

const Template: Story<ComponentProps<typeof LoginPanel>> = ({ username, password, ...args }) => {
  const [currentUsername, setCurrentUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  useEffect(() => {
    setCurrentUsername(username);
  }, [username]);

  useEffect(() => {
    setCurrentUsername(password);
  }, [password]);

  const onUsernameChange = (value: string) => {
    args.onUsernameChange?.(value);
    setCurrentUsername(value);
  };
  const onPasswordChange = (value: string) => {
    args.onPasswordChange?.(value);
    setCurrentPassword(value);
  };

  return (
    <ThemeProvider>
      <Box margin="auto" width={{ xs: '100%', sm: '50%' }}>
        <LoginPanel
          {...args}
          username={currentUsername}
          password={currentPassword}
          onUsernameChange={onUsernameChange}
          onPasswordChange={onPasswordChange}
          signinLabel="Sign in"
          signupLabel="Sign up"
          loginLabel="Login"
          separatorLabel="Or"
        />
      </Box>
    </ThemeProvider>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  username: '',
  password: '',
};
