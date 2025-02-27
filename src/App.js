import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import "./styles.css";
import { FaUserCircle } from "react-icons/fa";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="app-container">
      <nav className="navbar">
        <Link to="/" className="nav-logo">Push Notification App</Link>
        <div className="nav-links">
          {user ? (
            <div className="user-info">
              <Link to="/profile" className="user-icon">
                <FaUserCircle size={24} /> {user.full_name}
              </Link>
            </div>
          ) : (
            <>
              <Link to="/register" className="btn">Register</Link>
              <Link to="/login" className="btn">Login</Link>
            </>
          )}
        </div>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={user ? <h1>Welcome, {user.full_name}!</h1> : <h1>Welcome to the Push Notification Platform</h1>} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register setUser={setUser} />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login setUser={setUser} />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
