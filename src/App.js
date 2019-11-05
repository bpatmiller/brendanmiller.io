import React from "react";
import "./App.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import TrackPage from "./pages/TrackPage";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/test" component={TestPage} />
          <Route exact path="/track" component={TrackPage}/>
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
