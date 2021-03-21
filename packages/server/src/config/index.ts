export interface IConfig {
  payU: {
    url: string;
    grantType: string;
    clientId: string;
    clientSecret: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const config: IConfig = require('../../config');
