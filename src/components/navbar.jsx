import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/navbar.css'
const Navbar = () => {
  return (
<div>
  <nav className="navbar">
    <div className="logo mx-2"><img src="./favicon.ico" alt="icon" />Wellcome to E-Notes</div>

  <input type="checkbox" id="menu-check" hidden/>

  <label htmlFor="menu-check" className="menu-toggle">Menu</label>
    <ul className="nav-links">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  </nav>
      <hr />
</div>
  );
};

export default Navbar;