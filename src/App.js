import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Home />
      <Calculator />
      <Quote />
    </div>
  </BrowserRouter>
);

export default App;
