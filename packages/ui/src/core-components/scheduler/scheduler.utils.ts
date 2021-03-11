import { IEvent } from './scheduler.types';

export const isMultilineEvent = (event: IEvent): boolean =>
  event &&
  event.endDate.getHours() +
    event.endDate.getMinutes() / 60 -
    (event.starDate.getHours() + event.starDate.getMinutes() / 60) >
    1;

export const setMidnight = (date: Date): Date => {
  const dateTemp = new Date(date);
  return new Date(dateTemp.setHours(0, 0, 0, 0));
};
export const setEndOfTheDay = (date: Date): Date => {
  const dateTemp = new Date(date);
  return new Date(dateTemp.setHours(23, 59, 59, 999));
};

export const addHours = (date: Date, hours: number): Date => {
  return new Date(date.getTime() + hours * 60 * 60 * 1000);
};

export const addDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export const getEventLength = (event: IEvent): number => {
  const hourDiff = event ? event.endDate.getHours() - event.starDate.getHours() : 0;

  const minutesDiff = event ? event.endDate.getMinutes() - event.starDate.getMinutes() : 0;

  return hourDiff + minutesDiff / 60;
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
    diff = date.getDate() - day + (day == 0 ? day : +7);
  return new Date(date.setDate(diff));
};
