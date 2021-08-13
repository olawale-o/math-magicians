import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/Calculator';

const App = () => (
  <div className="App">
    <Header />
    <Home />
    <Calculator />
  </div>
);

export default App;
