import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@ui/theme/primary';

import Error from './components/core/error';
import HomePageContainer from './components/pages/home-page/container';
import LoginPageContainer from './components/pages/login-page/container';
import SagaNavigation from './components/core/navigation';
import TrainersPageContainer from './components/pages/trainers-page/container';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
