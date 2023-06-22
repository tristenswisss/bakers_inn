import React, { useState } from 'react';
import logo from '../images/bakers-inn-logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? 'rgb(45, 1, 111)' : 'rgb(168, 160, 197)',
    };
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <NavLink to={'/'}>
        <img src={logo} alt="logo" />
      </NavLink>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <ul>
          <NavLink style={navLinkStyles} to={'/About'}>
            About Us
          </NavLink>
          <NavLink style={navLinkStyles} to={'/Products'}>
            Products
          </NavLink>
          <NavLink style={navLinkStyles} to={'/Recipes'}>
            Recipes
          </NavLink>
          <NavLink style={navLinkStyles} to={'/Kids'}>
            Kid's Corner
          </NavLink>
          <NavLink style={navLinkStyles} to={'/Contact'}>
            <button>Contact</button>
          </NavLink>
        </ul>
      </div>
      
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
