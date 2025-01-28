import React, { useEffect, useState } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '' });
  const [editingUser, setEditingUser] = useState(null); // Track the user being edited
  const [message, setMessage] = useState(null);
  const [backendErrors, setBackendErrors] = useState([]);
  const [formErrors, setFormErrors] = useState({}); // Track form validation errors

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

  const validateField = (name, value) => {
    const errors = { ...formErrors };



    setFormErrors(errors); // Update form errors state
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });

    // Validate the input field
    validateField(name, value);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    setBackendErrors([]);
    setMessage(null);

    // Check if the form has any errors
    if (Object.keys(formErrors).length > 0) {
      setMessage('Please fix the validation errors before submitting.');
      return;
    }

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
        setNewUser({ firstName: '', lastName: '' });
        setMessage('User added successfully!');
      })
      .catch((err) => {
        try {
          const errorData = JSON.parse(err.message);
          if (errorData.errors) {
            setBackendErrors(errorData.errors);
          } else {
            setMessage(`Error: ${errorData.message || 'An error occurred'}`);
          }
        } catch (parseError) {
          setMessage('Error: Failed to add user');
        }
      });
  };

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:8000/api/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete user');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(users.filter((user) => user._id !== id));
        setMessage(data.message);
      })
      .catch((err) => {
        setMessage('Error: Failed to delete user');
      });
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setNewUser({ firstName: user.firstName, lastName: user.lastName });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    setBackendErrors([]);
    setMessage(null);

    // Check if the form has any errors
    if (Object.keys(formErrors).length > 0) {
      setMessage('Please fix the validation errors before submitting.');
      return;
    }

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
        setNewUser({ firstName: '', lastName: '' });
        setEditingUser(null); // Reset editing state
        setMessage('User updated successfully!');
      })
      .catch((err) => {
        try {
          const errorData = JSON.parse(err.message);
          if (errorData.errors) {
            setBackendErrors(errorData.errors);
          } else {
            setMessage(`Error: ${errorData.message || 'An error occurred'}`);
          }
        } catch (parseError) {
          setMessage('Error: Failed to update user');
        }
      });
  };

  const handleCancelEdit = () => {
    setEditingUser(null); // Reset the editing user state
    setNewUser({ firstName: '', lastName: '' }); // Clear the form fields
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
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.firstName} {user.lastName}{' '}
            <a href="#" onClick={() => handleEditUser(user)}>Edit</a>|<a href="#" onClick={() => handleDeleteUser(user._id)}>Delete</a>
          </li>
        ))}
      </ul>

      <h2>{editingUser ? 'Edit User' : 'Add New User'}</h2>
      <form onSubmit={editingUser ? handleUpdateUser : handleAddUser}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={newUser.firstName}
          onChange={handleInputChange}
        />
        {formErrors.firstName && <p style={{ color: 'red' }}>{formErrors.firstName}</p>}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={newUser.lastName}
          onChange={handleInputChange}
        />
        {formErrors.lastName && <p style={{ color: 'red' }}>{formErrors.lastName}</p>}
        <button type="submit">{editingUser ? 'Update User' : 'Add User'}</button>
        {editingUser && (
          <button type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </form>

      {message && <p style={{ color: 'green' }}>{message}</p>}

      {backendErrors.length > 0 && (
        <div style={{ backgroundColor:'black', color: 'red', marginTop: '10px' }}>
          <ul>
            {backendErrors.map((error, index) => (
              <li key={index}>{error.msg || error}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default UsersList;
