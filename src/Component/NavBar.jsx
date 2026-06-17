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
        <Link to='/product'>Products</Link>
        <Link to= '/cart'>Cart</Link>
        <Link to= '/loademore'>LoadeMore</Link>
        <Link to= '/loadMoreUsers'>UsersLodeMore</Link>
        <Link to= '/BlogGrid'>BlogeGrid</Link>
        
      </nav>
    </div>
  );
}

export default NavBar
