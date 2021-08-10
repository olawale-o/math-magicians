import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cssClass, handleCalc, text } = this.props;
    return (
      <button type="button" className={cssClass} onClick={handleCalc}>{text}</button>
    );
  }
}

export default Button;

Button.propTypes = {
  cssClass: PropTypes.string.isRequired,
  handleCalc: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
