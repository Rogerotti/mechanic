import axios from 'axios';
import { ICity } from '../../interfaces';

export const fetchAllCities = async (): Promise<ICity[]> => {
  const url = 'www.test.com'; // TODO
  return await axios
    .get<ICity[]>(url)
    .then((res) => {
      return res.data;
    })
    .catch((exception) => {
      console.error('fetchAllCities', exception);
      return [
        { id: 'wa', name: 'Warszawa' },
        { id: 'kr', name: 'Kraków' },
        { id: 'lo', name: 'Łódź' },
        { id: 'wr', name: 'Wrocław' },
        { id: 'po', name: 'Poznań' },
        { id: 'gd', name: 'Gdańsk' },
        { id: 'sz', name: 'Szczecin' },
        { id: 'by', name: 'Bydgoszcz' },
        { id: 'lu', name: 'Lublin' },
        { id: 'bi', name: 'Białystok' },
      ];
    });
};
