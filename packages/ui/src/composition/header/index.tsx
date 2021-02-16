import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { IHeaderProps } from './header.types';
import { useStyles } from './header.styles';
import { AppBar, Hidden, Menu, MenuItem, Toolbar } from '@material-ui/core';
import { Button } from '../../core-components/button';

export const Header: React.FC<IHeaderProps> = ({ loginText, registerText, logo, links }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Hidden mdUp>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon onClick={handleClick} />
            <Menu id="hamburger-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </IconButton>
        </Hidden>

        <img className={classes.logo} src={logo} />

        <Hidden smDown>
          <Box display="flex" alignItems="center">
            {links?.map((link) => (
              <Box key={link.text} marginLeft={4}>
                <Button color="primary" rounded text={link.text} variant="text" />
              </Box>
            ))}
          </Box>
        </Hidden>

        <Box display="flex" marginLeft="auto">
          <Button color="primary" rounded text={loginText} variant="text" />
          <Button color="secondary" rounded text={registerText} variant="contained" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
