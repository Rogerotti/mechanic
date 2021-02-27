import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import CssBaseline from '@material-ui/core/CssBaseline';
import Error from './components/core/error';
import { rootReducer } from './redux/reducers';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '@ui/theme/primary';
import HomePageContainer from './components/pages/home-page/container';
import LoginPageContainer from './components/pages/login-page/container';
import rootSaga from './redux/sagas';

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
