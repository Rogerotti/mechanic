import { ISchedulerProps } from '@core-components/scheduler/scheduler.types';
import { ICommentsSectionProps } from '../../composition/comments-section/comments-section.types';

export interface ITrainerPageProps {
  title: string;
  description: string;
  image: string;
  comments: ICommentsSectionProps['comments'];
  events: ISchedulerProps['events'];
}
