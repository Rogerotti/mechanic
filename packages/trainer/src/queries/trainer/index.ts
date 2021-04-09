import { gql } from '@apollo/client';

export const GET_TRAINER = gql`
  query GetTrainer($id: String) {
    trainer(id: $id) {
      id
      name
      lastName
      description
      totalRates
      rating
      image
      locations {
        id
        name
        streetName
        streetNumber
        city {
          id
          name
        }
      }
      subcategories {
        id
        name
        description
      }
    }
  }
`;

export const GET_ALL_TRAINERS = gql`
  query GetTrainers($categoryId: String, $subcategoryId: String, $cityId: String, $offset: Int, $limit: Int) {
    trainers(categoryId: $categoryId, cityId: $cityId, subcategoryId: $subcategoryId, offset: $offset, limit: $limit) {
      trainers {
        id
        name
        lastName
        description
        totalRates
        rating
        image
        locations {
          id
          name
          streetName
          streetNumber
          city {
            id
            name
          }
        }
        subcategories {
          id
          name
          description
        }
      }
      trainersTotalNumber
    }
  }
`;
