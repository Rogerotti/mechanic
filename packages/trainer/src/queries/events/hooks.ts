import { useQuery } from '@apollo/client';
import { GET_COMMENTS } from '.';
import { IGeEventsQuery, IGetEventsQueryParams, IEvent } from './types';

export const useEvents = (
  trainerId: string,
): {
  loading: boolean;
  events: IEvent[];
} => {
  const { data, loading } = useQuery<IGeEventsQuery, IGetEventsQueryParams>(GET_COMMENTS, {
    variables: { trainerId: trainerId },
  });

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
  };
};
