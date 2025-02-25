import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion'; 
import EditUser from './EditUser';
import AddUser from './AddUser';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editUser, setEditUser] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('acs'); 
  const [sortById, setSortById] = useState(true); 

  useEffect(() => {
    axios
      .get('http://localhost:2006/api/users')
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch(() => {
        setError('Failed to load users. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:2006/api/users/${id}`)
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch(() => {
        setError('Failed to delete user. Please try again later.');
      });
  };

  const handleEdit = (user) => {
    if (showAddUser) {
      alert("You can't open Edit while Add User is active.");
      return;
    }

    if (editUser) {
      alert("You are already editing a user.");
      return;
    }
  
    setEditUser(user);
  
setTimeout(() => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}, 400);
};
  

  const handleSaveEdit = (updatedUser) => {
    axios
      .put(`http://localhost:2006/api/users/${updatedUser.id}`, updatedUser)
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
        setEditUser(null);
      })
      .catch(() => {
        setError('Failed to save user. Please try again later.');
      });
  };

  const handleCancelEdit = () => {
    setEditUser(null);
  };

  const handleUserAdded = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setFilteredUsers((prevUsers) => [...prevUsers, newUser]);
    setShowAddUser(false);
  };

  const handleAddUserClick = () => {
    if (editUser) {
      alert("You can't open Add User while Edit is active.");
      return;
    }
  
    setShowAddUser((prevState) => {
      const newState = !prevState;
      if (newState) {
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
        }, 400);
      }
      return newState;
    });
  };
  

  const handleCancelAddUser = () => {
    setShowAddUser(false);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
  
    const normalizedQuery = query.replace(/\s+/g, '').toLowerCase();
    
    setSearchQuery(query);
    const filtered = users.filter((user) => {
      const normalizedUserName = user.name.replace(/\s+/g, '').toLowerCase();
      return normalizedUserName.includes(normalizedQuery);
    });
  
    setFilteredUsers(filtered);
  };

  const handleSortByAge = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.age - b.age; 
      } else {
        return b.age - a.age; 
      }
    });

    setFilteredUsers(sortedUsers);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setSortById(false);
  };

  const handleSortById = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
    setFilteredUsers(sortedUsers);
    setSortById(true); 
  };

  

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <button onClick={handleAddUserClick} style={{ marginBottom: '20px' }}>
        Add User
      </button>
      <h1>User List</h1>

      <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search by Name" style={{ marginBottom: '20px', padding: '8px', fontSize: '14px', width: '300px', }}/>

      <button onClick={handleSortByAge} style={{ marginBottom: '20px', marginLeft: '10px' }}>
        Sort by Age ({sortOrder === 'asc' ? 'Min to Max' : 'Max to Min'})
      </button>
      <button onClick={handleSortById} style={{ marginBottom: '20px', marginLeft: '10px' }}>
        Sort by ID
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div style={{ maxHeight: '350px', overflowY: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
          {filteredUsers.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'red' }}>
              No users found.{' '}
              <a onClick={handleAddUserClick} href="#">
                Add Users
              </a>
            </p>
          ) : (
            <table className="mytable" border="1" style={{ margin: '0 auto', borderCollapse: 'collapse', width: '100%', textAlign: 'center',}}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <a onClick={() => handleEdit(user)} href="#">
                        Edit
                      </a>{' '}
                      |{' '}
                      <a onClick={() => handleDelete(user.id)} href="#">
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}


        </div>
      )}
        <AnimatePresence>
        {editUser && (
          <motion.div key="edit-user" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5 }} style={{ overflow: 'hidden', marginTop: '20px', padding: '10px' }}>
            <EditUser user={editUser} onSave={handleSaveEdit} onCancel={handleCancelEdit} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAddUser && (
          <motion.div key="add-user" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5 }} style={{ overflow: 'hidden', marginTop: '20px', padding: '10px' }} >
            <AddUser onUserAdded={handleUserAdded} onCancel={handleCancelAddUser} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
