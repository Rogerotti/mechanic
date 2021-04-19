import { IEvent } from '@dataSource/postgres/types';
import { IContext } from '@resolver/types';
import { IEventsFilters } from './types';

export const eventsResolver = async (
  _source: void,
  { trainerId, startDate, endDate }: IEventsFilters,
  { dataSources }: IContext,
): Promise<IEvent[]> => {
  let events = await dataSources.postgres.getEvents();

  if (trainerId) {
    events = events.filter((event) => event.trainerId === Number(trainerId));
  }

  if (startDate) {
    events = events.filter((event) => event.startDate >= startDate);
  }

  if (endDate) {
    events = events.filter((event) => event.endDate <= endDate);
  }
  return events;
};
