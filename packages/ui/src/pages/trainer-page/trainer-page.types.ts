import { ISchedulerProps } from '@core-components/scheduler/scheduler.types';
import { ICommentsSectionProps } from '../../composition/comments-section/comments-section.types';
import { IContactUserSectionProps } from '../../composition/contact-user-section/contact-user-section.types';
import { IHeroImageProps } from '../../composition/hero-image/hero-image.types';
import { IMapSectionsProps } from '../../composition/map-section/map-section.types';

export interface ITrainerPageProps {
  title: string;
  description: string;
  image: string;
  bookText: string;
  onBookClick?: () => void;
  onEventSchedulerDateChange?: (date: Date) => void;
  commentsSection: ICommentsSectionProps;
  mapSection: IMapSectionsProps;
  userContactSection: IContactUserSectionProps;
  events: ISchedulerProps['events'];
  hero: IHeroImageProps;
}
