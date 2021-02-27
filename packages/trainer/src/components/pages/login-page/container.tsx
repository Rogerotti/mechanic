import React, { useState } from 'react';
import { LoginPage } from '@ui/pages/login-page';

import Layout from '../../core/layout';

export const LoginPageContainer: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout>
      <LoginPage
        loginLabel="login"
        loginPlaceholderLabel="Wprowadź nazwę użytkownika"
        passwordPlaceholderLabel="Wprowadź hasło"
        signinLabel="Zaloguj"
        signupLabel="Zarejestruj"
        separatorLabel="Lub"
        username={username}
        password={password}
        onUsernameChange={(value) => setUsername(value)}
        onPasswordChange={(value) => setPassword(value)}
      />
    </Layout>
  );
};

export default LoginPageContainer;
