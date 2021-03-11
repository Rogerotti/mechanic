import { IEvent } from '@core-components/scheduler/scheduler.types';
import { addHours, getNextSunday, getPreviousMonday, setMidnight } from '@core-components/scheduler/scheduler.utils';

const previousMonday = getPreviousMonday(setMidnight(new Date()));
const nextSunday = getNextSunday(setMidnight(new Date()));

export const events: IEvent[] = [
  {
    starDate: addHours(previousMonday, 12),
    endDate: addHours(previousMonday, 13),
    description: '12:00 - 13:00 first',
  },
  {
    starDate: addHours(nextSunday, -12),
    endDate: addHours(nextSunday, -11),
    description: '12:00 - 13:00 saturday',
  },
  {
    starDate: addHours(nextSunday, 12),
    endDate: addHours(nextSunday, 13),
    description: '12:00 - 13:00 sunday',
  },
  {
    starDate: previousMonday,
    endDate: addHours(previousMonday, 24),
    description: 'NUL you wont see it',
  },
  {
    starDate: addHours(previousMonday, 32),
    endDate: addHours(previousMonday, 33.75),
    description: '8:00 - 9:45',
  },
  {
    starDate: addHours(previousMonday, 36),
    endDate: addHours(previousMonday, 38),
    description:
      '12:00 - 14:00 should be double hours and should be rly long description here we go lets see what gonna happen ok?',
  },
  {
    starDate: addHours(previousMonday, 58),
    endDate: addHours(previousMonday, 59.5),
    description: '10:00 - 11:30 should be one and a half',
  },
  {
    starDate: addHours(previousMonday, 60),
    endDate: addHours(previousMonday, 63),
    description: '12:00 - 15:00 should be triple hours',
  },
  {
    starDate: addHours(previousMonday, 82),
    endDate: addHours(previousMonday, 84),
    description: '10:00 - 12:00 should be double',
  },
  {
    starDate: addHours(previousMonday, 85),
    endDate: addHours(previousMonday, 87),
    description: '13:00 - 14:00 should be double again',
  },
  {
    starDate: addHours(previousMonday, 106),
    endDate: addHours(previousMonday, 110),
    description: '10:00 - 14:00 four hours long',
  },

  {
    starDate: addHours(previousMonday, 178),
    endDate: addHours(previousMonday, 182),
    description: 'next week monday four hours',
  },
];
