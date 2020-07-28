import React from 'react';
// import logo from '../../../assets/logo.svg'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

interface HeaderProps {
  title: string;
}

const useStyles = makeStyles({
  text: {
    fontSize: 32,
    textAlign: 'center',
  },
  logo: {
    width: '50px',
  },
});

const Header: React.FC<HeaderProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <Box m={['auto']} display="flex">
          {/* <img className={classes.logo} src={logo} /> */}
          <Typography color="primary" className={classes.text} variant="h2">
            {title}
          </Typography>
        </Box>

        <Button>Mechanik</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
