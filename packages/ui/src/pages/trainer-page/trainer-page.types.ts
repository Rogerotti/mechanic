import { ISchedulerProps } from '@core-components/scheduler/scheduler.types';
import { ICommentsSectionProps } from '../../composition/comments-section/comments-section.types';
import { IHeroImageProps } from '../../composition/hero-image/hero-image.types';

export interface ITrainerPageProps {
  title: string;
  description: string;
  image: string;
  commentsSection: ICommentsSectionProps;
  events: ISchedulerProps['events'];
  hero: IHeroImageProps;
}
