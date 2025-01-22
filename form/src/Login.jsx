import React, { useState } from 'react';

const LiveUpdateForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);

  const styling = {width:'100%' , height:'30px', fontSize:'20px'}

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value,});

    setErrors({...errors,[name]: '',});
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setUsers([...users, formData]);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Live Form with Validation</h2>
      <form onSubmit={handleAddUser}>
        <div>
          <label>First Name:</label>
          <br />
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} style={styling}/>
          {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
        </div>
        <br />
        <div>
          <label>Last Name:</label>
          <br />
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={styling}/>
          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
        </div>
        <br />
        <div>
          <label>Email:</label>
          <br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={styling}/>
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <br />
        <div>
          <label>Password:</label>
          <br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={styling}/>
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <br />
        <div>
          <label>Confirm Password:</label>
          <br />
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={styling}/>
          {errors.confirmPassword && (<p style={{ color: 'red' }}>{errors.confirmPassword}</p>)}
          </div>
          <br />
        <button type="submit">Add</button>
      </form>

      <h3>User Details</h3>
      <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
        <p>
          <strong>First Name:</strong> {formData.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {formData.lastName}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Password:</strong> {formData.password}
        </p>
        <p>
          <strong>Confirm Password:</strong>{formData.confirmPassword}
        </p>
      </div>

      <h3>Users List</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map((user, index) => (
          <div key={index}>
            <li style={{ padding: '10px 0' , borderBottom: '1px solid #ccc',}}>
              {user.firstName} {user.lastName} <br />
              {user.email} <br />
              {user.password}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default LiveUpdateForm;
