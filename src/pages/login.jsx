import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {

    try {
      if (!email || !password) {
        alert("All fields are required");
        return;
      }
      const response = await axios.post(
        "http://localhost:9000/api/login",
        {
          email,
          password,
        }
      );

      // Token save
      localStorage.setItem("token", response.data.token);
      alert("Login Successful");
      navigate("/");
    }
    catch (error) {
      console.log(error);
      alert("Login Failed");
    }
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
      <p>
        Continue without login? <Link to="/">Go to Home</Link>
      </p>

    </div>
  );
}

export default Login;