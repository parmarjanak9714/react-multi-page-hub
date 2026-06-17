import React, { useState, useEffect } from 'react';

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

const SmoothTransitionUsers = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isLoading) return;

      const scrollTop = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.offsetHeight;

      
      if (scrollTop >= documentHeight - 300) {
        if (visibleCount < initialUsers.length) {
          setIsLoading(true);

        
          setTimeout(() => {
            setVisibleCount((prevCount) => prevCount + 4);
            setIsLoading(false);
          }, 400); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount, isLoading]);

  const displayedUsers = initialUsers.slice(0, visibleCount);

  return (
    <div style={{ padding: '40px 20px', maxWidth: '900px',
     margin: '0 auto', fontFamily: '"Segoe UI", Roboto, sans-serif',
      backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      
      {/* heading */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '32px', 
          fontWeight: '700', marginBottom: '10px' }}>Team Directory</h1>
        <p style={{ color: '#7f8c8d', fontSize: '16px' }}>Showing <b>
          {displayedUsers.length}</b> of {initialUsers.length} professionals</p>
      </div>

      {/* યુઝર ગ્રીડ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
        {displayedUsers.map((user) => (
          <div 
            key={user.id} 
            // 'user-card' 
            className="user-card"
            style={{ 
              padding: '25px', 
              background: '#ffffff', 
              borderRadius: '16px', 
              boxShadow: '0 10px 20px rgba(0,0,0,0.05)', 
              borderTop: '5px solid #3498db',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            
              animation: 'slideUpFade 0.5s ease-out forwards',
              
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <div>
              <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50', 
                fontSize: '20px', fontWeight: '600' }}>{user.name}</h3>
              <span style={{ display: 'inline-block', padding: '4px 12px',
                 background: '#e8f4fd', color: '#3498db', borderRadius: '20px',
                  fontSize: '12px', fontWeight: '600', marginBottom: '15px' }}>
                {user.position}
              </span>
            </div>

            <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #f1f2f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#95a5a6', fontSize: '14px' }}>Estimated Salary</span>
              <span style={{ color: '#2ecc71', fontWeight: '700', fontSize: '18px' }}>
                ₹{user.salary.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>

      {/* loader message section */}
      <div style={{ textAlign: 'center', marginTop: '40px', minHeight: '50px' }}>
        {isLoading ? (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#3498db', fontWeight: '600' }}>
            <span className="spinner" style={{
              width: '20px',
              height: '20px',
              border: '3px solid #f3f3f3',
              borderTop: '3px solid #3498db',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'spin 0.8s linear infinite'
            }}></span>
            Loading more team members...
          </div>
        ) : visibleCount >= initialUsers.length ? (
          <div style={{ color: '#95a5a6', fontSize: '15px' }}>
            You've reached the end of the directory.
          </div>
        ) : (
          <div style={{ color: '#95a5a6', fontSize: '14px' }}>
            ↓ Scroll down for more
          </div>
        )}
      </div>

      
      <style>{`
        /* (Hover) */
        .user-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.12) !important;
          border-top-color: #2ecc71 !important; 
        }

        
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(30px); 
          }
          to {
            opacity: 1;
            transform: translateY(0); 
          }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

    </div>
  );
};

export default SmoothTransitionUsers;
