import React, { useState } from 'react';
import { useEffect } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/react-hooks';

import pgDataProvider from 'ra-postgraphile';
import { Admin, DataProvider, LegacyDataProvider, Resource } from 'react-admin';
import { CityCreate, CityList } from './components/cities/cities.component';

const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
  });

  const [dataProvider, setDataProvider] = useState<DataProvider | LegacyDataProvider | null>(null);

  useEffect(() => {
    (async () => {
      const dataProvider = await pgDataProvider(client as any);
      setDataProvider(dataProvider);
    })();
  }, []);

  if (!dataProvider) return <div>Test</div>;

  return (
    <ApolloProvider client={client}>
      <Admin
        title=""
        dataProvider={dataProvider}
        // customReducers={{ theme: themeReducer }}
        // customRoutes={customRoutes}
        // authProvider={authProvider}
        // dashboard={Dashboard}
        // loginPage={Login}
        // layout={Layout}
        // disableTelemetry
      >
        <Resource name="cities" create={CityCreate} list={CityList} />
      </Admin>
    </ApolloProvider>
  );
};

export default App;
