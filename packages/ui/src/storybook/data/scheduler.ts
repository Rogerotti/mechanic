import { IEvent } from '@core-components/scheduler/scheduler.types';
import { addHours, getNextSunday, getPreviousMonday, setMidnight } from '@core-components/scheduler/scheduler.utils';

const previousMonday = getPreviousMonday(setMidnight(new Date()));
const nextSunday = getNextSunday(setMidnight(new Date()));

export const events: IEvent[] = [
  {
    id: '1',
    starDate: addHours(previousMonday, 12),
    endDate: addHours(previousMonday, 13),
    description: 'trening personalny',
  },
  {
    id: '2',
    starDate: addHours(nextSunday, -12),
    endDate: addHours(nextSunday, -11),
    description: 'Zajęcia grupowe',
  },
  {
    id: '3',
    starDate: addHours(nextSunday, 12),
    endDate: addHours(nextSunday, 13),
    description: 'MMA sparingi',
  },
  {
    id: '4',
    starDate: previousMonday,
    endDate: addHours(previousMonday, 24),
    description: 'NUL you wont see it',
  },
  {
    id: '5',
    starDate: addHours(previousMonday, 36),
    endDate: addHours(previousMonday, 37.75),
    description: 'Trening grupowy',
  },
  {
    id: '6',
    starDate: addHours(previousMonday, 36),
    endDate: addHours(previousMonday, 38),
    description: 'MMA - Trening personalny 2h',
  },
  {
    id: '7',
    starDate: addHours(previousMonday, 58),
    endDate: addHours(previousMonday, 59.5),
    description: 'Bjj - grupowe',
  },
  {
    id: '8',
    starDate: addHours(previousMonday, 60),
    endDate: addHours(previousMonday, 63),
    description: 'Zajęcia online',
  },
  {
    id: '9',
    starDate: addHours(previousMonday, 82),
    endDate: addHours(previousMonday, 84),
    description: 'Układanie diety',
  },
  {
    id: '10',
    starDate: addHours(previousMonday, 85),
    endDate: addHours(previousMonday, 87),
    description: 'Kickboxing - personalny',
  },
  {
    id: '11',
    starDate: addHours(previousMonday, 106),
    endDate: addHours(previousMonday, 110),
    description: 'Seminarium',
  },
  {
    id: '12',
    starDate: addHours(previousMonday, 178),
    endDate: addHours(previousMonday, 182),
    description: 'Seminarium',
  },
];
