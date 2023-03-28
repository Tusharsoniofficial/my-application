import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function Forgotpassword(props) {
  //   const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [msg, setMsg] = useState("");

  const reset = (e) => {
    setemail(e.target.value);
    setpassword(e.target.value);
    setconfirm_password(e.target.value);
    console.log("data", { email, password, confirm_password });
    axios
      .post("http://localhost:5000/forgotPassword", {
        email,
        password,
        confirm_password,
      })
      .then((res) => {
        if (res.data.status === 1) {
          setMsg(res.data.message);
          console.log("backend response", res);   
        } else {
          setMsg(res.data.message);
          console.log("backend response", res);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Forgotpassword</h1>
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <input
          type="text"
          value={confirm_password}
          onChange={(e) => setconfirm_password(e.target.value)}
          placeholder="Confirm Password"
        />
        <br />
        <br />

        {email.length > 0 &&
        password.length > 0 &&
        confirm_password.length > 0 ? (
          <button onClick={reset}>reset password</button>
        ) : (
          <button onClick={reset} disabled style={{ cursor: "not-allowed" }}>
            reset password
          </button>
        )}
        <br />
        {msg}
      </div>
    </>
  );
}
export default Forgotpassword;
