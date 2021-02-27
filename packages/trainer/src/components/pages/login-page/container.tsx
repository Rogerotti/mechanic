import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { LoginPage } from '@ui/pages/login-page';
import { loginRequest } from '@redux/actions/authentication';

import Layout from '../../core/layout';

export const LoginPageContainer: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const onLoginClick = () => {
    dispatch(loginRequest(username, password));
    history.push('/');
  };

  const onSingupClick = () => {
    history.push('/register');
  };

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
        onLoginClick={onLoginClick}
        onSingupClick={onSingupClick}
      />
    </Layout>
  );
};

export default LoginPageContainer;
