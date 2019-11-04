import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import Page404 from './pages/Page404'

function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/mira" component={TestPage} />
      <Route component={Page404}/>
  </Router>
    </div>
  );
}

export default App;
