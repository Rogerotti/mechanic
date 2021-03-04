import React from 'react';

import Box from '@material-ui/core/Box';

import { IRegisterPageProps } from './register-page.types';
import { RegisterPanel } from '../../composition/register-panel';

export const RegisterPage: React.FC<IRegisterPageProps> = ({ ...props }) => {
  return (
    <Box bgcolor="primary.main" height="500px" display="flex" justifyContent="center" alignItems="center">
      <Box borderRadius={12} boxShadow={22} borderColor="primary.main" border="1px solid" padding={2}>
        <RegisterPanel {...props} />
      </Box>
    </Box>
  );
};
