import React, { useEffect } from 'react';
import Layout from '../../core/layout';
import { TrainerPage } from '@ui/pages/trainer-page';
import { useDispatch, useSelector } from 'react-redux';
import { ICommentsSectionProps } from '@ui/composition/comments-section/comments-section.types';
// import { getDistance } from '../../../utils/geographic';
import { searchTrainer, searchTrainerComments, searchTrainerEvents } from '@redux/actions/search';
import { useMappedData } from '@api/hooks';
import { getTrainer, getTrainerComments, getTrainerEvents } from '@redux/selectors';
import { getPayUPayoutMethods } from '@api/transfers';
import { useQuery } from '@apollo/client';
import { PAYU_QUERY } from '../../../apollo/queries';

export const TrainerPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const id = '1';
  const { data, loading, error } = useQuery(PAYU_QUERY);

  useEffect(() => {
    dispatch(searchTrainer(id));
    dispatch(searchTrainerComments(id, 2));
  }, [id]);

  const trainer = useSelector(getTrainer);
  const events = useSelector(getTrainerEvents);
  const comments: ICommentsSectionProps['comments'] = useMappedData(
    useSelector(getTrainerComments),
    (comments): ICommentsSectionProps['comments'] =>
      comments
        ? comments.map((comment) => ({
            id: comment.id,
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

  const onBookClick = async () => {
    console.log('clicked');
    const res = await getPayUPayoutMethods();
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

// curl 'https://secure.snd.payu.com/pl/standard/user/oauth/authorize' \
//   // -H 'Referer: http://localhost:8080/' \
//   // -H 'sec-ch-ua-mobile: ?0' \
//   // -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36' \
//   // -H 'sec-ch-ua: "Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"' \
//   -d 'grant_type=client_credentials&client_id=404240&client_secret=99980aa6ab89b2f5417c268a2ca97f5e'

//   curl 'https://secure.snd.payu.com/pl/standard/user/oauth/authorize' \
//   -H 'Referer: http://localhost:8080/' \
//   -H 'Access-Control-Allow-Origin: *' \
//   -H 'Accept: application/json, text/plain, */*' \
//   -H 'Referer: http://localhost:8080/' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua: "Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"' \
//   -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36' \
//   -d 'grant_type=client_credentials&client_id=404240&client_secret=99980aa6ab89b2f5417c268a2ca97f5e'
