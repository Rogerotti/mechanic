import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Box } from '@material-ui/core';
import { PresentationCard } from '../presentation-card';
import { useStyles } from './presentation-list.styles';
import { IPresentationListProps } from './presentation-list.types';

export const PresentationList: React.FC<IPresentationListProps> = ({ items }) => {
  const classes = useStyles();

  return (
    <Box width="100%">
      {items.map((item) => (
        <Box key={item.id} mb={2} boxShadow={10}>
          <PresentationCard {...item} />
        </Box>
      ))}
      <Pagination
        classes={{
          ul: classes.test,
        }}
        count={30}
        size="large"
        color="secondary"
        variant="text"
      />
    </Box>
  );
};
