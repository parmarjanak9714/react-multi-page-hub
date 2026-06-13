import React from 'react'

const CompanyProfile = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
      <h1>TechSol India - Verified Business Profile</h1>
      <hr />
      <br />
      <h3>Registration No: #987654321</h3>
      <p>This is a private hidden page that only opens from the Company section.</p>
      <br />
      <h3>Our Corporate Services:</h3>
      <ul>
        <li>Enterprise React Applications</li>
        <li>Advanced Form Validation Ecosystems</li>
        <li>Cloud Infrastructure Setup</li>
      </ul>
    </div>
  )
}

export default CompanyProfile
