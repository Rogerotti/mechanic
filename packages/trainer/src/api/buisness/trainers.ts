import axios from 'axios';
import { ITrainerBasicDTO } from '../../interfaces';

export const fetchTrainers = async (city: string, categories: string[]): Promise<ITrainerBasicDTO[]> => {
  const url = 'www.test.com'; // TODO
  return await axios
    .post<ITrainerBasicDTO[]>(url, {
      city,
      categories,
    })
    .then((res) => {
      return res.data;
    })
    .catch((exception) => {
      console.error('fetchTrainers', exception);
      return [
        { id: 'train_1', name: 'Janusz' },
        { id: 'train_2', name: 'Edward' },
      ];
    });
};
