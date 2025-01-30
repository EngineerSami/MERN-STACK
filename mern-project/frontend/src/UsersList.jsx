import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:8000/api/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete user');
        }
        // Remove the user from the state after successful deletion
        setUsers(users.filter((user) => user._id !== id));
        setMessage('User deleted successfully!');
      })
      .catch((error) => {
        setMessage(`Error: ${error.message || 'An error occurred'}`);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Link to="/create">Create User</Link>
      <h1>Users List</h1>
      <table border="1" cellPadding="10" style={{width:"100%"}}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>
                <Link to={`/edit/${user._id}`}>Edit</Link> | <a href="#" onClick={() => handleDeleteUser(user._id)}>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;