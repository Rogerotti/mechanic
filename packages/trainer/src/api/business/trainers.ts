import axios from 'axios';
import image1 from '@assets/trainers/roger.jpg';
import image2 from '@assets/trainers/trener1.png';
import { ITrainerBasicDTO } from '../../interfaces';

export const fetchTrainers = async (city: string, category: string): Promise<ITrainerBasicDTO[]> => {
  const url = 'www.test.com'; // TODO
  return await axios
    .post<ITrainerBasicDTO[]>(url, {
      city,
      category,
    })
    .then((res) => {
      return res.data;
    })
    .catch((exception) => {
      console.error('fetchTrainers', exception);

      const data: ITrainerBasicDTO[] = [
        {
          id: '1',
          description: 'Opis1',
          name: 'Roger',
          lastName: 'Skrzypczyk',
          location: 'Kraków, Na Zakolu wisły 12b',
          numberOfRatings: 10,
          rating: 2,
          image: image1,
        },
        {
          id: '2',
          description: 'Opis2',
          name: 'Janusz',
          lastName: 'Kowadło',
          location: 'Warszawa, Na Zakolu błota 1b',
          numberOfRatings: 50,
          rating: 4,
          image: image2,
        },
        {
          id: '3',
          description: 'Opis2',
          name: 'Edward',
          lastName: 'Odcisk',
          location: 'Łódź, Na aad błota 1b',
          numberOfRatings: 22,
          rating: 0.5,
          image: image2,
        },
      ];

      return data;
    });
};
