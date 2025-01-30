import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CreateUser = () => {
    const [newUser, setNewUser] = useState({ firstName: "", lastName: "", age: "" });
    const navigate = useNavigate();
  
    const handleInputChange = (e) => {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("http://localhost:8000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
        .then(() => navigate("/"))
        .catch((error) => console.error("Error:", error));
    };
  
    return (
      <div>
        <Link to="/">Home</Link>
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={newUser.firstName} onChange={handleInputChange} />
          <input type="text" name="lastName" placeholder="Last Name" value={newUser.lastName} onChange={handleInputChange} />
          <input type="number" name="age" placeholder="Age" value={newUser.age} onChange={handleInputChange} />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  };
  
  export default CreateUser;