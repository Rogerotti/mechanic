import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IFooterProps } from './footer.types';
import { useStyles } from './footer.styles';
import { Box, Grid, Typography } from '@material-ui/core';

export const Footer: React.FC<IFooterProps> = ({ logo, linksInOneColumn = 3 }) => {
  const classes = useStyles();
  const companyName = '© Roger Software';
  const companyEmail = 'roger.skrzypczyk@gmail.com';
  const links = ['pricing', 'about us', 'testing', 'automotion', 'leave', 'monolit', 'lorem', 'atest', 'inventory'];
  const columnsLength = Math.ceil(links.length / linksInOneColumn);
  console.log(columnsLength);

  const columns = [...Array(columnsLength).keys()];

  return (
    <footer>
      <Box bgcolor="secondary.main" display="flex" alignItems="center" pt={4} pb={4} pl={4} pr={4}>
        <img className={classes.logo} src={logo} />

        <Box width="100%" justifyContent="center" display="flex">
          {columns.map((columnNumber) => {
            const linksToUse = links.slice(columnNumber * linksInOneColumn, (columnNumber + 1) * linksInOneColumn);
            return (
              <Box key={columnNumber} marginRight={8}>
                <Grid container direction="column" spacing={2}>
                  {linksToUse.map((link) => {
                    return (
                      <Grid key={link} item>
                        {link}
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box bgcolor="secondary.light" display="flex" alignItems="center">
        <Box ml={5}>
          <Typography variant="body2">{companyName}</Typography>
        </Box>

        <Box display="flex" marginLeft="auto" mr={4} alignItems="center" height={50}>
          <Typography variant="body2">{companyEmail}</Typography>
          <Box display="flex" ml={2}>
            <FacebookIcon className={classes.cursor} />
            <TwitterIcon className={classes.cursor} />
          </Box>
        </Box>
      </Box>
    </footer>
  );
};
