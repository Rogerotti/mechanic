import axios from 'axios';

export interface IPayUAuthorizationRespond {
  access_token: string;
  token_type: string;
  expires_in: number; //czas ważności w sekundach
  grant_type: string;
}

export const getPayUPayoutMethods = async (): Promise<IPayUAuthorizationRespond> => {
  const token = 'be30e2d7-8f9d-4ff0-a9ee-8d9a335527e8';
  const url = 'https://secure.snd.payu.com/api/v2_1/paymethods';
  return await axios
    .get<IPayUAuthorizationRespond>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log('methods');
      return res.data;
    })
    .catch((exception) => {
      console.error('authorizePayU', exception);
      return null;
    });
};
