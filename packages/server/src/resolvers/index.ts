import { IResolvers } from 'graphql-tools';
import { PayoutMethodResolver, payUResolver } from './payU';

export const resolver: IResolvers = {
  Query: {
    payU: payUResolver,
  },
  PayoutMethod: PayoutMethodResolver,
};
export default resolver;
