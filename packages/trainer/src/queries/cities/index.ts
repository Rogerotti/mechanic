import { gql } from '@apollo/client';

export const GET_ALL_CITIES = gql`
  query GetCities {
    cities {
      id
      name
    }
  }
`;
