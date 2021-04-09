import { IResolvers } from 'graphql-tools';
import { PayoutMethodResolver, payUResolver } from './payU';
import { categoriesResolver, citiesResolver, commentsResolver, trainerResolver, trainersResolver } from './postgres';

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
