import React, {useContext} from "react";
import { Route, Switch, BrowserRouter as Router, __RouterContext } from "react-router-dom";
import { useTransition, animated} from "react-spring"; 

import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import TrackPage from "./pages/TrackPage";
import DrawPage from "./pages/DrawPage";
import Page404 from "./pages/Page404";

import "./scss/App.scss";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const { location } = useContext(__RouterContext)
  const transitions = useTransition(location, location => location.pathname, {
    initial: { opacity: 0},
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0}
  })
  return (
    transitions.map(({ item, props, key}) => (
      <animated.div 
        style={{...props, position: "absolute", height: "100%", width: "100%"}} 
        key={key}>
      <Switch location={item}>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/test" component={TestPage} />
      <Route exact path="/track" component={TrackPage} />
      <Route exact path="/draw" component={DrawPage} />
      <Route component={Page404} />
    </Switch>
    </animated.div>))
  );
}

export default App;
