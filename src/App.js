import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>My App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/auth">Sign In / Sign Up</Link>
        </nav>
      </header>

      <main className="welcome-content">
        <h2>Welcome to My App</h2>
        <p>Experience seamless sign-in and sign-up.</p>
        <Link to="/auth" className="welcome-button">
          Get Started
        </Link>
      </main>
    </div>
  );
};

export default App;
