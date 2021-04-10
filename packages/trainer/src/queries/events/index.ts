import { gql } from '@apollo/client';

export const GET_COMMENTS = gql`
  query GetEvents($trainerId: String) {
    events(trainerId: $trainerId) {
      id
      trainerId
      description
      startDate
      endDate
    }
  }
`;
