import React, { useState } from "react";
import kiwify from "./kiwify.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const getUserData = JSON.parse(localStorage.getItem("user"));
    console.log(getUserData);
    if (getUserData.email === email && getUserData.pass === password) {
      alert("login successfully");
      setEmail("");
      setPassword("");
    } else {
      alert("Wrong");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div>
      <img src={kiwify} />
      <h1>Login to your Account</h1>
      <h5
        style={{
          display: "block",
          textAlign: "center",
          padding: "20px",
          margin: "auto",
        }}
      >
        or <Link to={"/signup"}>Reister here</Link>
      </h5>
      <div className="formDiv">
        <div className="input">
          Email:
          <br />
          <input
            className="inputField"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              // setEmail('');
            }}
          />
          <br />
          Password:
          <br />
          <input
            className="inputFiled"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <a href="" style={{ textAlign: "center" }}>
            Forget Password
          </a>
          <button className="btn" onClick={handleLogin}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const storedAccountData = localStorage.getItem("accountData");
//     if (storedAccountData) {
//       const accountData = JSON.parse(storedAccountData);
//       if (accountData.email === email && accountData.password === password) {
//         setLoggedIn(true);
//       } else {
//         alert("Invalid email or password");
//       }
//     } else {
//       alert("No account found");
//     }
//     setEmail("");
//     setPassword("");
//   };

//   if (loggedIn) {
//     return <div>You are logged in!</div>;
//   }

//   return (
//     <form onSubmit={handleLogin}>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={handleEmailChange} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );
// };
