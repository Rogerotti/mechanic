export interface ISchedulerProps {
  /** Range from 1-23 */
  startHour: number;
  /** Range from 2-24 */
  endHour: number;
  weeksFromCurrentDay: number;
}
