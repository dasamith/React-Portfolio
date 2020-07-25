import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Portfolio from './portfolio';
import Home from "./home";
import Contact from "./contact";
import "./style.css"



function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>

      </Switch>

    </Router >
  );
}

export default App;
