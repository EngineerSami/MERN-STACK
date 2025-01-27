import React, { useState } from 'react';
import axios from 'axios';

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
    <div className='main'>
      <h2>Add User</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label> <br/>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} style={{width:'400px'}}/>
        </div>
        <div>
          <label>Email:</label> <br/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{width:'400px'}}/>
        </div>
        <div>
          <label>Age:</label> <br/>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{width:'400px'}}/>
        </div> <br/>
        <div>
          <button type="submit" style={{width:'100px'}}>Add User</button> <br/> <br />
        </div>
      </form>
      <button onClick={onCancel} style={{width:'100px'}}>Cancel</button>
    </div>
  );
}

export default AddUser;
