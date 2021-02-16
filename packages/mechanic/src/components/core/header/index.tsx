import React from 'react';
import logo from '../../../public/logo3.png';
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
  root: {
    background: 'transparent',
    boxShadow: 'none',
  },
  text: {
    fontSize: 32,
    textAlign: 'center',
  },
  logo: {
    width: '50px',
  },
  logo2: {
    width: '24px',
    height: '24px',
    color: '#f6f8fa',
    marginLeft: 40,
  },
  test2: {
    fontWeight: 'bold',
  },
  test: {
    backgroundColor: '#ee7f79',
    color: 'white',
  },
});

const Header: React.FC<HeaderProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <AppBar
      classes={{
        root: classes.root,
      }}
      position="static"
    >
      <Toolbar>
        <img className={classes.logo2} src={logo} />
        <Typography className={classes.test2} color="textPrimary" variant="body1" component="h2">
          name
        </Typography>
        <Box m={['auto']} display="flex">
          {/* <img className={classes.logo} src={logo} /> */}
        </Box>

        <Button className={classes.test} variant="contained">
          Mechanik
        </Button>
        {/* <Button variant="contained" color="primary">
          Mechanik
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
