import axios from 'axios';
import image1 from '@assets/trainers/roger.jpg';
import { ITrainerExtendedDTO } from '../../interfaces';

export const fetchTrainer = async (id: string): Promise<ITrainerExtendedDTO> => {
  const url = `www.test.com/${id}`; // TODO
  return await axios
    .get<ITrainerExtendedDTO>(url)
    .then((res) => {
      return res.data;
    })
    .catch((exception) => {
      console.error('fetchTrainers', exception);

      const data: ITrainerExtendedDTO = {
        id: '1',
        description: 'Opis1',
        name: 'Roger',
        lastName: 'Skrzypczyk',
        location: {
          position: {
            x: 55.34,
            y: 44.34,
          },
          street: 'test',
        },
        image: image1,
      };

      return data;
    });
};
