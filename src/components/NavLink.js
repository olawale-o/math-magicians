import PropTypes from 'prop-types';

const NavLink = ({
  id, name,
}) => (
  <li key={id} className="nav-item">
    <a href="/#" role="button" className="nav-link">
      {name}
    </a>
  </li>
);

export default NavLink;

NavLink.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
