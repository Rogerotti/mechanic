import { IPayUPaymentMethod } from '@dataSource/payU/types';

export interface IPayU {
  token: string;
  payoutMethods: IPayUPaymentMethod[];
}
