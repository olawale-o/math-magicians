import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({
  id, name, link,
}) => (
  <li key={id} className="nav-item">
    <Link to={link} role="button" className="nav-link">
      {name}
    </Link>
  </li>
);

export default NavLink;

NavLink.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
