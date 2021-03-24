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
      return [{ id: 'mma', name: 'MMA', subcategories: [], description: 'tt' }];
    });
};
