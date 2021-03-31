import { IResolvers } from 'graphql-tools';
import { PayoutMethodResolver, payUResolver } from './payU';
import { categoriesResolver, citiesResolver, trainersResolver } from './postgres';

export const resolver: IResolvers = {
  Query: {
    payU: payUResolver,
    cities: citiesResolver,
    categories: categoriesResolver,
    trainers: trainersResolver,
  },
  PayoutMethod: PayoutMethodResolver,
};
export default resolver;
