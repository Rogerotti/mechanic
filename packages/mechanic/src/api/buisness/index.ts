import axios from 'axios';
import { ICategory } from '../../interfaces';

export const fetchAllCategories = async (): Promise<ICategory[]> => {
  const url = 'www.test.com'; // TODO
  return await axios
    .get<ICategory[]>(url)
    .then((res) => {
      return res.data;
    })
    .catch((exception) => {
      console.error('fetchAllCategories', exception);
      return [
        { id: 'mma', name: 'MMA' },
        { id: 'swim', name: 'Pływanie' },
        { id: 'chess', name: 'Szachy' },
        { id: 'box', name: 'Boks' },
        { id: 'k1', name: 'Kick boxing' },
        { id: 'bjj', name: 'Brazylijskie jiu jitsu' },
        { id: 'lol', name: 'League of Legends' },
        { id: 'csgo', name: 'Cs go' },
      ];
    });
};
