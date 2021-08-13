import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
    </div>
  </Router>
);

export default App;
