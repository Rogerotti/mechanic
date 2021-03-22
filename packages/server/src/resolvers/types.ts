import { IncomingHttpHeaders } from 'http';
import { IPayUDataSource } from '@dataSource/payU/types';
import { IPostgresDataSource } from '@dataSource/postgres/types';

export interface IContext {
  headers: IncomingHttpHeaders;
  req: Request;
  res: Response;
  dataSources: {
    payUAPI: IPayUDataSource;
    postgres: IPostgresDataSource;
  };
}
