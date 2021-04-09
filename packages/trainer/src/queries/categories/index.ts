import { gql } from '@apollo/client';

export const GET_ALL_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      description
      subcategories {
        id
        name
        description
      }
    }
  }
`;
