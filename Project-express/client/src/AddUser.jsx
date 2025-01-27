import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function AddUser({ onUserAdded, onCancel }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name,
      email,
      age: parseInt(age),
    };

    axios
      .post('http://localhost:2006/api/users', newUser)
      .then((response) => {
        onUserAdded(response.data); 
        setName('');
        setAge('');
        setEmail('');
      })
      .catch((error) => {
        setError('Failed to add user. Please try again later.');
      });
  };

  return (
    <div className='main' style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Add User</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label> <br/>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label>Email:</label> <br/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Age:</label> <br/>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div> <br/>
        <div>
          <button type="submit">Add User</button> <br/> <br />
        </div>
      </form>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default AddUser;
