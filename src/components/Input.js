import { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputValue }) => {
  const [input, setInput] = useState('');

  const handleOnChange = (event) => {
    setInput(event.target.value);
  }

  return (
    <div className="field">
      <input className="input" value={inputValue} onChange={() => handleOnChange()} disabled />
    </div>
  );
}


export default Input;

Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
};
