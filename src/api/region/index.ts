import axios from 'axios'
import { ICity } from '../../interfaces';

export const fetchAllCities = async () : Promise<ICity[]> => {
  const url = "www.test.com"; // TODO 
  return await axios.get<ICity[]>(url)
    .then((res) => {
      return res.data
    })
    .catch((exception) => {
      console.error('fetchAllCities', exception);
      return  [
        { id: "wa", name: 'Warszawa' },
        { id: "cz", name: 'Czeladź' },
      ];
    })
};