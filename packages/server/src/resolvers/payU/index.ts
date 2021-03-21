import { IPayU } from './types';
import { IContext } from '../types';
import { IPayUPaymentMethod } from '@dataSource/payU/types';

export const PayoutMethodResolver = {
  value(parent: IPayUPaymentMethod): string {
    return parent.value;
  },
  brandImageUrl(parent: IPayUPaymentMethod): string {
    return parent.brandImageUrl;
  },
  name(parent: IPayUPaymentMethod): string {
    return parent.name;
  },
  status(parent: IPayUPaymentMethod): string {
    // ENABLEd DISABLED
    return parent.status;
  },
  minAmount(parent: IPayUPaymentMethod): number {
    return parent.minAmount;
  },
  maxAmount(parent: IPayUPaymentMethod): number {
    return parent.maxAmount;
  },
};

export const payUResolver = async (_source: void, _args: void, { dataSources }: IContext): Promise<IPayU> => {
  const authorizationRespond = await dataSources.payUAPI.authorize();
  const payoutMethodsRespond = await dataSources.payUAPI.payoutMethods(authorizationRespond.access_token);

  return { token: authorizationRespond.access_token, payoutMethods: payoutMethodsRespond };
};
