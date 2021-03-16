import { ICommentsSectionProps } from '../../../composition/comments-section/comments-section.types';
import { comments } from '../comments';

export const commentsSectionData: ICommentsSectionProps = {
  comments: comments,
  actionButtonText: 'Pokaż wszystkie',
  displayActionButton: true,
  title: 'Opinie (110)',
  sortButtonText: 'Sortuj według',
  sortOptions: [
    {
      id: '1',
      value: 'Od najnowszego',
    },
    {
      id: '2',
      value: 'Od najstarszego',
    },
  ],
  diagram: {
    fiveStarPercentage: 30,
    fourStarPercentage: 50,
    threeStarPercentage: 5,
    twoStarPercentage: 5,
    oneStarPercentage: 10,
    rating: 4.1,
  },
};
