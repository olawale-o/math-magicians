import { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange() {
    this.setState({});
  }

  render() {
    const { inputValue } = this.props;
    return (
      <div className="field">
        <input className="input" value={inputValue} onChange={() => this.handleOnChange} disabled />
      </div>
    );
  }
}

export default Input;

Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
};
