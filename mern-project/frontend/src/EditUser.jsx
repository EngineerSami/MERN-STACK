import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EditUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({ firstName: "", lastName: "", age: "" });
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch(`http://localhost:8000/api/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setUser(data)})
        .catch((error) => console.error("Error:", error));
    }, [id]);
  
    const handleInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`http://localhost:8000/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then(() => navigate("/"))
        .catch((error) => console.error("Error:", error));
    };
  
    return (
      <div>
        <Link to="/">Home</Link>
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={user.firstName} onChange={handleInputChange} />
          <input type="text" name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleInputChange} />
          <input type="number" name="age" placeholder="Age" value={user.age} onChange={handleInputChange} />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  };

  export default EditUser;