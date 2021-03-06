import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Input from './Input';
import Button from './Button';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const calc = (event) => {
    try {
      const result = calculate(state, event.target.textContent);
      setState({ ...state, ...result });
    } catch (e) {
      setState({ total: 'nan', operation: null, next: null });
    }
  };

  const { total, next, operation } = state;
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
      <h4>
        Let
        &lsquo;
        s
        &nbsp; do some math!
      </h4>
      <div className="CalculatorArea">
        <Input inputValue={keyedInput() || '0'} />
        <div className="buttons-grid">
          <Button cssClass="btn" text="AC" handleCalc={calc} />
          <Button cssClass="btn" text="+/-" handleCalc={calc} />
          <Button cssClass="btn" text="%" handleCalc={calc} />
          <Button cssClass="btn btn-orange" text="÷" handleCalc={calc} />
          <Button cssClass="btn" text="7" handleCalc={calc} />
          <Button cssClass="btn" text="8" handleCalc={calc} />
          <Button cssClass="btn" text="9" handleCalc={calc} />
          <Button cssClass="btn btn-orange" text="x" handleCalc={calc} />
          <Button cssClass="btn" text="4" handleCalc={calc} />
          <Button cssClass="btn" text="5" handleCalc={calc} />
          <Button cssClass="btn" text="6" handleCalc={calc} />
          <Button cssClass="btn btn-orange" text="-" handleCalc={calc} />
          <Button cssClass="btn" text="1" handleCalc={calc} />
          <Button cssClass="btn" text="2" handleCalc={calc} />
          <Button cssClass="btn" text="3" handleCalc={calc} />
          <Button cssClass="btn btn-orange" text="+" handleCalc={calc} />
          <Button cssClass="btn span-2" text="0" handleCalc={calc} />
          <Button cssClass="btn" text="." handleCalc={calc} />
          <Button cssClass="btn btn-orange" text="=" handleCalc={calc} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
