import React, { ComponentProps, useState } from 'react';

import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';

import { RegisterPage } from '.';
import { IRegisterPageProps } from './register-page.types';
import { LayoutForStories } from '../../storybook/layout';

export default {
  title: 'Pages/Register Page',
  component: RegisterPage,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof RegisterPage>> = ({ ...args }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LayoutForStories>
      <RegisterPage
        {...args}
        email={email}
        password={password}
        onEmailChange={(value) => setEmail(value)}
        onPasswordChange={(value) => setPassword(value)}
      />
    </LayoutForStories>
  );
};

export const Basic: { args: IRegisterPageProps } = Template.bind({});

Basic.args = {
  email: '',
  password: '',

  registerPlaceholderLabel: 'Wprowadź e-mail',
  passwordPlaceholderLabel: 'Wprowadź hasło',
  registerLabel: 'Zarejestruj',
};
