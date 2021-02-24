import React from 'react';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Hidden, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { Button } from '@core-components/button';

import { IHeaderProps } from './header.types';
import { useStyles } from './header.styles';

export const Header: React.FC<IHeaderProps> = ({ username, logo, links, rightMenuLinks }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClickHamburgerMenu = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickRightMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleCloseHamburgerMenu = () => {
    setAnchorEl(null);
  };

  const handleCloseRightMenu = () => {
    setAnchorEl2(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Hidden mdUp>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon onClick={handleClickHamburgerMenu} />
            <Menu
              id="hamburger-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleCloseHamburgerMenu}
            >
              {links?.map((link) => (
                <MenuItem key={link.href} onClick={handleCloseHamburgerMenu}>
                  {link.text}
                </MenuItem>
              ))}
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

        <Box display="flex" marginLeft="auto" alignItems="center">
          <Hidden implementation="css" xsDown>
            <Box textAlign="center" maxWidth={150}>
              {username && <Typography>Witaj, {username}</Typography>}
            </Box>
          </Hidden>

          <Box ml={2}>
            <div onClick={handleClickRightMenu}>
              <AccountCircleIcon className={classes.userIcon} />
            </div>
          </Box>

          <Menu id="simple-menu" anchorEl={anchorEl2} open={Boolean(anchorEl2)} onClose={handleCloseRightMenu}>
            <Box bgcolor="primary.main">
              {rightMenuLinks.map((link) => (
                <MenuItem key={link.href} onClick={handleCloseRightMenu}>
                  {link.text}
                </MenuItem>
              ))}
            </Box>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
