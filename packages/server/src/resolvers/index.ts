import { IResolvers } from 'graphql-tools';
import { PayoutMethodResolver, payUResolver } from './payU';
import { postgresResolver } from './postgres';

export const resolver: IResolvers = {
  Query: {
    payU: payUResolver,
    postgres: postgresResolver,
  },
  PayoutMethod: PayoutMethodResolver,
};
export default resolver;
