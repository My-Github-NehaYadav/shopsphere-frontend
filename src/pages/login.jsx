import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <div className="login-container">

      <div className="heading-section">
        <h1>Welcome Back</h1>
      </div>

      <div>
        <h3>Login to continue shopping</h3>
      </div>

      <div className="form-group">
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleLogin}>
        Login
      </button>

      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>

    </div>
  );
}

export default Login;