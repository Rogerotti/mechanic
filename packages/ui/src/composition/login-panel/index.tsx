import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import { ILoginPanelProps } from './login-panel.types';
import { InputWithIcon } from '../../core-components/input-with-icon';
import { IconEnum } from '../../utils/icons/icons.types';
import { useStyles } from './login-panel.styles';

import Divider from '../../core-components/divider';

export const LoginPanel: React.FC<ILoginPanelProps> = ({
  username,
  password,

  onUsernameChange,
  onPasswordChange,
  onLoginClick,
  onSingupClick,

  loginPlaceholderLabel,
  passwordPlaceholderLabel,
  loginLabel,
  signinLabel,
  signupLabel,
  separatorLabel,
}) => {
  const classes = useStyles();

  const onUserChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onUsernameChange?.(event.target.value);
  };

  const onPassChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onPasswordChange?.(event.target.value);
  };

  return (
    <Box padding={1} width="100%">
      <Box textAlign="center" mb={3}>
        <Typography variant="h4">{signinLabel}</Typography>
      </Box>
      <Box display="block">
        <InputWithIcon
          inputClassName={classes.input}
          className={classes.inputContainer}
          icon={IconEnum.User}
          placeholder={loginPlaceholderLabel}
          onChange={onUserChange}
          value={username}
        />
        <InputWithIcon
          inputClassName={classes.input}
          className={classes.inputContainer}
          icon={IconEnum.Lock}
          placeholder={passwordPlaceholderLabel}
          onChange={onPassChange}
          value={password}
          isPassword
        />
      </Box>

      <Box width="100%" mt={1}>
        <Button onClick={onLoginClick} color="primary" variant="contained" className={classes.button}>
          <Typography>{loginLabel}</Typography>
        </Button>
      </Box>
      <Box width="100%" mt={3}>
        <Divider orientation={'horizontal'} text={separatorLabel} />
      </Box>

      <Box color="white" textAlign="center" mt={1}>
        <Button onClick={onSingupClick} variant="text">
          {signupLabel}
        </Button>
      </Box>
    </Box>
  );
};
