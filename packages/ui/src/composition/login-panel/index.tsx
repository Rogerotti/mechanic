import React from 'react';
import Box from '@material-ui/core/Box';
import { ILoginPanelProps } from './login-panel.types';

export const LoginPanel: React.FC<ILoginPanelProps> = ({ username, password }) => {
  return (
    <Box>
      {username}
      {password}
    </Box>
  );
};
