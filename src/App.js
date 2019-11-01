import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';

function App() {
  return (
    <div className="App">
    <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/test" component={TestPage} />
    </div>
  </Router>
    </div>
  );
}

export default App;
