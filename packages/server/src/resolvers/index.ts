import { IResolvers } from 'graphql-tools';

import { PayoutMethodResolver, payUResolver } from './payU';

import { categoriesResolver } from './postgres/categories';
import { createCityMutationResolver, citiesResolver, deleteCityMutationResolver } from './postgres/cities';
import { commentsResolver } from './postgres/comments';
import { eventsResolver } from './postgres/events';
import { trainerResolver, trainersResolver } from './postgres/trainers';

export const resolver: IResolvers = {
  Query: {
    payU: payUResolver,
    cities: citiesResolver,
    categories: categoriesResolver,
    trainers: trainersResolver,
    trainer: trainerResolver,
    comments: commentsResolver,
    events: eventsResolver,
  },
  Mutation: {
    createCity: createCityMutationResolver,
    deleteCity: deleteCityMutationResolver,
  },
  PayoutMethod: PayoutMethodResolver,
};
export default resolver;
