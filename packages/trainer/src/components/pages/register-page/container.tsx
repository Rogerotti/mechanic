import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RegisterPage } from '@ui/pages/register-page';
import { registerRequest } from '@redux/actions/authentication';

import Layout from '../../core/layout';

export const RegisterPageContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const onRegisterClick = () => {
    dispatch(registerRequest(email, password));
    history.push('/');
  };

  return (
    <Layout>
      <RegisterPage
        registerLabel="Zarejestruj"
        passwordPlaceholderLabel="Wprowadź hasło"
        registerPlaceholderLabel="Test"
        email={email}
        password={password}
        onEmailChange={(value) => setEmail(value)}
        onPasswordChange={(value) => setPassword(value)}
        onRegisterClick={onRegisterClick}
      />
    </Layout>
  );
};

export default RegisterPageContainer;
