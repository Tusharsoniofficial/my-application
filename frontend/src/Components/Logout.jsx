import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Logout(props) {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [data, setdata] = useState("");
  const [msg, setMsg] = useState("");

  // console.log(data);
  //------------------------------------------------function starts
  const handletask = (e) => {
    setemail(e.target.value);
    setpassword(e.target.value);
    console.log("data", { email, password });
    axios
      .post("http://localhost:5000/userLogout", { email, password })

      .then((res) => {
        if (res.data.status === 1) {
          setMsg(res.data.message);
          localStorage.removeItem("email", res.data.response);
          setTimeout(() => {
            navigate("/Register");
            console.log("backend response", res);
          }, 4000);
        } else {
          alert(res.data.message);
          // setMsg(res.data.message);
          console.log("backend response", res);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
    console.log("hi students");
  };
  //------------------------------------------------function ends
  return (
    <>
      <div className="logout" style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Logout</h1>
        {/* <label>Email address</label> */}
        <input
          type="email"
          className="form-control"
          value={email}
          placeholder="email@example.com"
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        {/* <label>Password</label> */}
        <input
          type="password"
          className="form-control"
          value={password}
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        {/* <div className="form-check">
      <input type="checkbox" className="form-check-input" id="Check"/>
      <label>Remember me</label>
    </div> */}
        {email.length > 0 && password.length > 0 ? (
          <button onClick={handletask}>Sign out</button>
        ) : (
          <button
            onClick={handletask}
            disabled
            style={{ cursor: "not-allowed" }}
          >
            Sign out
          </button>
        )}
        <br />
        {msg}
      </div>
    </>
  );
}
export default Logout;
