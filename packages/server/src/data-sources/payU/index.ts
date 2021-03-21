import { RESTDataSource } from 'apollo-datasource-rest';
import { IPayUAuthorizationRespond, IPayUPaymentMethod, IPayUPaymentMethodsRespond } from './types';
import { config } from '@config';

export class PayUAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.payU.url;
  }

  async authorize(): Promise<IPayUAuthorizationRespond> {
    const params = new URLSearchParams();
    params.append('grant_type', config.payU.grantType);
    params.append('client_id', config.payU.clientId);
    params.append('client_secret', config.payU.clientSecret);

    return await this.post(`pl/standard/user/oauth/authorize`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  async payoutMethods(token: string): Promise<IPayUPaymentMethod[]> {
    const data = await this.get<IPayUPaymentMethodsRespond>('api/v2_1/paymethods', undefined, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.payByLinks;
  }
}
