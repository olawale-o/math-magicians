import React from 'react';
import './Quote.css';

const quoteStyle = {
  width: '85%',
  margin: '10rem auto',
  fontSize: '3.5rem',
  fontWeight: 'light',
};
const Quote = () => (
  <div className="Quote">
    <p style={quoteStyle} data-testid="quote">
      Mathematics is not about numbers, equations, computations
      <br />
      or algorithms: it is about understanding. -William Paul Thurston
    </p>
  </div>
);

export default Quote;
