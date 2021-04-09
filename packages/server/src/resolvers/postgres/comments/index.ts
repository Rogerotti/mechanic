import { IComment } from '@dataSource/postgres/types';
import { IContext } from '@resolver/types';
import { ICommentsFilters } from './types';

export const commentsResolver = async (
  _source: void,
  args: ICommentsFilters,
  { dataSources }: IContext,
): Promise<IComment[]> => {
  let comments = await dataSources.postgres.getComments();

  if (args.trainerId) {
    comments = comments.filter((comment) => comment.trainerId === Number(args.trainerId));
  }

  return comments;
};
