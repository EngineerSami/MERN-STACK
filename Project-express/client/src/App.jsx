// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditUser from './EditUser';
import AddUser from './AddUser';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editUser, setEditUser] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:1306/api/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setError('Failed to load users. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:1306/api/users/${id}`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setError('Failed to delete user. Please try again later.');
      });
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleSaveEdit = (updatedUser) => {
    axios
      .put(`http://localhost:1306/api/users/${updatedUser.id}`, updatedUser)
      .then((response) => {
        setUsers(response.data);
        setEditUser(null);
      })
      .catch((error) => {
        setError('Failed to save user. Please try again later.');
      });
  };

  const handleCancelEdit = () => {
    setEditUser(null);
  };

  const handleUserAdded = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setShowAddUser(false); 
  };

  const handleAddUserClick = () => {
    setShowAddUser(true); 
  };

  const handleCancelAddUser = () => {
    setShowAddUser(false); 
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {!showAddUser ? (
        <>
          <button onClick={handleAddUserClick}>Add User</button>
          <h1>User List</h1>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p style={{ color: 'red' }}>{error}</p>
          ) : (
            <div>
              <table border="1" style={{ margin: '0 auto', borderCollapse: 'collapse', width: '150%' }}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>
                        <a onClick={() => handleEdit(user)}>Edit</a> |{' '}
                        <a onClick={() => handleDelete(user.id)}>Delete</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {editUser && (
                <EditUser user={editUser} onSave={handleSaveEdit} onCancel={handleCancelEdit} />
              )}
            </div>
          )}
        </>
      ) : (
        <AddUser onUserAdded={handleUserAdded} onCancel={handleCancelAddUser} />
      )}
    </div>
  );
}

export default App;
