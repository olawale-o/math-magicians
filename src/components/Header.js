import React from 'react';
import './Header.css';
import NavLink from './NavLink';

const Header = () => {
  const links = [
    {
      id: 1,
      name: 'Home',
      link: '/',
    },
    {
      id: 2,
      name: 'Calculator',
      link: '/calculator',
    },
    {
      id: 3,
      name: 'Quote',
      link: '/quote',
    },
  ];
  const tabs = links.map(({
    id, name, link,
  }) => (
    <NavLink id={id} name={name} link={link} key={id} />
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
