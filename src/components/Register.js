import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../api";
import "../styles.css";

function Register({ setUser }) {
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    password: "",
    work_hours: 40, // Default work hours
    sleep_hours: 8, // Default sleep hours
    one_signal_player_id: "default-id", // Placeholder, update this later
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/accounts/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user data in local storage
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);

        // Send user ID to backend to mark as a subscriber
        await fetch(`${API_BASE_URL}/accounts/update-player-id/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ player_id: data.id }), // Using user ID
        });

        navigate("/");
      } else {
        setError(data.username || data.password || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection or try again later.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="full_name" placeholder="Full Name" onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="number" name="work_hours" placeholder="Work Hours" onChange={handleChange} required />
        <input type="number" name="sleep_hours" placeholder="Sleep Hours" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
