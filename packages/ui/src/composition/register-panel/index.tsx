import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import { InputWithIcon } from '@core-components/input-with-icon';

import { IRegisterPanelProps } from './register-panel.types';
import { useStyles } from './register-panel.styles';
import { IconEnum } from '../../utils/icons/icons.types';

export const RegisterPanel: React.FC<IRegisterPanelProps> = ({
  email,
  password,

  onEmailChange,
  onPasswordChange,

  registerLabel,
  registerPlaceholderLabel,
  passwordPlaceholderLabel,
  onRegisterClick,
}) => {
  const classes = useStyles();

  const onMailChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onEmailChange?.(event.target.value);
  };

  const onPassChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onPasswordChange?.(event.target.value);
  };

  return (
    <Box padding={1} width="100%" bgcolor="primary.main" borderRadius={10}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4">{registerLabel}</Typography>
      </Box>
      <Box display="block">
        <InputWithIcon
          inputClassName={classes.input}
          className={classes.inputContainer}
          icon={IconEnum.User}
          placeholder={registerPlaceholderLabel}
          onChange={onMailChange}
          value={email}
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
        <Button onClick={onRegisterClick} color="secondary" variant="contained" className={classes.button}>
          <Typography>{registerLabel}</Typography>
        </Button>
      </Box>
    </Box>
  );
};
