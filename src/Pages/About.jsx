import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Company from './Company'
import History from './History'

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are passionate about creating simple and creative digital experiences. 
        Our mission is to provide quality services, modern designs,
         and helpful solutions that make things easier and better for everyone.
         We believe in innovation, learning, and delivering the best experience to our users</p>
         <div className='about-links'>
         <Link to= 'company'>Company</Link>
         <Link to='history'>History</Link>
         <Outlet/>
         </div>


    </div>
  )
}

export default About
