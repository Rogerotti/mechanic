import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Box } from '@material-ui/core';
import { PresentationCard } from '../presentation-card';
import { useStyles } from './presentation-list.styles';
import { IPresentationListProps } from './presentation-list.types';

export const PresentationList: React.FC<IPresentationListProps> = ({ items, numberOfPages, page, onPageChange }) => {
  const classes = useStyles();

  const onChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange?.(page - 1);
  };

  return (
    <Box width="100%">
      {items.map((item) => (
        <Box key={item.id} mb={2} border="1px solid white" borderRadius={10}>
          <PresentationCard {...item} />
        </Box>
      ))}
      <Pagination
        classes={{
          ul: classes.ul,
        }}
        count={numberOfPages}
        onChange={onChange}
        page={page + 1}
        size="large"
        color="secondary"
        variant="text"
      />
    </Box>
  );
};
