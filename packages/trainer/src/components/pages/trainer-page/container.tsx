import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchTrainer, searchTrainerComments, searchTrainerEvents } from '@redux/actions/search';
import { getPayUPayoutMethods } from '@api/transfers';

import Layout from '../../core/layout';
import { TrainerPage } from '@ui/pages/trainer-page';
import { ICommentsSectionProps } from '@ui/composition/comments-section/comments-section.types';
// import { getDistance } from '../../../utils/geographic';
import { useTrainer } from '@queries/trainer/hooks';
import { useComments } from '@queries/comments/hooks';
import { useEvents } from '@queries/events/hooks';

export const TrainerPageContainer: React.FC = () => {
  const dispatch = useDispatch();

  const url = window?.location?.href ?? '';
  const id = url.substr(url.lastIndexOf('/') + 1);

  const { trainer, loading } = useTrainer(id);
  // make it lazy fetch
  const { comments } = useComments(id);
  // make it lazy
  const { events, getEvents } = useEvents(id);

  useEffect(() => {
    dispatch(searchTrainer(id));
    dispatch(searchTrainerComments(id, 2));
  }, [id]);

  // TODO images

  if (!trainer) {
    return null;
  }

  const userContactSection = {
    accountCreationDate: new Date(), // trainer?.creationDate,
    email: 'TODO', // trainer?.contactDetails?.email,
    phoneNumber: 'todo', //trainer?.contactDetails?.phoneNumber,
    showEmailText: 'Pokaż email',
    showPhoneNumberText: 'Pokaż numer telefonu',
  };

  const commentsSectionData: ICommentsSectionProps = {
    comments: comments,
    actionButtonText: 'Pokaż wszystkie',
    displayActionButton: true,
    title: `Opinie (${trainer?.totalRates})`,
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
      fiveStarPercentage: 10, // trainer?.rating?.fiveStarPercentage,
      fourStarPercentage: 10, // trainer?.rating?.fourStarPercentage,
      threeStarPercentage: 10, // trainer?.rating?.threeStarPercentage,
      twoStarPercentage: 10, // trainer?.rating?.twoStarPercentage,
      oneStarPercentage: 10, // trainer?.rating?.oneStarPercentage,
      rating: trainer?.rating,
    },
    onActionButtonClick: () => {
      dispatch(searchTrainerComments(id));
    },
  };

  const onBookClick = async () => {
    console.log('clicked');
    const res = await getPayUPayoutMethods();
  };

  const onEventChange = (date: Date) => {
    const startDate = date;

    const endDate = new Date(new Date(startDate).setDate(date.getDate() + 7));

    getEvents({
      variables: {
        startDate: startDate,
        endDate: endDate,
        trainerId: id,
      },
    });

    dispatch(searchTrainerEvents(id, startDate, endDate));
  };

  // const currentUserPosition = {
  //   x: 50.05304485463954,
  //   y: 19.984250240851726,
  // };

  console.log(events);

  const distance = '25km od ciebie'; // todo `${getDistance(trainer.location.position, currentUserPosition)}km Od`;

  const bannerTitle = `${trainer?.name} ${trainer?.lastName}`;
  const location = trainer?.locations.length > 0 ? trainer.locations[0] : null;

  return (
    <Layout>
      {loading || !trainer ? (
        <div></div>
      ) : (
        <TrainerPage
          bookText={'Zarezerwuj'}
          commentsSection={commentsSectionData}
          events={events}
          image={trainer.image}
          onBookClick={onBookClick}
          onEventSchedulerDateChange={onEventChange}
          description={trainer.description}
          title={bannerTitle}
          userContactSection={userContactSection}
          mapSection={{
            distance: distance,
            position: {
              x: 55,
              y: 55,
            }, // location.position,
            street: location?.streetName,
            zoom: 15,
          }}
          hero={{
            title: bannerTitle,
            image: null, //trainer.banner?.image,
          }}
        />
      )}
    </Layout>
  );
};

export default TrainerPageContainer;
