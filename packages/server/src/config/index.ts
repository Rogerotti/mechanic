export interface IConfig {
  payU: {
    url: string;
    grantType: string;
    clientId: string;
    clientSecret: string;
  };
  postgres: {
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
  };
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const config: IConfig = require('../../config');
