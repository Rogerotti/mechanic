import { Connection, createConnection } from 'typeorm';
import 'reflect-metadata';

export interface IPostgresConfig {
  user: string;
  password: string;
  host: string;
  database: string;
  port: number;
}

export const getConnection = async ({ user, password, host, database, port }: IPostgresConfig): Promise<Connection> => {
  return await createConnection({
    type: 'postgres',
    host: host,
    port: port,
    username: user,
    password: password,
    database: database,
    entities: [__dirname + '/entity/*.ts'], // might need to be change on build
    synchronize: true,
    logging: false,
  });
};
