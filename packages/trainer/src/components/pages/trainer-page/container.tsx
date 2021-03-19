import React, { useEffect } from 'react';
import Layout from '../../core/layout';
import { TrainerPage } from '@ui/pages/trainer-page';
import { useDispatch, useSelector } from 'react-redux';
import { ICommentsSectionProps } from '@ui/composition/comments-section/comments-section.types';
// import { getDistance } from '../../../utils/geographic';
import { searchTrainer, searchTrainerComments, searchTrainerEvents } from '@redux/actions/search';
import { useMappedData } from '@api/hooks';
import { getTrainer, getTrainerComments, getTrainerEvents } from '@redux/selectors';

export const TrainerPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const id = '1';

  useEffect(() => {
    dispatch(searchTrainer(id));
    dispatch(searchTrainerComments(id, 2));
  }, [id]);

  const trainer = useSelector(getTrainer);
  const events = useSelector(getTrainerEvents);
  const comments = useMappedData(useSelector(getTrainerComments), (comments): ICommentsSectionProps['comments'] =>
    comments
      ? comments.map((comment) => ({
          image: comment.userImage,
          header: comment.header,
          description: comment.description,
          date: comment.date,
          rating: comment.rating,
        }))
      : [],
  );

  if (!trainer) {
    return null;
  }

  const userContactSection = {
    accountCreationDate: trainer?.creationDate,
    email: trainer?.contactDetails?.email,
    phoneNumber: trainer?.contactDetails?.phoneNumber,
    showEmailText: 'Pokaż email',
    showPhoneNumberText: 'Pokaż numer telefonu',
  };

  const commentsSectionData: ICommentsSectionProps = {
    comments: comments,
    actionButtonText: 'Pokaż wszystkie',
    displayActionButton: true,
    title: `Opinie (${trainer?.rating?.totalComments})`,
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
      fiveStarPercentage: trainer?.rating?.fiveStarPercentage,
      fourStarPercentage: trainer?.rating?.fourStarPercentage,
      threeStarPercentage: trainer?.rating?.threeStarPercentage,
      twoStarPercentage: trainer?.rating?.twoStarPercentage,
      oneStarPercentage: trainer?.rating?.oneStarPercentage,
      rating: trainer?.rating?.value,
    },
    onActionButtonClick: () => {
      dispatch(searchTrainerComments(id));
    },
  };

  const onBookClick = () => {
    console.log('clicked');
  };

  const onEventChange = (date: Date) => {
    const startDate = date;

    const endDate = new Date(new Date(startDate).setDate(date.getDate() + 7));

    dispatch(searchTrainerEvents(id, startDate, endDate));
  };

  // const currentUserPosition = {
  //   x: 50.05304485463954,
  //   y: 19.984250240851726,
  // };

  const distance = '25km od ciebie'; // todo `${getDistance(trainer.location.position, currentUserPosition)}km Od`;

  return (
    <Layout>
      <TrainerPage
        bookText={'Zarezerwuj'}
        commentsSection={commentsSectionData}
        events={events}
        image={trainer.image}
        onBookClick={onBookClick}
        onEventSchedulerDateChange={onEventChange}
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
