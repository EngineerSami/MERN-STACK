import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]); 
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get('http://localhost:1306/api/users') 
      .then((response) => {
        console.log('API Response:', response.data);
        setUsers(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setError('Failed to load users. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) 
      : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) 
      : (
        <table border="1" style={{ margin: '0 auto', borderCollapse: 'collapse', width: '150%' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                </tr> 
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
