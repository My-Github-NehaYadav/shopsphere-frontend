import "./Signup.css";
import { useState } from "react";
import axios from "axios";

// function Signup() {
//   console.log("Signup Render Ho Raha Hai");
//   return (
//     <div>
//       <h1>ShopSphere</h1>

//       <input placeholder="Enter Name" />
//       <input placeholder="Enter Email" />
//       <input placeholder="Enter Password" />
//       <button>Signup</button>
//     </div>
//   );
// }


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignup = async () => {
    try {
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
    <div>
      <div>
        <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      </div>

      <div>
        <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      </div>
      <div>
        <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>

      <button onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
}



export default Signup;
