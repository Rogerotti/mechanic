import { useQuery } from '@apollo/client';
import { ICommentDTO } from '@redux/types/search';
import { GET_COMMENTS } from '.';
import { IGeCommentsQuery, IGetCommentsQueryParams } from './types';

export const useComments = (
  trainerId: string,
): {
  loading: boolean;
  comments: ICommentDTO[];
} => {
  const { data, loading } = useQuery<IGeCommentsQuery, IGetCommentsQueryParams>(GET_COMMENTS, {
    variables: { trainerId: trainerId },
  });

  const comments = data?.comments;

  const commentsData = comments
    ? comments.map((c) => {
        return {
          id: c.id,
          image: c.userImage,
          header: `${c.userFirstName} ${c.userLastName}`,
          description: c.description,
          date: new Date(Number(c.date)),
          rating: c.rating,
        };
      })
    : [];

  return {
    comments: commentsData,
    loading,
  };
};
