import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [data, setData] = useState("");
  const [msg, setMsg] = useState("");

  
  const getData = async () => {
    axios.get("http://localhost:5000/getUserDetails").then((res) => {
      console.log("data response", res);
      setData();
    });
  };
  
  // console.log(data);
  //------------------------------------------------function starts
  const handletask = (e) => {
    setemail(e.target.value);
    setpassword(e.target.value);
    console.log("data", { email, password });
    axios
      .post("http://localhost:5000/userLogin", { email, password })

      .then((res) => {
        if (res.data.status === 1) {
          setMsg(res.data.message);
          localStorage.setItem("email", res.data.email);
          setTimeout(() => {
            navigate("/");
            // setMsg(res.data.response);
            console.log("backend response", res);
          }, 5000);
        } else {
          setMsg(res.data.message);
          console.log("backend response", res);
          // alert(res.data.message);
          setTimeout(() => {
            navigate("/Register");
          }, 5000);

          // alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
    console.log("hi students");
  };
  //------------------------------------------------function ends
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <>
      <div className="login" style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Login</h1>
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
          <button onClick={handletask}>Sign in</button>) :
          (<button
            onClick={handletask}
            disabled
            style={{ cursor: "not-allowed" }}>Sign in
          </button>)}
        
        <br />

        {email.length > 0 ? (
          <button disabled>
          <Link to="/forgotpassword">forgot Password</Link>
        </button>
        )
          :
        (
          <button disabled style={{ cursor: "not-allowed" }} >
          <Link style={{pointerEvents: "none"}} to="/forgotpassword">forgot Password</Link>
        </button>
        )}
        <br/>
        {msg}{data}
      </div>
    </>
  );
}
export default Login;
