import React, { ComponentProps, useState } from 'react';

import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';

import { LoginPage } from '.';
import { LayoutForStories } from '../../storybook/layout';

export default {
  title: 'Pages/Login Page',
  component: LoginPage,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof LoginPage>> = ({ ...args }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LayoutForStories>
      <LoginPage
        {...args}
        username={username}
        password={password}
        onUsernameChange={(value) => setUsername(value)}
        onPasswordChange={(value) => setPassword(value)}
      />
    </LayoutForStories>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  loginPlaceholderLabel: 'Wprowadź nazwę użytkownika',
  passwordPlaceholderLabel: 'Wprowadź hasło',
  signinLabel: 'Zaloguj',
  signupLabel: 'Zarejestruj',
  loginLabel: 'Login',
  separatorLabel: 'Lub',
};
