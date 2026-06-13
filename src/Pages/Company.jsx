import React from 'react'

const Company = () => {
  return (
    <div>
      <h1>Our Company</h1>
      <p>
        Our company is focused on creating modern, user-friendly, 
        and responsive web applications. We work with creativity, 
        innovation, and technology to deliver high-quality digital 
        experiences for users around the world.
      </p>
      <br/>
      <p>To view our verified corporate documents:</p>
      <br/>
      <a 
        href="/Company_Profile"      // નવા પેજનો રસ્તો (Path)
        rel="noopener noreferrer"    // સિક્યોરિટી માટે
        style={{
          color: '#007bff',
          textDecoration: 'underline',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Click here to open Official Profile ➔
      </a>
    </div>
  )
}

export default Company
