import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
<div>
  <nav className="navbar">
    <div className="logo"><img src="./favicon.ico" alt="icon" />wellcome to E-Note</div>

  <input type="checkbox" id="menu-check" hidden/>

  <label htmlFor="menu-check" className="menu-toggle">Menu</label>
    <ul className="nav-links">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  </nav>
</div>
  );
};

export default Navbar;