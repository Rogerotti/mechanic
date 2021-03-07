import React from 'react';
import Box from '@material-ui/core/Box';

import { useStyles } from './comments-section.styles';
import { ICommentsSectionProps } from './comments-section.types';
import RatingCard from '@core-components/rating-card';

export const CommentsSection: React.FC<ICommentsSectionProps> = ({ comments }) => {
  const classes = useStyles();

  return (
    <Box>
      {comments.map((comment) => {
        return <RatingCard key={comment.id} {...comment} />;
      })}
    </Box>
  );
};

export default CommentsSection;
