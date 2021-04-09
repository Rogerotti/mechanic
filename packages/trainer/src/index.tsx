import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { Provider } from 'react-redux';

import { ApolloProvider } from '@apollo/client';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@ui/theme/primary';

import Error from './components/core/error';
import HomePageContainer from './components/pages/home-page/container';
import TrainerPageContainer from './components/pages/trainer-page/container';
import LoginPageContainer from './components/pages/login-page/container';
import RegisterPageContainer from './components/pages/register-page/container';
import SagaNavigation from './components/core/navigation';
import TrainersPageContainer from './components/pages/trainers-page/container';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { apolloClient } from '@queries';

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <SagaNavigation />
              <Route exact path="/">
                <ErrorBoundary FallbackComponent={(props) => <Error error={props.error} />}>
                  <HomePageContainer />
                </ErrorBoundary>
              </Route>
              <Route exact path="/trainers">
                <ErrorBoundary FallbackComponent={(props) => <Error error={props.error} />}>
                  <TrainersPageContainer />
                </ErrorBoundary>
              </Route>

              <Route exact path="/login">
                <LoginPageContainer />
              </Route>

              <Route exact path="/register">
                <RegisterPageContainer />
              </Route>

              <Route path="/trainers/:id">
                <ErrorBoundary FallbackComponent={(props) => <Error error={props.error} />}>
                  <TrainerPageContainer />
                </ErrorBoundary>
              </Route>
            </Router>
          </ThemeProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
