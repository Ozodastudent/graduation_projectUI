// src/components/Profile.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Profile({ user }) {
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h2>Profile</h2>
      <p><strong>Full Name:</strong> {user.full_name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <Link to="/" className="btn">Back to Main</Link>
    </div>
  );
}

export default Profile;
