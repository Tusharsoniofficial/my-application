import axios from "axios";
import React, { useState } from "react";

const Deleteuser = () => {
  const [email, setemail] = useState("");
  const [msg, setMsg] = useState("");

  const deleteuser = (e) => {
    setemail(e.target.value);
   
    axios
      .post("http://localhost:5000/userDelete",{email})
      .then((res) => {
        if (res.data.status === 1) {
          setMsg(res.data.message);
          alert(res.data.message);
          console.log(res);
        } else {
          setMsg(res.data.message);
          console.log(res);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <input
        type="email"
        value={email}
        placeholder="xyz@gmail.com"
        onChange={(e) => setemail(e.target.value)}
      ></input><br/>
      
      <button onClick={deleteuser}>delete</button>
      <br />
      {msg}
    </div>
  );
};

export default Deleteuser;
