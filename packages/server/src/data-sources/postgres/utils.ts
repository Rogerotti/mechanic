import { config } from '@config';
import { getConnection } from '@postgres';
import { Connection } from 'typeorm';

export const createPostgresClient = (): Promise<Connection> => {
  return getConnection({
    user: config.postgres.user,
    host: config.postgres.host,
    database: config.postgres.database,
    password: config.postgres.password,
    port: config.postgres.port,
  });
};
