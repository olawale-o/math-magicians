import PropTypes from 'prop-types';

const Button = ({ cssClass, handleCalc, text }) => {
  return (
    <button type="button" className={cssClass} onClick={handleCalc}>{text}</button>
  );
}

export default Button;

Button.propTypes = {
  cssClass: PropTypes.string.isRequired,
  handleCalc: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
