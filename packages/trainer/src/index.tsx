import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@ui/theme/primary';
import { rootReducer } from '@redux/reducers';
import rootSaga from '@redux/sagas';

import Error from './components/core/error';
import HomePageContainer from './components/pages/home-page/container';
import LoginPageContainer from './components/pages/login-page/container';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const Index = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Route exact path="/">
            <ErrorBoundary FallbackComponent={(props) => <Error error={props.error} />}>
              <HomePageContainer />
            </ErrorBoundary>
          </Route>
          <Route exact path="/login">
            <LoginPageContainer />
          </Route>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
