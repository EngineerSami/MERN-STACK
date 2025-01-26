// AddUser.js
import React, { useState } from 'react';
import axios from 'axios';

function AddUser({ onUserAdded, onCancel }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name,
      age: parseInt(age),
    };

    axios
      .post('http://localhost:1306/api/users', newUser)
      .then((response) => {
        onUserAdded(response.data); 
        setName('');
        setAge('');
      })
      .catch((error) => {
        setError('Failed to add user. Please try again later.');
      });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Add User</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default AddUser;
