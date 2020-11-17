import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { ILoginPanelProps } from './login-panel.types';
import { InputWithIcon } from '../../core-components/input-with-icon';
import { IconEnum } from '../../utils/icons/icons.types';
import { useStyles } from './login-panel.styles'
import { Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
export const LoginPanel: React.FC<ILoginPanelProps> = ({ username, password }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} padding={1} width="50%">
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" >Sign in</Typography>
      </Box>
      <Box display="block">
        <InputWithIcon inputClassName={classes.input} className={classes.inputContainer} icon={IconEnum.User} placeholder="login" />
        <InputWithIcon inputClassName={classes.input} className={classes.inputContainer} icon={IconEnum.Lock} placeholder="password" />
      </Box>
     
    <Box width="100%" mt={1}>
      <Button color="primary" variant="contained" className={classes.button} >Log in</Button>
    </Box>

    <Box mt={3} textAlign="center">
      <Typography variant="body1" >Or Sing Up Using</Typography>
    </Box>
   
    <Box mt={1} textAlign="center">
      <FacebookIcon fontSize="large" className={classes.facebookIcon} />
      <TwitterIcon fontSize="large" className={classes.twitterIcon} />
    </Box>

    <Box mt={1} textAlign="center">
      <Typography variant="body1" >Or</Typography>
    </Box>

    <Box textAlign="center" mt={1}>
      <Button color="primary" variant="text" >Sing in</Button>
    </Box>
    </Box>
  );
};
