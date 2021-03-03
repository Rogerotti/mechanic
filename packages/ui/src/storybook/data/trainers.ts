import logo from '@assets/trener1.png';
import { ITrainerCardProps } from '../../composition/trainer-card/trainer-card.types';

export const trainer1: ITrainerCardProps = {
  image: logo,
  firstName: 'Sebastian',
  lastName: 'Nowak',
  location: 'Warszawa, mcFit',
  description: `   
  Zapraszam na treningi personalne! Nazywam się Michał Orkowski, jestem czynnym zawodnikiem MMA z rekordem 5-4. Wygrywalem walki dla takich organizacji jak Babilon MMA oraz Dragon Fight Night. Posiadam 6 letnie doświadczenie w prowadzeniu treningów MMA w różnych klubach oraz w mojej prywatnej sali treningowej.
  Z przyjemnością nauczę Cię technik obejmujących walkę w ręcz we wszystkich dystansach: uderzenia, kopniecia, obalenia,  techniki konczace w parterze. Mój system treningowy oparty jest tylko na skutecznych technikach mających zastosowanie w realnej walce.
  Przyjdź i przekonaj się że można trenować sztuki walki i jednocześnie poprawić siłę, wytrzymałość, gibkosc oraz kondycję. `,
  numberOfRaitings: 31,
  rating: 3.5,
  generalCategories: [
    { id: 'Mma', value: 'Mma' },
    { id: 'boks', value: 'Boks' },
  ],
  additionalCategories: [],
};

export const trainer2: ITrainerCardProps = {
  image: logo,
  firstName: 'Edward',
  lastName: 'Jesien',
  location: 'Kraków, Na ZAkolu wisły mcFit',
  description: `   
  personalne! Nazywam się Michał  obalenia,  techniki konczace w parterze. i, jestem czynnym zawodnikiem MMA z rek Mój system treningowy oparty jest tylko na skutecznych technikach mających zastosowanie w realnej walce.
  Przyjdź i przekonaj się że można trenować sztu kOrkowskordem 5Zapraszam na treningi nauczę Cię technik o  -4. Wygrywalem walki dla takich organizacji jak Babilon MMA oraz Dragon Fight Night. Posiadam 6 letnie doświadczenie w prowadzeniu treningów MMA w różnych klubach oraz w mojej prywatnej sali treningowej.
  Z przyjemnością bejmujących walkę w ręcz we wszystkich dystansach: uderzenia, kopniecia,i walki i jednocześnie poprawić siłę, wytrzymałość, gibkosc oraz kondycję. `,
  numberOfRaitings: 10,
  rating: 4.5,
  generalCategories: [
    { id: 'boks', value: 'Boks' },
    { id: 'Mma', value: 'Mma' },
  ],
  additionalCategories: [
    { id: 'Kickbox', value: 'Kickbox' },
    { id: 'chess', value: 'Szachy' },
    { id: 'swim', value: 'Pływanie' },
  ],
};
