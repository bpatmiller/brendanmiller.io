import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";

import "./scss/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
