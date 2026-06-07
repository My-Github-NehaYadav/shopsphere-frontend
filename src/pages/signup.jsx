import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignup = async () => {
    try {
      if (!name || !email || !password) {
        alert("All fields are required");
        return;
      }
      const response = await axios.post(
        "http://localhost:9000/api/signup",
        {
          name,
          email,
          password,
        }
      );

      console.log("pppppppppppppp");
      console.log(response.data);
      alert("Signup Successful");
    } catch (error) {
      console.log(error);
      alert("Signup Failed");
    }
  };


  return (
    <div className="signup-container" >

      <div className="heading-section">
        <h1>Welcome to ShopSphere</h1>
      </div>

      <div>
        <h3>Sign up to start shopping</h3>
      </div>

      <form>
        <div className="form-group" >
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
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

        <button type="button" onClick={handleSignup}>
          Signup
        </button>
        <p>
          Already registered? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}



export default Signup;
