import React from "react";
import "./LoginPage.css"; // Ensure styling is in place

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login / Sign Up</h1>
        <form className="input-group">
          <input 
            type="text" 
            placeholder="Username" 
            className="input-field" 
            aria-label="Username"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="input-field" 
            aria-label="Email"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="input-field" 
            aria-label="Password"
          />
        </form>
        <div className="actions">
          <button type="submit" className="login-btn">Login / Sign Up</button>
          <a href="/reset-password" className="forgot-password">Forgot Password?</a>
        </div>
      </div>
      <div className="illustration">
        <img
          src="https://example.com/illustration.png" // Replace with the actual illustration link
          alt="Login Illustration"
          loading="lazy" // Optimize image loading
        />
      </div>
    </div>
  );
};

export default LoginPage;
