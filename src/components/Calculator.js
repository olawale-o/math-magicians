import React from 'react';
import calculate from '../logic/calculate';
import Input from './Input';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.calc = this.calc.bind(this);
  }

  calc(event) {
    this.setState((prevState) => calculate(prevState, event.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    const keyedInput = () => {
      if (!next && !operation) {
        return total || '0';
      }
      if (total && next && operation) {
        return next;
      }
      if (!total || !operation) {
        return next;
      }
      return total || '0';
    };

    return (
      <div className="calculator">
        <Input inputValue={keyedInput() || '0'} />
        <div className="buttons-grid">
          <Button cssClass="btn" text="AC" handleCalc={this.calc} />
          <Button cssClass="btn" text="+/-" handleCalc={this.calc} />
          <Button cssClass="btn" text="%" handleCalc={this.calc} />
          <Button cssClass="btn btn-orange" text="+" handleCalc={this.calc} />
          <Button cssClass="btn" text="7" handleCalc={this.calc} />
          <Button cssClass="btn" text="8" handleCalc={this.calc} />
          <Button cssClass="btn" text="9" handleCalc={this.calc} />
          <Button cssClass="btn btn-orange" text="x" handleCalc={this.calc} />
          <Button cssClass="btn" text="4" handleCalc={this.calc} />
          <Button cssClass="btn" text="5" handleCalc={this.calc} />
          <Button cssClass="btn" text="6" handleCalc={this.calc} />
          <Button cssClass="btn btn-orange" text="-" handleCalc={this.calc} />
          <Button cssClass="btn" text="1" handleCalc={this.calc} />
          <Button cssClass="btn" text="2" handleCalc={this.calc} />
          <Button cssClass="btn" text="3" handleCalc={this.calc} />
          <Button cssClass="btn btn-orange" text="+" handleCalc={this.calc} />
          <Button cssClass="btn span-2" text="0" handleCalc={this.calc} />
          <Button cssClass="btn" text="." handleCalc={this.calc} />
          <Button cssClass="btn btn-orange" text="=" handleCalc={this.calc} />
        </div>
      </div>
    );
  }
}

export default Calculator;
