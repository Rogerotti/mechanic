import { IEvent } from '@core-components/scheduler/scheduler.types';
import { addHours, getNextSunday, getPreviousMonday, setMidnight } from '@core-components/scheduler/scheduler.utils';

const previousMonday = getPreviousMonday(setMidnight(new Date()));
const nextSunday = getNextSunday(setMidnight(new Date()));

export const events: IEvent[] = [
  {
    starDate: addHours(previousMonday, 12),
    endDate: addHours(previousMonday, 13),
    description: 'trening personalny',
  },
  {
    starDate: addHours(nextSunday, -12),
    endDate: addHours(nextSunday, -11),
    description: 'Zajęcia grupowe',
  },
  {
    starDate: addHours(nextSunday, 12),
    endDate: addHours(nextSunday, 13),
    description: 'MMA sparingi',
  },
  {
    starDate: previousMonday,
    endDate: addHours(previousMonday, 24),
    description: 'NUL you wont see it',
  },
  {
    starDate: addHours(previousMonday, 36),
    endDate: addHours(previousMonday, 37.75),
    description: 'Trening grupowy',
  },
  {
    starDate: addHours(previousMonday, 36),
    endDate: addHours(previousMonday, 38),
    description: 'MMA - Trening personalny 2h',
  },
  {
    starDate: addHours(previousMonday, 58),
    endDate: addHours(previousMonday, 59.5),
    description: 'Bjj - grupowe',
  },
  {
    starDate: addHours(previousMonday, 60),
    endDate: addHours(previousMonday, 63),
    description: 'Zajęcia online',
  },
  {
    starDate: addHours(previousMonday, 82),
    endDate: addHours(previousMonday, 84),
    description: 'Układanie diety',
  },
  {
    starDate: addHours(previousMonday, 85),
    endDate: addHours(previousMonday, 87),
    description: 'Kickboxing - personalny',
  },
  {
    starDate: addHours(previousMonday, 106),
    endDate: addHours(previousMonday, 110),
    description: 'Seminarium',
  },

  {
    starDate: addHours(previousMonday, 178),
    endDate: addHours(previousMonday, 182),
    description: 'Seminarium',
  },
];
