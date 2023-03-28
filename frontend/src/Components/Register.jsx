import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  // const [msg, setMsg] = useState("");
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    contact: 0,
  });

  console.log("data", data);
  // console.log(msg);

  const handleSubmit = (e) => {
    setData({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      contact: contact,
    });
    setFirstname(e.target.value);
    setLastname(e.target.value);
    setEmail(e.target.value);
    setPassword(e.target.value);
    setContact(e.target.value);
    axios
      .post("http://localhost:5000/userRegister", {
        firstname,
        lastname,
        email,
        password,
        contact,
      })
      .then((res) => {
        if (res.data.status === 1) {
          alert(res.data.message);
          console.log("backend response", res);
        } else {
          alert(res.data.message);
          console.log("backend response", res);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
    console.log("hi students");
  };

  return (
    <>

      <div className="register_container" >
          <h2>Register</h2>
          {/* <label>First Name</label> */}
          <input
            type="text"
            className="register_input"
            value={firstname}
            placeholder="First name"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <br />
          {/* <label>Last Name</label> */}
          <input
            type="text"
            className="register_input"
            value={lastname}
            placeholder="Last name"
            onChange={(e) => setLastname(e.target.value)}
          />
          <br />
          {/* <label>Email address</label> */}
          <input
            type="email"
            className="register_input"
            value={email}
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          {/* <label>Password</label> */}
          <input
            type="password"
            className="register_input"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          {/* <label>Contact</label> */}
          <input
            type="number"
            className="register_input"
            value={contact}
            placeholder="Mobile no."
            onChange={(e) => setContact(e.target.value)}
          />
          <br />
          {firstname.length > 0 &&
          lastname.length > 0 &&
          email.length > 0 &&
          password.length > 0 &&
          contact.length > 0 ? (
            <button onClick={handleSubmit}>Register</button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled
              style={{ cursor: "not-allowed" }}
            >
              Register
            </button>
          )}
          <br />
          Already registered 
          <Link to="/login"> Signin</Link>
        </div>
        {/* <div class="form-check">
      <input type="checkbox" class="form-check-input" id="Check"/>
      <label>Remember me</label>
    </div> */}

        
         
    </>
  );
}
export default Register;
