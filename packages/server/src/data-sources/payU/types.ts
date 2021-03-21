export interface IPayUAuthorizationRespond {
  access_token: string;
  token_type: string;
  expires_in: number; // time period in seconds
  grant_type: string;
}

export interface IPayUPaymentMethodsRespond {
  payByLinks: IPayUPaymentMethod[];
}

export interface IPayUPaymentMethod {
  value: string;
  brandImageUrl: string;
  name: string;
  status: string;
  minAmount: number;
  maxAmount: number;
}

export interface IPayUDataSource {
  authorize(): IPayUAuthorizationRespond;
  payoutMethods(token: string): IPayUPaymentMethod[];
}
