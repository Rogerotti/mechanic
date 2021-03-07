import user1Logo from '@assets/trener1.png';
import user2Logo from '@assets/users/user-logo.png';
import user3Logo from '@assets/users/roger.jpg';
import { ICommentsSectionProps } from '../../composition/comments-section/comments-section.types';

export const comments: ICommentsSectionProps['comments'] = [
  {
    id: 'first',
    header: 'Edward Austin',
    description: `Oh no.
  We're doomed. 
  Goodbye.`,
    date: new Date(2021, 2, 1),
    image: user1Logo,
    rating: 3.5,
  },
  {
    id: 'second',
    header: 'Roger Skrzypczyk',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    date: new Date(2020, 5, 10),
    image: user2Logo,
    rating: 3.5,
  },
  {
    id: 'third',
    header: 'Jacek Woźniak',
    description: 'Lorem Ipsum is not simply random text. We re doomed from 45 BC, making it over 2000 years old.',
    date: new Date(2021, 3, 22),
    image: user3Logo,
    rating: 3.5,
  },
];
