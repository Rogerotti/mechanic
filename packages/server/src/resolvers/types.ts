import { IncomingHttpHeaders } from 'http';
import { IPayUDataSource } from '@dataSource/payU/types';

export interface IContext {
  headers: IncomingHttpHeaders;
  req: Request;
  res: Response;
  dataSources: {
    payUAPI: IPayUDataSource;
  };
}
