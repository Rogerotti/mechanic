import React from 'react';
import Box from '@material-ui/core/Box';
import { StarDiagram } from '../../composition/star-diagram';
import { ICommentsSectionProps } from './comments-section.types';
import RatingCard from '@core-components/rating-card';

export const CommentsSection: React.FC<ICommentsSectionProps> = ({ comments, diagram }) => {
  return (
    <>
      <StarDiagram {...diagram} />
      {comments.map((comment) => {
        return <RatingCard key={comment.id} {...comment} />;
      })}
    </>
  );
};

export default CommentsSection;
