import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to= '/profile'>Profile</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/faq'>FAQ</Link>
        <Link to='/users'>Users</Link>
        <Link to= '/weather'>Weather</Link>
      </nav>
    </div>
  );
}

export default NavBar
