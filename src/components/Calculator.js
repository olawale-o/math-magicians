import React from 'react';
import operate from '../logic/operate';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    const { input } = this.state;
    return (
      <div className="calculator">
        <div className="field">
          <input className="input" value={input} onChange={() => this.handleOnChange} disabled />
        </div>
        <div className="buttons-grid">
          <button type="button" className="btn">AC</button>
          <button type="button" className="btn">+/-</button>
          <button type="button" className="btn">%</button>
          <button type="button" className="btn btn-orange">÷</button>
          <button type="button" className="btn">7</button>
          <button type="button" className="btn">8</button>
          <button type="button" className="btn">9</button>
          <button type="button" className="btn btn-orange">x</button>
          <button type="button" className="btn">4</button>
          <button type="button" className="btn">5</button>
          <button type="button" className="btn">6</button>
          <button type="button" className="btn btn-orange">-</button>
          <button type="button" className="btn">1</button>
          <button type="button" className="btn">2</button>
          <button type="button" className="btn">3</button>
          <button type="button" className="btn btn-orange">+</button>
          <button type="button" className="btn span-2">0</button>
          <button type="button" className="btn">.</button>
          <button type="button" className="btn btn-orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
