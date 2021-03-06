import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IFooterProps } from './footer.types';
import { useStyles } from './footer.styles';
import { Box, Grid, Typography, Link } from '@material-ui/core';

export const Footer: React.FC<IFooterProps> = ({ classes, logo, linksInOneColumn = 3 }) => {
  const footerClasses = useStyles();
  const companyName = '© Roger Software';
  const companyEmail = 'roger.skrzypczyk@gmail.com';
  const links = ['pricing', 'about us', 'testing', 'automotion', 'leave', 'monolit', 'lorem', 'atest', 'inventory'];
  const columnsLength = Math.ceil(links.length / linksInOneColumn);

  const columns = [...Array(columnsLength).keys()];

  return (
    <footer className={classes?.footer}>
      <Box bgcolor="primary.main" display="flex" alignItems="center" pt={4} pb={4} pl={4} pr={4}>
        <img className={footerClasses.logo} src={logo} />

        <Box width="100%" justifyContent="center" display="flex">
          {columns.map((columnNumber) => {
            const linksToUse = links.slice(columnNumber * linksInOneColumn, (columnNumber + 1) * linksInOneColumn);
            return (
              <Box key={columnNumber} marginRight={8}>
                <Grid container direction="column" spacing={2}>
                  {linksToUse.map((link) => {
                    return (
                      <Grid key={link} item>
                        <Link className={footerClasses.cursor} color="textPrimary">
                          {' '}
                          {link}
                        </Link>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box bgcolor="primary.dark" display="flex" alignItems="center">
        <Box ml={5}>
          <Typography variant="body2">{companyName}</Typography>
        </Box>

        <Box display="flex" marginLeft="auto" mr={4} alignItems="center" height={50}>
          <Typography variant="body2">{companyEmail}</Typography>
          <Box display="flex" ml={2}>
            <FacebookIcon className={footerClasses.cursor} />
            <TwitterIcon className={footerClasses.cursor} />
          </Box>
        </Box>
      </Box>
    </footer>
  );
};
