import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';

import MechanicsContainer from './components/pages/mechanics/container';
import HomePageContainer from './components/pages/homePage/container';

const store = createStore(rootReducer, composeWithDevTools());

const Index = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/">
          <HomePageContainer />
        </Route>
        <Route path="/mechanics">
          <MechanicsContainer />
        </Route>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
