import { useState, useEffect } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', age: '' });
  const [editingUser, setEditingUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [backendErrors, setBackendErrors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    setBackendErrors([]);  // Clear previous backend errors
    setMessage(null);      // Clear any success message

    fetch('http://localhost:8000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(JSON.stringify(errorData));
          });
        }
        return response.json();
      })
      .then((data) => {
        setUsers([...users, data]);
        setNewUser({ firstName: '', lastName: '', age: '' });
        setMessage('User added successfully!');
      })
      .catch((err) => {
        try {
          const errorData = JSON.parse(err.message);
          if (errorData.errors) {
            const backendErrorMessages = errorData.errors.map((error) => error);
            setBackendErrors(backendErrorMessages);
          } else {
            setMessage(`Error: ${errorData.message || 'An error occurred'}`);
          }
        } catch (parseError) {
          setMessage('Error: Failed to add user');
        }
      });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    setBackendErrors([]);  // Clear previous backend errors
    setMessage(null);      // Clear any success message

    fetch(`http://localhost:8000/api/users/${editingUser._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(JSON.stringify(errorData));
          });
        }
        return response.json();
      })
      .then((data) => {
        setUsers(users.map((user) => (user._id === data._id ? data : user)));
        setNewUser({ firstName: '', lastName: '', age: '' });
        setEditingUser(null);
        setMessage('User updated successfully!');
      })
      .catch((err) => {
        try {
          const errorData = JSON.parse(err.message);
          if (errorData.errors) {
            const backendErrorMessages = errorData.errors.map((error) => error);
            setBackendErrors(backendErrorMessages);
          } else {
            setMessage(`Error: ${errorData.message || 'An error occurred'}`);
          }
        } catch (parseError) {
          setMessage('Error: Failed to add/update user');
        }
      });
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setNewUser({ firstName: '', lastName: '', age: '' });
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setNewUser({ firstName: user.firstName, lastName: user.lastName, age: user.age });
  };

  // Handle the delete button click
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Users List</h1>
      <table border="1" cellPadding="10" style={{ width: '100%' }}>
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
                <a href="#" onClick={() => handleEditUser(user)}>Edit</a> |{" "}
                <a href="#" onClick={() => handleDeleteUser(user._id)}>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>{editingUser ? 'Edit User' : 'Add New User'}</h2>
      <form onSubmit={editingUser ? handleUpdateUser : handleAddUser}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={newUser.firstName}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={newUser.lastName}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newUser.age}
          onChange={handleInputChange}
        />

        <button type="submit">{editingUser ? 'Update User' : 'Add User'}</button>
        {editingUser && (
          <button type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </form>

      {message && <p style={{ color: 'green' }}>{message}</p>}

      {backendErrors.length > 0 && (
        <div style={{ backgroundColor: 'black', color: 'red', marginTop: '10px' }}>
          <ul>
            {backendErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default UsersList;
