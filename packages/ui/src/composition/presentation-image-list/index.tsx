import React from 'react';
import { Box, Theme, Typography, useMediaQuery } from '@material-ui/core';
import { useStyles } from './presentation-image-list.styles';
import { IPresentationImageListProps, IPresentationItem } from './presentation-image-list.types';

export const PresentationImageList: React.FC<IPresentationImageListProps> = ({ title, items, onClick }) => {
  const classes = useStyles();

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'));

  if (!items) {
    throw Error('PresentationImageList - items are null');
  }

  const rowsArray: IPresentationItem[][] = [];
  const chunk = isMobile ? 2 : 4;
  let i, j;

  for (i = 0, j = items.length; i < j; i += chunk) {
    rowsArray.push(items.slice(i, i + chunk));
  }

  return (
    <Box>
      <Box textAlign="center" pt={6} pb={3}>
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
      </Box>

      {rowsArray?.map((row, index) => (
        <Box key={index} display="flex" justifyContent="space-evenly" pb={2} pt={2}>
          {row.map((item) => (
            <Box
              className={classes.item}
              onClick={() => onClick?.(item.id)}
              key={item.id}
              display="grid"
              justifyItems="center"
            >
              <Box
                width={100}
                height={100}
                borderRadius={45}
                bgcolor={item.bgcolor}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img className={classes.test} src={item.image} />
              </Box>
              <Typography className={classes.itemTitle}>{item.title}</Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};
