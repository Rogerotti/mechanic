import React from 'react';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import { FOOTER_HEIGHT } from './constants';

const useStyles = makeStyles({
  footer: {
    height: FOOTER_HEIGHT,
  },
  socialMediaIcon: {
    width: '100px',
    height: '100px',
  },
});

const Footer: React.FC<unknown> = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      {/* <div>
        <FacebookIcon className={classes.socialMediaIcon} color="primary" />
        <TwitterIcon className={classes.socialMediaIcon} />
      </div> */}
    </footer>
  );
};

export default Footer;
