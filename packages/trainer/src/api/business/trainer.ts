import axios from 'axios';
import image1 from '@assets/trainers/roger.jpg';
import { IEventDTO, ITrainerExtendedDTO } from '../../interfaces';
import { ICommentDTO } from '@redux/types/search';

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
        description: `   
        Zapraszam na treningi personalne! Nazywam się Michał Orkowski, jestem czynnym zawodnikiem MMA z rekordem 5-4. Wygrywalem walki dla takich organizacji jak Babilon MMA oraz Dragon Fight Night. Posiadam 6 letnie doświadczenie w prowadzeniu treningów MMA w różnych klubach oraz w mojej prywatnej sali treningowej.
        Z przyjemnością nauczę Cię technik obejmujących walkę w ręcz we wszystkich dystansach: uderzenia, kopniecia, obalenia,  techniki konczace w parterze. Mój system treningowy oparty jest tylko na skutecznych technikach mających zastosowanie w realnej walce.
        Przyjdź i przekonaj się że można trenować sztuki walki i jednocześnie poprawić siłę, wytrzymałość, gibkosc oraz kondycję. `,
        name: 'Roger',
        lastName: 'Skrzypczyk',
        location: {
          position: {
            x: 50.05304455463954,
            y: 19.984250240851726,
          },
          street: 'Na Zakolu wisły 12b',
        },
        image: image1,
        contactDetails: {
          email: 'roger.skrzypczyk@gmail.com',
          phoneNumber: '+48 886 585 135',
        },
        creationDate: new Date(2021, 1, 2),
        banner: {
          header: 'Roger Skrzypczyk',
          subHeader: 'informatyk xD',
          image: null,
        },
        rating: {
          value: 3.2,
          totalComments: 6,
          fiveStarPercentage: 60,
          fourStarPercentage: 20,
          threeStarPercentage: 0,
          twoStarPercentage: 5,
          oneStarPercentage: 15,
        },
      };

      return data;
    });
};

export const fetchTrainerEvents = async (id: string, startDate: Date, endDate: Date): Promise<IEventDTO[]> => {
  const url = `www.test.com/${id}/${startDate}/${endDate}`; // TODO

  return await axios
    .get<IEventDTO[]>(url)
    .then((res) => {
      return res.data;
    })
    .catch((exception) => {
      console.error('fetchTrainerEvents', exception);

      const currentDate = new Date();
      const data: IEventDTO[] = [
        {
          starDate: new Date(2021, currentDate.getMonth(), currentDate.getDate(), 12, 0),
          endDate: new Date(2021, currentDate.getMonth(), currentDate.getDate(), 13, 45),
          description: 'first event',
        },
      ];

      return data;
    });
};

export const fetchTrainerComments = async (id: string, length: number): Promise<ICommentDTO[]> => {
  const url = `www.test.com/${id}/${length}`; // TODO

  return await axios
    .get<ICommentDTO[]>(url)
    .then((res) => {
      return res.data;
    })
    .catch((exception) => {
      console.error('fetchTrainerEvents', exception);

      const data: ICommentDTO[] = [
        {
          date: new Date(),
          description: 'eeee',
          header: 'eeee',
          rating: 3.5,
          userImage: null,
        },
        {
          date: new Date(),
          description: 'eeee',
          header: 'eeee',
          rating: 3.5,
          userImage: null,
        },
        {
          date: new Date(),
          description: 'eeee',
          header: 'eeee',
          rating: 3.5,
          userImage: null,
        },
        {
          date: new Date(),
          description: 'eeee',
          header: 'eeee',
          rating: 3.5,
          userImage: null,
        },
        {
          date: new Date(),
          description: 'eeee',
          header: 'eeee',
          rating: 3.5,
          userImage: null,
        },
        {
          date: new Date(),
          description: 'eeee',
          header: 'eeee',
          rating: 3.5,
          userImage: null,
        },
      ];

      return length ? data.slice(0, length) : data;
    });
};
