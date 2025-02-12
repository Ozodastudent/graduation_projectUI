import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthPage.css";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form>
          {isSignUp && <input type="text" placeholder="Full Name" />}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{isSignUp ? "Sign Up" : "Sign In"}</button>
        </form>
        <p className="toggle-text">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
    </div>
  );
};

export default AuthPage;
