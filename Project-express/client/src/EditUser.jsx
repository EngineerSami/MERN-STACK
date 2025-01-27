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



  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label> <br/>
          <input type="text" name="id" value={editedUser.id} disabled style={{width:'600px'}}/>
        </div>
        <div>
          <label>Name:</label> <br/>
          <input type="text" name="name" value={editedUser.name} onChange={handleChange} style={{width:'600px'}}/>
        </div>
        <div>
          <label>Email:</label> <br/>
          <input type="email" name="email" value={editedUser.email} onChange={handleChange} style={{width:'600px'}}/>
        </div>
        <div>
          <label>Age:</label> <br/>
          <input type="text" name="age" value={editedUser.age} onChange={handleChange} style={{width:'600px'}}/>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default EditUser;
