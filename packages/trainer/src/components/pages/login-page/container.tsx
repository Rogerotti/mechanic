import React, { useState } from 'react';
import { LoginPanel } from '@ui/composition/login-panel';

import Layout from '../../core/layout';
import { Box } from '@material-ui/core';

export const LoginPageContainer: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout>
      <Box bgcolor="primary.main" height="500px" display="flex" justifyContent="center" alignItems="center">
        <Box>
          <LoginPanel
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
        </Box>
      </Box>
    </Layout>
  );
};

export default LoginPageContainer;
