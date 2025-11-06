import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './CSS/navbar.css'
import { useAlert } from '../context/AlertContext';


const Navbar = () => {
  let navigate = useNavigate();
  const {showAlert} = useAlert()
  const logout =()=>{
    localStorage.removeItem('token')
    navigate('/login')
    showAlert('you have logged out','warning')
  }
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
    {!localStorage.getItem('token')?<ul className="user-links">
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/signup'>Sign Up</Link></li>
    </ul>      
    :<button className='btn mx-2' onClick={logout}>Logout</button>}
  </nav>
      <hr />
</div>
  );
};

export default Navbar;