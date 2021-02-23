import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import CssBaseline from '@material-ui/core/CssBaseline';
import Error from './components/core/error';
import { rootReducer } from './reducers';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../ui/src/theme/primary';
import HomePageContainer from './components/pages/homePage/container';

const store = createStore(rootReducer, composeWithDevTools());

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
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
