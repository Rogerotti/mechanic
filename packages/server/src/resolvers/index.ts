import { IResolvers } from 'graphql-tools';
import { PayoutMethodResolver, payUResolver } from './payU';
import { categoriesResolver, citiesResolver, trainerResolver, trainersResolver } from './postgres';

export const resolver: IResolvers = {
  Query: {
    payU: payUResolver,
    cities: citiesResolver,
    categories: categoriesResolver,
    trainers: trainersResolver,
    trainer: trainerResolver,
  },
  PayoutMethod: PayoutMethodResolver,
};
export default resolver;
