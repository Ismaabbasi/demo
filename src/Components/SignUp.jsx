import React, { useState } from "react";
import kiwify from "./kiwify.png";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    repeatEmail: "",
    pass: "",
  });
  
  console.log(data);
  const [users, setUsers] =useState([])

  //   const [saveData, setSaveData] = useState("");
  return (
    <div className="main">
      <img
        src={kiwify}
        style={{ display: "block", padding: "20px", margin: "auto" }}
      />
      <h1>Create new Account</h1>
      <h5
        style={{
          textAlign: "center",
          fontFamily: "Arial",
          fontWeight: "bolder",
        }}
      >
        or <Link to={"/signin"}>log into your existing account</Link>
      </h5>
      <div className="formDiv">
        <div className="input">
          Email:
          <br />
          <input
            className="inputFiled"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
              // setData("");
            }}
          />
          <br />
          Repeat-Email:
          <br />
          <input
            className="inputFiled"
            required
            value={data.repeatEmail}
            onChange={(e) => {
              setData({ ...data, repeatEmail: e.target.value });
              // setData("");
            }}
          />
          <br />
          Password:
          <br />
          <input
            className="inputFiled"
            value={data.pass}
            onChange={(e) => {
              setData({ ...data, pass: e.target.value });
              // setData("");
            }}
          />
          <br />
          <input type="checkbox" />
          <span style={{ paddingRight: "5px", paddingLeft: "5px" }}>
          
            I have read and accept kiwify's
          </span>
          ,
          <a
            href=""
            style={{ color: "black", paddingRight: "5px", paddingLeft: "5px" }}
          >
            term of use
          </a>
          ,
          <a
            href=""
            style={{ color: "black", paddingRight: "5px", paddingLeft: "5px" }}
          >
            software license terms
          </a>
          ,
          <a
            href=""
            style={{ color: "black", paddingRight: "5px", paddingLeft: "5px" }}
          >
            content policy
          </a>
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              //   setSaveData(data);
              setUsers([...users,data])
              localStorage.setItem("user", JSON.stringify(users));
              setData({pass:"", email:'', repeatEmail:''})
              console.log(data);
            }}
          >
            Create and Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
