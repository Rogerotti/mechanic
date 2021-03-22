import { gql } from '@apollo/client';

export const PAYU_QUERY = gql`
  query Test {
    payU {
      token
      payoutMethods {
        value
      }
    }
  }
`;

export const GET_ALL_CITIES = gql`
  query GetCities {
    postgres {
      cities {
        id
        name
      }
    }
  }
`;
