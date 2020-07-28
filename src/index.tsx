import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MechanicsContainer from './components/pages/mechanics/container';
import HomePageContainer from './components/pages/homePage/container';

const Index = () => {
  return (
    <Router>
      <Route exact path="/">
        <HomePageContainer />
      </Route>
      <Route path="/mechanics">
        <MechanicsContainer />
      </Route>
    </Router>
  );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
