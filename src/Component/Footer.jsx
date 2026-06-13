import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>

    <div className='footer-link'>
      <h2>My Website</h2>
      <Link to= '/'>Home</Link>
      <Link to= '/about'>About Us</Link>
      <Link to='/profile'>Profile</Link>
      <Link to= '/contact'>Contact</Link>
    </div>
    <p>© 2026 All Rights Reserved</p>
 </footer>

  )
}

export default Footer
