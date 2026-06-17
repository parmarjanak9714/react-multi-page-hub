import React, { useState } from 'react'
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
  { id:11, name: "Bharat Baraiya", position: "hardwere", salary:20000},
  { id:12, name: "Naresh chuhan", position: "Data Analist", salary:25000},
  { id:13, name: "Arayan Baraiya", position: "Paython Devloper", salary:28000},
  { id:14, name: "Arjun Gouswami", position: "Sistem Desing", salary:29000}
];

const Users = () => {
    const [users,setUsers] = useState(initialUsers);
    const [searchBar,setSearchBar]= useState("");
    const [sortBy,setSortBy] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 4;

    //  deleted function
  const handleDelete = (id) => {
    const updatedList = users.filter(user => user.id !== id);
    setUsers(updatedList);
  };

  // search and sorting 
  let displayedUsers = [...users];

  // name fillter
  if (searchBar !== "") {
    displayedUsers = displayedUsers.filter(user =>
      user.name.toLowerCase().includes(searchBar.toLowerCase())
    );
  }

  // sallary low-high 
  if (sortBy === "low-to-high") {
    displayedUsers.sort((a, b) => a.salary - b.salary);
  } else if (sortBy === "high-to-low") {
    displayedUsers.sort((a, b) => b.salary - a.salary);
  }

  
  const indexOfLastUsers = currentPage * itemPerPage;
  const indexOfFirstUsers = indexOfLastUsers - itemPerPage;

  const currentUsers = displayedUsers.slice(indexOfFirstUsers,indexOfLastUsers);

  const totalPage = Math.ceil(displayedUsers.length / itemPerPage);

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Users Management</h1>
      <br />
      <h3>Total Users : {displayedUsers.length}</h3>
        <br/>
      {/* searchBar and dropDwon*/}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="Search user by name..." 
          value={searchBar}
          onChange={(e) => setSearchBar(e.target.value)}
          style={{ padding: '10px', width: '60%', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
        />

        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: '10px', width: '40%', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
        >
          <option value="">-- Sort By Salary --</option>
          <option value="low-to-high">Salary: Low to High</option>
          <option value="high-to-low">Salary: High to Low</option>
        </select>
      </div>

      {/* usersCard Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {displayedUsers.length > 0 ? (
          currentUsers.map((user) => (
            <div 
              key={user.id} 
              style={{ padding: '20px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}
            >
              {/* userName */}
              <h3 style={{ margin: '0 0 5px 0', color: '#222' }}>{user.name}</h3>
              
              {/* userPosition*/}
              <p style={{ color: '#007bff', fontWeight: 'bold', margin: '0 0 10px 0', fontSize: '14px' }}>
                Position: {user.position}
              </p>
              
              {/* userSallary */}
              <p style={{ color: '#555', margin: '0 0 15px 0', fontSize: '15px' }}>
                Salary: ₹{user.salary}
              </p>
              
              <button 
                type="button" 
                onClick={() => handleDelete(user.id)}
                style={{ padding: '6px 12px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#888' }}>No users found.</p>
        )}
      </div>
      <br/><br/>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:"15px",marginTop:"30"}}>
        <button disabled={currentPage === 1}
        onClick={()=>setCurrentPage(currentPage - 1)}
        style={{ padding: "8px 16px", cursor: currentPage === 1 ? "not-allowed" : "pointer", opacity: currentPage === 1 ? 0.5 : 1 }}
        >
          Previous
        </button>

        <span>Page {currentPage} of {totalPage}</span>

        <button disabled={currentPage===totalPage}
        onClick={()=>setCurrentPage(currentPage + 1)}
        style={{ padding: "8px 16px", cursor: currentPage === totalPage ? "not-allowed" : "pointer", opacity: currentPage === totalPage ? 0.5 : 1 }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

  


export default Users
