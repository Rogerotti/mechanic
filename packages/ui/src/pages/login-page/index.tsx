import React from 'react';

import Box from '@material-ui/core/Box';

import { ILoginPageProps } from './login-page.types';
import { LoginPanel } from '../../composition/login-panel';

export const LoginPage: React.FC<ILoginPageProps> = ({ ...props }) => {
  return (
    <Box bgcolor="primary.main" height="500px" display="flex" justifyContent="center" alignItems="center">
      <Box>
        <LoginPanel {...props} />
      </Box>
    </Box>
  );
};
