// EditUser.js
import React, { useState } from 'react';

function EditUser({ user, onSave, onCancel }) {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedUser);
  };

const Styling = {
  editFormInput: {
    width: '100%',
    padding: 'var(--input-padding)',
    marginTop: '5px',
    border: '1px solid var(--input-border-color)',
    borderRadius: 'var(--border-radius)',
    backgroundColor: 'var(--input-background-color)',
    color: 'var(--input-text-color)',
    fontSize: '1rem',
    marginLift:'30px'
  },
  editFormInputFocus: {
    outline: 'none',
    borderColor: 'var(--primary-color)',
    backgroundColor: '#eafaf1',
  },
  editFormInputDisabled: {
    backgroundColor: '#f0f0f0',
  },
}

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label> <br/>
          <input type="text" name="id" value={editedUser.id} disabled />
        </div>
        <div>
          <label>Name:</label> <br/>
          <input type="text" name="name" value={editedUser.name} onChange={handleChange} style={{...Styling}} />
        </div>
        <div>
          <label>Email:</label> <br/>
          <input type="email" name="email" value={editedUser.email} onChange={handleChange} style={{...Styling}}/>
        </div>
        <div>
          <label>Age:</label> <br/>
          <input type="text" name="age" value={editedUser.age} onChange={handleChange} style={{...Styling}}/>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default EditUser;
