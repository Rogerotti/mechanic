import logo from '@assets/trener1.png';
import { IPresentationCardProps } from '../../composition/presentation-card/presentation-card.types';

const specializationChipListProps = {
  general: [
    { id: 'Mma', value: 'Mma' },
    { id: 'boks', value: 'Boks' },
  ],
  getMoreText: 'Wiecej',
  label: 'Specjalizacja',
  showLessText: 'Mniej',
};

export const trainer1: IPresentationCardProps = {
  id: '1',
  image: logo,
  header: 'Sebastian Nowak',
  actionText: 'Zarezerwuj',
  descriptionShowMoreText: 'Dowiedz się więcej...',
  location: 'Warszawa, mcFit',
  description: `   
  Zapraszam na treningi personalne! Nazywam się Michał Orkowski, jestem czynnym zawodnikiem MMA z rekordem 5-4. Wygrywalem walki dla takich organizacji jak Babilon MMA oraz Dragon Fight Night. Posiadam 6 letnie doświadczenie w prowadzeniu treningów MMA w różnych klubach oraz w mojej prywatnej sali treningowej.
  Z przyjemnością nauczę Cię technik obejmujących walkę w ręcz we wszystkich dystansach: uderzenia, kopniecia, obalenia,  techniki konczace w parterze. Mój system treningowy oparty jest tylko na skutecznych technikach mających zastosowanie w realnej walce.
  Przyjdź i przekonaj się że można trenować sztuki walki i jednocześnie poprawić siłę, wytrzymałość, gibkosc oraz kondycję. `,
  numberOfRatings: 31,
  rating: 3.5,
  specializationChipListProps: specializationChipListProps,
};

export const trainer2: IPresentationCardProps = {
  id: '1',
  image: logo,
  header: 'Sebestian Achmistrowicz-Wachmistrowicz',
  actionText: 'Zarezerwuj',
  descriptionShowMoreText: 'Dowiedz się więcej...',
  location: `Warszawa,
  Warszawskie Centrum Atletyki,
  Fitness Club S4 Śródmieście,
   Fitness Club S4 Wola,
    Fitness Club S4 Bemowo,
     Fitness Club S4 Ursynów,
     City Fit Rondo,
      Kamion Fitness Club,`,
  description: `   
  Zapraszam na treningi personalne! Nazywam się Michał Orkowski, jestem czynnym zawodnikiem MMA z rekordem 5-4. Wygrywalem walki dla takich organizacji jak Babilon MMA oraz Dragon Fight Night. Posiadam 6 letnie doświadczenie w prowadzeniu treningów MMA w różnych klubach oraz w mojej prywatnej sali treningowej.

  Z przyjemnością nauczę Cię technik obejmujących walkę w ręcz we wszystkich dystansach: uderzenia, kopniecia, obalenia,  techniki konczace w parterze. Mój system treningowy oparty jest tylko na skutecznych technikach mających zastosowanie w realnej walce.
 
  Przyjdź i przekonaj się że można trenować sztuki walki i jednocześnie poprawić siłę, wytrzymałość, gibkosc oraz kondycję. 
 
 Oprocz sukcesów na zawodowym ringu posiadam rowniez wiele medali w Amatorskiej Lidze MMA i Submission Grapplingu : 
 - II miejsce Mistrzostwa Polski MMA na Stadionie
  Narodowym 2016
 - I miejsce Puchar Pamięci Żołnierzy Wykletych MMA 2016
 -I miejsce Puchar Polski MMA 2015
 - I miejsce Puchar Pamięci  Żołnierzy Wyklętych MMA 2015
 - I miejsce Hadaka Waza Tournament MMA 2014
 -I miejsce Mistrzostwa Mazowsza MMA 2015
 - II miejsce Mistrzostwa Polski MMA 2015
 -II miejsce Mistrzostwa Polski -Submission fighting 2015
 - II miejsce Mistrzostwa Grappling Desant 2014
 
 Plan treningowy układany jest zawsze pod konkretną osobę, dzięki czemu trening jest bezpieczny, dostosowany do możliwości zdrowotnych oraz kondycyjnych ćwiczącego. Oferuje prywatną salę w pełni wyposażona i przystosowana do treningów sztuk walki. Mogę również dojechać do domu klienta lub poprowadzić trening w jakimkolwiek klubie sportowym.
 
 Zapraszam do zapisów na pierwszy trening!
 
 Telefon kontaktowy: 534 880 081
 
 Do zobaczenia Michał Orkowski.`,
  numberOfRatings: 31,
  rating: 3.5,
  specializationChipListProps: {
    ...specializationChipListProps,
    additional: [
      { id: 'Bjj', value: 'Brazylijskie jujitsu' },
      { id: 'Kickbox', value: 'Kickbox' },
      { id: 'chess', value: 'Szachy' },
      { id: 'swim', value: 'Pływanie' },
    ],
  },
};
