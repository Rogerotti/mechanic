import { IEvent } from './scheduler.types';

export const isMultilineEvent = (event: IEvent): boolean =>
  event && event.endDate.getHours() - event.starDate.getHours() > 1;

export const getCurrentBorder = (event: IEvent, hour: number): string => {
  const multiLineEvent = isMultilineEvent(event);

  const isTopBorder = multiLineEvent && event.starDate.getHours() === hour;
  const isBottomBorder = multiLineEvent && event.endDate.getHours() - 1 === hour;

  const borderRadius = 10;

  const borderTopLeftRadius = multiLineEvent ? (isTopBorder ? borderRadius : 0) : borderRadius;
  const borderTopRightRadius = multiLineEvent ? (isTopBorder ? borderRadius : 0) : borderRadius;

  const borderBottomLeftRadius = multiLineEvent ? (isBottomBorder ? borderRadius : 0) : borderRadius;
  const borderBottomRightRadius = multiLineEvent ? (isBottomBorder ? borderRadius : 0) : borderRadius;

  return `${borderTopLeftRadius}px ${borderTopRightRadius}px ${borderBottomLeftRadius}px ${borderBottomRightRadius}px`;
};

export const setMidnight = (date: Date): Date => {
  return new Date(date.setHours(0, 0, 0, 0));
};

export const addHours = (date: Date, hours: number): Date => {
  return new Date(date.getTime() + hours * 60 * 60 * 1000);
};

export const isTheSameDay = (date1: Date, date2: Date): boolean =>
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

export const getPreviousMonday = (d: Date): Date => {
  const date = new Date(d);
  const day = date.getDay(),
    diff = date.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(date.setDate(diff));
};

/** Get next sunday or if the current date is sunday return the same */
export const getNextSunday = (d: Date): Date => {
  const date = new Date(d);
  const day = date.getDay(),
    diff = date.getDate() - day + (day == 0 ? day : +7); // adjust when day is sunday
  return new Date(date.setDate(diff));
};
