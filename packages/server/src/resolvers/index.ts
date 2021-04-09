import { IResolvers } from 'graphql-tools';

import { PayoutMethodResolver, payUResolver } from './payU';

import { categoriesResolver } from './postgres/categories';
import { citiesResolver } from './postgres/cities';
import { commentsResolver } from './postgres/comments';
import { trainerResolver, trainersResolver } from './postgres/trainers';

export const resolver: IResolvers = {
  Query: {
    payU: payUResolver,
    cities: citiesResolver,
    categories: categoriesResolver,
    trainers: trainersResolver,
    trainer: trainerResolver,
    comments: commentsResolver,
  },
  PayoutMethod: PayoutMethodResolver,
};
export default resolver;
