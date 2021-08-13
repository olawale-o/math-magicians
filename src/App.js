import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <div className="App">
    <Header />
    <Home />
    <Calculator />
    <Quote />
  </div>
);

export default App;
