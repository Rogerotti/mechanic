import { IListItemGrouped } from '../../types/core';

export const cities = [
  {
    id: 'krk',
    value: 'Kraków',
  },
  { id: 'wwa', value: 'Warszawa' },
];

export const categories: IListItemGrouped[] = [
  {
    id: 'swim',
    value: 'Pływanie',
    groupId: '1',
    groupValue: 'Sport wodne',
  },
  {
    id: 'dive',
    value: 'Nurkowanie',
    groupId: '1',
    groupValue: 'Sport wodne',
  },
  { id: 'mma', value: 'MMA', groupId: '2', groupValue: 'Sporty walki' },
  { id: 'bjj', value: 'Brazylijskie jiu jitsu', groupId: '2', groupValue: 'Sporty walki' },
];
