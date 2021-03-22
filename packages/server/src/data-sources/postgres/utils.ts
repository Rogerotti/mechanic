import { Client } from 'pg';
import { config } from '@config';

export const createPostgresClient = (): Client => {
  const client = new Client({
    user: config.postgres.user,
    host: config.postgres.host,
    database: config.postgres.database,
    password: config.postgres.password,
    port: config.postgres.port,
  });

  client.connect();

  return client;
};
