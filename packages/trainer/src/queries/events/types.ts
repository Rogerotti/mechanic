export interface IGeEventsQuery {
  events: IEvent[];
}

export interface IGetEventsQueryParams {
  trainerId?: string;
  startDate?: Date;
  endDate?: Date;
}

export interface IEvent {
  id: string;
  description: string;
  startDate: Date;
  endDate: Date;
}
