import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import { PayUAPI } from '@dataSource/payU';
import { PostgresDB } from '@dataSource/postgres';
import { createPostgresClient } from '@dataSource/postgres/utils';
import schema from './schema';

const app = express();

createPostgresClient().then(() => {
  const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    dataSources: () => {
      return {
        // payUAPI: new PayUAPI(),
        postgres: new PostgresDB(),
      };
    },
  });

  app.use('*', cors({}));
  app.use(compression());

  server.applyMiddleware({ app, path: '/graphql' });

  const httpServer = createServer(app);

  httpServer.listen({ port: 3000 }, (): void =>
    console.log(`\n🚀      GraphQL is now running on http://localhost:3000/graphql`),
  );
});
// const postgresClient = createPostgresClient();
