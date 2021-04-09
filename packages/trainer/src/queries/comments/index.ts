import { gql } from '@apollo/client';

export const GET_COMMENTS = gql`
  query GetComments($trainerId: String) {
    comments(trainerId: $trainerId) {
      id
      description
      userImage
      userFirstName
      userLastName
      userId
      trainerId
      date
      rating
    }
  }
`;
