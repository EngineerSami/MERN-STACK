import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UsersList from "./UsersList";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the User List App</h1>
        <nav>
        </nav>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
