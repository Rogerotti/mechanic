import React, { useEffect, useState } from 'react';
import Layout from '../../core/layout';
import { TrainerPage } from '@ui/pages/trainer-page';
import { useDispatch, useSelector } from 'react-redux';
import { ICommentsSectionProps } from '@ui/composition/comments-section/comments-section.types';
import { getDistance } from '../../../utils/geographic';
import { ITrainerPageProps } from '@ui/pages/trainer-page/trainer-page.types';
import { searchTrainer } from '@redux/actions/search';
import { useMappedData } from '@api/hooks';
import { getTrainer } from '@redux/selectors';

export const TrainerPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const id = 'test-id';
  useEffect(() => {
    dispatch(searchTrainer(id));
  }, [id]);

  const trainer = useSelector(getTrainer);

  if (!trainer) {
    return null;
  }

  const onBookClick = () => {
    console.log('clicked');
  };

  const events: ITrainerPageProps['events'] = [];

  const currentUserPosition = {
    x: 50.05304485463954,
    y: 19.984250240851726,
  };

  const distance = '25km od ciebie'; // todo `${getDistance(trainer.location.position, currentUserPosition)}km Od`;

  const userContactSection = {
    accountCreationDate: trainer?.creationDate,
    email: trainer?.contactDetails?.email,
    phoneNumber: trainer?.contactDetails?.phoneNumber,
    showEmailText: 'Pokaż email',
    showPhoneNumberText: 'Pokaż numer telefonu',
  };

  const comments: ICommentsSectionProps['comments'] = [
    {
      id: 'first',
      header: 'Edward Austin',
      description: `Oh no.
    We're doomed. 
    Goodbye.`,
      date: new Date(2021, 2, 1),
      image: null,
      rating: 3.5,
    },
    {
      id: 'second',
      header: 'Roger Skrzypczyk',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      date: new Date(2020, 5, 10),
      image: null,
      rating: 3.5,
    },
  ];

  const commentsSectionData: ICommentsSectionProps = {
    comments: comments,
    actionButtonText: 'Pokaż wszystkie',
    displayActionButton: true,
    title: 'Opinie (110)',
    sortButtonText: 'Sortuj według',
    sortOptions: [
      {
        id: '1',
        value: 'Od najnowszego',
      },
      {
        id: '2',
        value: 'Od najstarszego',
      },
    ],
    diagram: {
      fiveStarPercentage: 30,
      fourStarPercentage: 50,
      threeStarPercentage: 5,
      twoStarPercentage: 5,
      oneStarPercentage: 10,
      rating: 4.1,
    },
  };

  // const [selectedCategories, setSelectedCategories] = useState<IListItem[]>(useSelector(getCurrentCategories));
  // const [selectedCity, setSelectedCity] = useState<IListItem | undefined>(useSelector(getCurrentCity));
  // const trainers = useMappedData(useSelector(getTrainers), (trainers): IPresentationCardProps[] =>
  //   trainers.map(({ id, description, image, name, lastName, rating, numberOfRatings, location }) => ({
  //     id,
  //     description,
  //     image,
  //     rating,
  //     numberOfRatings,
  //     location,
  //     descriptionShowMoreText: 'Dowiedz się więcej',
  //     actionText: 'Akcja',
  //     header: `${name} ${lastName}`,
  //   })),
  // );

  // const allCategories = useMappedData(useFetchCategories(), (categories): IListItem[] =>
  //   categories.map((city) => ({ id: city.id, value: city.name })),
  // );

  // const allCities = useMappedData(useFetchCities(), (cities): IListItem[] =>
  //   cities.map((city) => ({ id: city.id, value: city.name })),
  // );

  // // eslint-disable-next-line @typescript-eslint/ban-types
  // const onCityChangeCallback = (_event: React.ChangeEvent<{}>, city: IListItem) => {
  //   setSelectedCity(city);
  //   dispatch(setCity(city));
  // };

  // const onCategoriesChangeCallback = (categories: IListItem[]) => {
  //   setSelectedCategories(categories);
  //   dispatch(setCategories(categories));
  // };

  return (
    <Layout>
      <TrainerPage
        bookText={'Zarezerwuj'}
        commentsSection={commentsSectionData}
        events={events}
        image={trainer.image}
        onBookClick={onBookClick}
        description={trainer.description}
        title={trainer.banner?.header}
        userContactSection={userContactSection}
        mapSection={{
          distance: distance,
          position: trainer.location.position,
          street: trainer.location.street,
          zoom: 15,
        }}
        hero={{
          title: trainer.banner?.header,
          image: trainer.banner?.image,
        }}
      />
    </Layout>
  );
};

export default TrainerPageContainer;
