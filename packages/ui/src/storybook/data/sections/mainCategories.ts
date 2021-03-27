import gloves from '@assets/categories/gloves.svg';
import yoga from '@assets/categories/yoga.svg';
import snowflake from '@assets/categories/snowflake.svg';
import soccerTeam from '@assets/categories/team.svg';
import swimming from '@assets/categories/swimming.svg';
import graduation from '@assets/categories/graduation.svg';
import gamepad from '@assets/categories/gamepad.svg';
import questionMark from '@assets/categories/question.svg';
import { IPresentationItem } from '../../../composition/presentation-image-list/presentation-image-list.types';

export const mainCategoriesList: IPresentationItem[] = [
  {
    id: '1',
    image: gloves,
    title: 'Sporty walki',
    bgcolor: '#800020',
  },
  {
    id: '2',
    image: yoga,
    title: 'Fitness',
    bgcolor: 'orange',
  },
  {
    id: '3',
    image: snowflake,
    title: 'Sporty zimowe',
    bgcolor: '#ffffff',
  },
  {
    id: '4',
    image: soccerTeam,
    title: 'Sporty drużynowe',
    bgcolor: '#458B00',
  },
  {
    id: '5',
    image: swimming,
    title: 'Sporty wodne',
    bgcolor: '#0993f3',
  },
  {
    id: '6',
    image: graduation,
    title: 'Edukacja',
    bgcolor: 'purple',
  },
  {
    id: '7',
    image: gamepad,
    title: 'Esport',
    bgcolor: '#9A7B4F',
  },
  {
    id: '8',
    image: questionMark,
    title: 'Pozostałe',
    bgcolor: '#FF007F',
  },
];
