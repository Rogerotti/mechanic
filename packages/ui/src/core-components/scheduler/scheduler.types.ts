export interface IEvent {
  starDate: Date;
  endDate: Date;
  description: string;
}

export interface ISchedulerProps {
  /** Range from 1-23 */
  startHour: number;
  /** Range from 2-24 */
  endHour: number;

  /** Will support only daily events without going to the next day */
  /** Will support only 1 event in hour */
  events: IEvent[];
}
