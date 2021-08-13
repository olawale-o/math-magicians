import React from 'react';
import './Header.css';
import NavLink from './NavLink';

const Header = () => {
  const links = [
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'Calculator',
    },
    {
      id: 3,
      name: 'Quote',
    },
  ];
  const tabs = links.map(({
    id, name,
  }) => (
    <NavLink id={id} name={name} key={id} />
  ));
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <a href="/#">Math Magicians</a>
        </div>
        <ul className="nav-list">{tabs}</ul>
      </nav>
    </header>
  );
};

export default Header;
