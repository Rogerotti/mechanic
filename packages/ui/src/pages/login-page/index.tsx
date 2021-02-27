import React from 'react';

import Box from '@material-ui/core/Box';

import { ILoginPageProps } from './login-page.types';
import { LoginPanel } from '../../composition/login-panel';

export const LoginPage: React.FC<ILoginPageProps> = ({ ...props }) => {
  return (
    <Box bgcolor="primary.main" height="500px" display="flex" justifyContent="center" alignItems="center">
      <Box borderRadius={12} boxShadow={22} borderColor="primary.main" border="1px solid" padding={2}>
        <LoginPanel {...props} />
      </Box>
    </Box>
  );
};
