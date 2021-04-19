import { QueryLazyOptions, useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_COMMENTS } from '.';
import { IGeEventsQuery, IGetEventsQueryParams, IEvent } from './types';

export const useEvents = (
  trainerId: string,
): {
  loading: boolean;
  events: IEvent[];
  getEvents: (options?: QueryLazyOptions<IGetEventsQueryParams>) => void;
} => {
  const [getEvents, { data, loading }] = useLazyQuery<IGeEventsQuery, IGetEventsQueryParams>(GET_COMMENTS);

  useEffect(() => {
    getEvents({
      variables: {
        trainerId: trainerId,
      },
    });
  }, [trainerId]);

  const events = data?.events;

  const eventsData = events
    ? events.map((event) => {
        return {
          id: event.id,
          description: event.description,
          startDate: new Date(Number(event.startDate)),
          endDate: new Date(Number(event.endDate)),
        };
      })
    : [];

  return {
    events: eventsData,
    loading,
    getEvents,
  };
};
