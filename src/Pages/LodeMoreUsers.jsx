import React, { useState } from 'react'; // અહીંથી useEffect કાઢી નાખ્યો

const initialUsers = [
  { id: 1, name: "Amit kantariya", position: "Frontend Developer", salary: 50000 },
  { id: 2, name: "Bhavin parmar", position: "Backend Developer", salary: 75000 },
  { id: 3, name: "Chirag parmar", position: "UI/UX Designer", salary: 40000 },
  { id: 4, name: "Deepak chauhan", position: "Project Manager", salary: 90000 },
  { id: 5, name: "Esha jambucha", position: "QA Engineer", salary: 60000 },
  { id: 6, name: "Hardik Parmar", position: "Full Stack Developer", salary: 85000 },
  { id: 7, name: "Jignesh chauhan", position: "Data Analyst", salary: 45000 },
  { id: 8, name: "Karan mori", position: "DevOps Engineer", salary: 95000 },
  { id: 9, name: "Manoj parmar", position: "SEO Specialist", salary: 55000 },
  { id: 10, name: "Nitin Baraiya", position: "HR Manager", salary: 70000 },
  { id: 11, name: "Bharat Baraiya", position: "hardware", salary: 20000 },
  { id: 12, name: "Naresh chuhan", position: "Data Analyst", salary: 25000 },
  { id: 13, name: "Arayan Baraiya", position: "Python Developer", salary: 28000 },
  { id: 14, name: "Arjun Gouswami", position: "System Design", salary: 29000 }
];

const LoadMoreUsers = () => {
  // 1st show users + 4
  const [visibleCount, setVisibleCount] = useState(4);

  // button click this function active
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  
  const displayedUsers = initialUsers.slice(0, visibleCount);

  const hasMore = visibleCount < initialUsers.length;

  return (
    <div style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto', 
    fontFamily: '"Segoe UI", Roboto, sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      
      {/* heading section*/}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '32px', fontWeight: '700', marginBottom: '10px' }}>Team Directory</h1>
        <p style={{ color: '#7f8c8d', fontSize: '16px' }}>Showing <b>{displayedUsers.length}</b>
         of {initialUsers.length} professionals</p>
      </div>

      {/* usergrid layout*/}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
        {displayedUsers.map((user) => (
          <div 
            key={user.id} 
            style={{ 
              padding: '25px', 
              background: '#ffffff', 
              borderRadius: '16px', 
              boxShadow: '0 10px 20px rgba(0,0,0,0.05)', 
              borderTop: '5px solid #3498db',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50', fontSize: '20px', fontWeight: '600' }}>{user.name}</h3>
              <span style={{ display: 'inline-block', padding: '4px 12px', background: '#e8f4fd', 
                color: '#3498db', borderRadius: '20px', fontSize: '12px', fontWeight: '600', marginBottom: '15px' }}>
                {user.position}
              </span>
            </div>

            <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #f1f2f6',
                 display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#95a5a6', fontSize: '14px' }}>Estimated Salary</span>
              <span style={{ color: '#2ecc71', fontWeight: '700', fontSize: '18px' }}>
                ₹{user.salary.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>

      {/* button section*/}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        {hasMore ? (
        
          <button 
            onClick={handleLoadMore}
            style={{
              padding: '12px 30px',
              backgroundColor: '#3498db',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(52, 152, 219, 0.3)',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
          >
            Load More Professionals
          </button>
        ) : (
        
          <div style={{ color: '#95a5a6', fontSize: '15px', padding: '10px' }}>
              You've reached the end of the directory.
          </div>
        )}
      </div>

    </div>
  );
};

export default LoadMoreUsers;
