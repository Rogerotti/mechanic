import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Mechanics from "./components/pages/mechanics/mechanics";
import HomePage from "./components/pages/homePage/homePage";

const Index = () => {
  return <Router>
    <Route exact path="/">
      <HomePage brands={[]} models={[]} cities={[]} />
    </Route>
    <Route path="/mechanics">
      <Mechanics />
    </Route>
 

    </Router>;
};

ReactDOM.render(<Index />, document.querySelector('#root'));