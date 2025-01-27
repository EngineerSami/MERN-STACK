import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
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
      .get('http://localhost:2006/api/users')
      .then((response) => {
        setUsers(response.data);
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
    setEditUser(user);
  };

  const handleSaveEdit = (updatedUser) => {
    axios
      .put(`http://localhost:2006/api/users/${updatedUser.id}`, updatedUser)
      .then((response) => {
        setUsers(response.data);
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
    setShowAddUser(false);
  };

  const handleAddUserClick = () => {
    if (editUser) {
      alert("You can't open Add User while Edit is active.");
      return;
    }
    setShowAddUser(true);
  };

  const handleCancelAddUser = () => {
    setShowAddUser(false);
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <button onClick={handleAddUserClick} style={{ marginBottom: '20px' }}>
        Add User
      </button>
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div>
          {users.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'red' }}>
              The table is empty.{' '}
              <a onClick={handleAddUserClick} href="#">
                Add Users
              </a>
            </p>
          ) : (
            <table className="mytable" border="1" style={{ margin: '0 auto', borderCollapse: 'collapse', width: '120%', textAlign: 'center', }} >
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
                {users.map((user) => (
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
          <AnimatePresence>
            {editUser && (
              <motion.div key="edit-user" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5 }} style={{ overflow: 'hidden', marginTop: '20px', padding: '10px', }} >
                <EditUser user={editUser} onSave={handleSaveEdit} onCancel={handleCancelEdit} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
      <AnimatePresence>
        {showAddUser && (
          <motion.div key="add-user" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5 }} style={{ overflow: 'hidden', marginTop: '20px', padding: '10px' }}>
              <AddUser onUserAdded={handleUserAdded} onCancel={handleCancelAddUser} />
          </motion.div>

        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
